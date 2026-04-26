import React, { useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, CheckCircle } from 'lucide-react';
import StarRating from './StarRating';
import SEO from './SEO';

const FeedbackPage = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;

        setSubmitting(true);
        try {
            await addDoc(collection(db, 'reviews'), {
                authorId: user?.uid || 'guest',
                authorName: user?.name || 'Guest Explorer',
                targetId: 'lagosfit_platform',
                targetType: 'platform',
                rating,
                comment: comment.trim(),
                createdAt: Timestamp.now()
            });
            setSubmitted(true);
        } catch (err) {
            console.error('Error submitting feedback:', err);
            alert('Failed to submit feedback. Please try again.');
        }
        setSubmitting(false);
    };

    return (
        <div style={{ minHeight: 'calc(100vh - var(--nav-height))', padding: '60px 20px' }}>
            <SEO 
                title="Tell Us What You Think | LagosFit" 
                description="Share your feedback and reviews about LagosFit. We use your input to build the best neighborhood finder in Lagos." 
            />

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                                <div style={{ 
                                    width: '64px', height: '64px', borderRadius: '20px', 
                                    background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary-color)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 24px'
                                }}>
                                    <MessageSquare size={32} strokeWidth={1.5} />
                                </div>
                                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '16px', letterSpacing: '-1px' }}>
                                    We Value Your Feedback
                                </h1>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    Help us build the smartest neighborhood finder in Lagos. Share your thoughts, suggestions, or your success story!
                                </p>
                            </div>

                            <div className="card" style={{ padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                                <form onSubmit={handleSubmit}>
                                    <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                                        <label style={{ display: 'block', marginBottom: '12px', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                                            How would you rate LagosFit?
                                        </label>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <StarRating rating={rating} interactive onChange={setRating} size={32} />
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '32px' }}>
                                        <label style={{ display: 'block', marginBottom: '12px', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                                            Your Review
                                        </label>
                                        <textarea
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            placeholder="Tell us what you liked, or where we can improve..."
                                            required
                                            style={{
                                                width: '100%', minHeight: '160px', padding: '20px',
                                                borderRadius: '16px', border: '1px solid var(--border-color)',
                                                background: 'var(--secondary-bg)', color: 'var(--text-main)',
                                                fontSize: '1rem', lineHeight: 1.6, outline: 'none',
                                                resize: 'vertical', display: 'block', boxSizing: 'border-box'
                                            }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitting || !comment.trim()}
                                        className="btn btn-primary"
                                        style={{ 
                                            width: '100%', height: '56px', fontSize: '1.1rem', fontWeight: 700,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'
                                        }}
                                    >
                                        {submitting ? 'Submitting...' : (
                                            <>
                                                Send Review <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                </form>
                                
                                {user?.uid === 'guest' && (
                                    <p style={{ marginTop: '20px', fontSize: '0.85rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                        Posting as <strong>Guest Explorer</strong>. <br/>
                                        Results are public and highly appreciated!
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ textAlign: 'center', padding: '60px 0' }}
                        >
                            <div style={{ 
                                width: '80px', height: '80px', borderRadius: '50%', 
                                background: 'var(--success-color)', color: 'white',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 32px'
                            }}>
                                <CheckCircle size={40} />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '16px' }}>Feedback Received!</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
                                Thank you for your honesty. We're using your feedback to make LagosFit even better for everyone.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                                <button className="btn" onClick={() => (window.location.href = '/')}>Go Home</button>
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => {
                                        setSubmitted(false);
                                        setComment('');
                                        setRating(5);
                                    }}
                                >
                                    Write Another
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FeedbackPage;
