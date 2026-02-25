import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, Trash2, Loader2, Cloud } from 'lucide-react';

const HistoryPage = () => {
    const { history, clearHistory, historyLoading } = useQuiz();
    const { user } = useAuth();
    const navigate = useNavigate();

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="container" style={{ padding: '60px 24px', maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <button
                    onClick={() => navigate('/')}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                >
                    <ArrowLeft size={20} /> Back to Home
                </button>
                {history.length > 0 && (
                    <button
                        onClick={clearHistory}
                        style={{ background: 'none', border: 'none', color: '#ff4444', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem' }}
                    >
                        <Trash2 size={16} /> Clear History
                    </button>
                )}
            </div>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Your Quiz History</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>View your past recommendations and matches.</p>
                {user && (
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '4px',
                        fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: 600,
                        background: 'rgba(var(--primary-rgb), 0.1)', padding: '4px 10px',
                        borderRadius: '20px'
                    }}>
                        <Cloud size={12} /> Synced
                    </span>
                )}
            </div>

            {historyLoading ? (
                <div className="card" style={{ textAlign: 'center', padding: '60px 40px' }}>
                    <Loader2 size={36} color="var(--primary-color)" style={{ animation: 'spin 1s linear infinite', marginBottom: '16px' }} />
                    <p style={{ color: 'var(--text-muted)' }}>Loading your history...</p>
                    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                </div>
            ) : history.length === 0 ? (
                <div className="card" style={{ textAlign: 'center', padding: '60px 40px' }}>
                    <Clock size={48} color="var(--border-color)" style={{ marginBottom: '20px' }} />
                    <h3>No history yet</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Take the quiz to find your perfect Lagos area!</p>
                    <button className="btn btn-primary" onClick={() => navigate('/quiz')}>Start Quiz</button>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {history.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="card"
                            style={{
                                padding: '24px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}
                            onClick={() => navigate('/result', { state: { fromHistory: true, answers: item.answers } })}
                        >
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                    <MapPin size={16} color="var(--primary-color)" />
                                    <h3 style={{ margin: 0 }}>{item.topMatch.name}</h3>
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    {formatDate(item.date)}
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-color)' }}>
                                    {item.answers.customBudget ? `₦${item.answers.customBudget.toLocaleString()}` : item.answers.rent}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                    Budget
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HistoryPage;
