import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { MessageSquare, Trash2, MapPin, Briefcase, Sparkles } from 'lucide-react';
import StarRating from './StarRating';

interface Review {
    id: string;
    authorId: string;
    authorName: string;
    targetId: string;
    targetType: 'agent' | 'area' | 'platform';
    rating: number;
    comment: string;
    createdAt: any;
}

const AdminReviewsTab = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchReviews = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
            const snap = await getDocs(q);
            setReviews(snap.docs.map(d => ({ id: d.id, ...d.data() } as Review)));
        } catch (err) {
            console.error('Failed to fetch reviews:', err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleDelete = async (id: string) => {
        if (!window.confirm('Delete this review?')) return;
        try {
            await deleteDoc(doc(db, 'reviews', id));
            fetchReviews();
        } catch (err) {
            console.error('Error deleting review:', err);
        }
    };

    return (
        <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <MessageSquare size={24} color="var(--primary-color)" />
                <h2 style={{ margin: 0 }}>Community Reviews</h2>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>Loading reviews...</div>
            ) : reviews.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '80px', background: 'var(--secondary-bg)', borderRadius: '24px', border: '2px dashed var(--border-color)' }}>
                    <p style={{ color: 'var(--text-muted)' }}>No reviews found.</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {reviews.map(review => (
                        <motion.div 
                            key={review.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card"
                            style={{ 
                                padding: '24px', 
                                display: 'flex', 
                                flexWrap: 'wrap',
                                gap: '20px', 
                                alignItems: 'start' 
                            }}
                        >
                            <div className="hide-on-mobile" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontWeight: 700, flexShrink: 0 }}>
                                {review.authorName?.[0] || 'U'}
                            </div>
                            <div style={{ flex: '1 1 250px', minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                                    <span style={{ fontWeight: 700 }}>{review.authorName}</span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                        {review.createdAt?.seconds ? new Date(review.createdAt.seconds * 1000).toLocaleDateString() : 'New'}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                                    <StarRating rating={review.rating} size={12} />
                                    <span style={{ 
                                        fontSize: '0.75rem', 
                                        color: 'var(--primary-color)', 
                                        background: 'rgba(var(--primary-rgb), 0.1)', 
                                        padding: '2px 8px', 
                                        borderRadius: '4px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '4px' 
                                    }}>
                                        {review.targetType === 'area' ? <MapPin size={10} /> : review.targetType === 'agent' ? <Briefcase size={10} /> : <Sparkles size={10} />}
                                        {review.targetType === 'platform' ? 'LagosFit Platform' : review.targetId}
                                    </span>
                                </div>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5, wordBreak: 'break-word' }}>
                                    "{review.comment}"
                                </p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', flexShrink: 0 }}>
                                <button 
                                    onClick={() => handleDelete(review.id)}
                                    className="btn-icon"
                                    style={{ color: '#ef4444', padding: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
                                    title="Delete Review"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminReviewsTab;
