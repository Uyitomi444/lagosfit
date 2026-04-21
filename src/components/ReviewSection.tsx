import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc, query, where, getDocs, orderBy, Timestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, CheckCircle } from 'lucide-react';
import StarRating from './StarRating';
import { useLanguage } from '../context/LanguageContext';

interface Review {
    id: string;
    authorId: string;
    authorName: string;
    targetId: string;
    rating: number;
    comment: string;
    createdAt: any;
}

interface ReviewSectionProps {
    targetId: string;
    targetType: 'agent' | 'area';
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ targetId, targetType }) => {
    const { user } = useAuth();
    const { t } = useLanguage();
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [newRating, setNewRating] = useState(5);
    const [newComment, setNewComment] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const fetchReviews = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(db, 'reviews'),
                where('targetId', '==', targetId),
                orderBy('createdAt', 'desc')
            );
            const snap = await getDocs(q);
            const fetched = snap.docs.map(d => ({ id: d.id, ...d.data() } as Review));
            setReviews(fetched);
        } catch (err: any) {
            console.error('Failed to fetch reviews:', err);
            // Handle missing index or other Firestore errors gracefully
            if (err.code === 'failed-precondition' || err.message?.includes('index')) {
                console.warn('Firestore index missing for reviews sorting. Showing unsorted fallback.');
                try {
                    const fallbackQuery = query(
                        collection(db, 'reviews'),
                        where('targetId', '==', targetId)
                    );
                    const fallbackSnap = await getDocs(fallbackQuery);
                    const fallbackFetched = fallbackSnap.docs.map(d => ({ id: d.id, ...d.data() } as Review));
                    setReviews(fallbackFetched);
                } catch (fallbackErr) {
                    console.error('Fallback fetch also failed:', fallbackErr);
                    setReviews([]); // Secure fallback to empty state
                }
            } else {
                setReviews([]);
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchReviews();
    }, [targetId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !user.isPremium) return;
        if (!newComment.trim()) return;

        setSubmitting(true);
        try {
            const reviewData = {
                authorId: user.uid,
                authorName: user.name || 'Anonymous User',
                targetId,
                targetType,
                rating: newRating,
                comment: newComment,
                createdAt: Timestamp.now()
            };

            await addDoc(collection(db, 'reviews'), reviewData);
            setNewComment('');
            setNewRating(5);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
            fetchReviews();
        } catch (err) {
            console.error('Failed to submit review:', err);
        }
        setSubmitting(false);
    };

    return (
        <div style={{ marginTop: '48px', borderTop: '1px solid var(--border-color)', paddingTop: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <MessageSquare size={24} color="var(--primary-color)" strokeWidth={1.5} />
                <h3 style={{ margin: 0, fontSize: '1.6rem' }}>{t('review.title')}</h3>
            </div>

            {/* Review Submission Form (Pro Only) */}
            <div className="card" style={{ padding: '32px', marginBottom: '40px', background: 'var(--secondary-bg)', border: 'none' }}>
                {!user?.isPremium ? (
                    <div style={{ textAlign: 'center', padding: '10px' }}>
                        <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-color)' }}>{t('review.share_exp')}</div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>{t('review.pro_only')}</p>
                        <button className="btn btn-primary" onClick={() => window.location.hash = '#/pricing'}>{t('review.upgrade_btn')}</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>{t('review.your_rating')}</label>
                            <StarRating rating={newRating} interactive onChange={setNewRating} size={24} />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>{t('review.your_comment')}</label>
                            <textarea 
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder={t('review.placeholder')}
                                rows={4}
                                style={{
                                    width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)',
                                    background: 'var(--bg-color)', color: 'var(--text-main)', fontSize: '1rem',
                                    outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
                            <AnimatePresence>
                                {showSuccess && (
                                    <motion.div 
                                        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                                        style={{ color: 'var(--success-color)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}
                                    >
                                        <CheckCircle size={16} /> {t('review.submitted')}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <button 
                                type="submit" 
                                disabled={submitting || !newComment.trim()}
                                className="btn btn-primary"
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 24px' }}
                            >
                                <Send size={18} strokeWidth={1.5} /> {submitting ? t('review.submitting') : t('review.post_btn')}
                            </button>
                        </div>
                    </form>
                )}
            </div>

            {/* Reviews List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {loading ? (
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t('review.loading')}</p>
                ) : reviews.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px', background: 'var(--secondary-bg)', borderRadius: '16px', color: 'var(--text-muted)' }}>
                        {t('review.no_reviews')}
                    </div>
                ) : (
                    reviews.map((r) => (
                        <motion.div 
                            key={r.id}
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className="card" style={{ padding: '24px' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                                        {r.authorName?.[0] || 'U'}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>{r.authorName}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                            {r.createdAt?.seconds ? new Date(r.createdAt.seconds * 1000).toLocaleDateString() : 'Recently'}
                                        </div>
                                    </div>
                                </div>
                                <StarRating rating={r.rating} size={14} />
                            </div>
                            <p style={{ color: 'var(--text-main)', lineHeight: 1.6, margin: 0 }}>{r.comment}</p>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ReviewSection;
