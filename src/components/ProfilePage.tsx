
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, Mail, Crown, Heart, Clock, Settings, LogOut, 
    Save, Camera, MapPin, ArrowRight, ChevronRight, AlertCircle
} from 'lucide-react';
import { AREAS } from '../data/quiz_data';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProfilePage = () => {
    const { user, logout, updateUserInfo, toggleFavorite, getQuizHistory } = useAuth();
    const { t, language } = useLanguage();
    const navigate = useNavigate();
    
    const [name, setName] = useState(user?.name || '');
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [quizHistory, setQuizHistory] = useState<any[]>([]);
    const [loadingHistory, setLoadingHistory] = useState(true);
    const [uploadingImage, setUploadingImage] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        setName(user.name || '');
        
        const fetchHistory = async () => {
            const history = await getQuizHistory();
            setQuizHistory(history);
            setLoadingHistory(false);
        };
        fetchHistory();
    }, [user, navigate, getQuizHistory]);

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            await updateUserInfo(name);
            setIsEditing(false);
            setMessage({ type: 'success', text: t('profile.updated_success') });
            setTimeout(() => setMessage({ type: '', text: '' }), 3000);
        } catch (err) {
            setMessage({ type: 'error', text: t('profile.updated_fail') });
        } finally {
            setIsSaving(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !user) return;

        if (file.size > 2 * 1024 * 1024) {
            setMessage({ type: 'error', text: 'Image size should be less than 2MB' });
            return;
        }

        setUploadingImage(true);
        setMessage({ type: '', text: '' });
        setMessage({ type: 'info', text: t('profile.avatar_optimizing') });
        
        try {
            const photoDataUrl = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => {
                    const img = new Image();
                    img.src = event.target?.result as string;
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const MAX_SIZE = 200;
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > MAX_SIZE) {
                                height *= MAX_SIZE / width;
                                width = MAX_SIZE;
                            }
                        } else {
                            if (height > MAX_SIZE) {
                                width *= MAX_SIZE / height;
                                height = MAX_SIZE;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');
                        ctx?.drawImage(img, 0, 0, width, height);
                        resolve(canvas.toDataURL('image/jpeg', 0.8));
                    };
                    img.onerror = reject;
                };
                reader.onerror = reject;
            });

            setMessage({ type: 'info', text: t('profile.avatar_saving') });
            await updateUserInfo(user.name || '', photoDataUrl);
            setMessage({ type: 'success', text: t('profile.avatar_updated') });
            setTimeout(() => setMessage({ type: '', text: '' }), 5000);
        } catch (err: any) {
            console.error('Image processing error:', err);
            setMessage({ type: 'error', text: `Failed: ${err.message || 'Error processing image.'}` });
        } finally {
            setUploadingImage(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    const favoriteAreas = AREAS.filter(area => user?.favorites?.includes(area.id));

    if (!user) return null;

    return (
        <div className="container" style={{ padding: '60px 24px', maxWidth: '1000px' }}>
            <div 
                className="grid-responsive"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}
            >
                
                {/* Left Column: User Card & Settings */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <motion.div 
                        className="card" 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ padding: '40px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
                    >
                        {user.isPremium && (
                            <div style={{ 
                                position: 'absolute', top: '15px', right: '-35px', 
                                background: 'var(--accent-color)',
                                padding: '8px 40px', transform: 'rotate(45deg)',
                                color: 'var(--text-main)', fontWeight: 800, fontSize: '0.75rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}>
                                {t('profile.pro_badge')}
                            </div>
                        )}

                        <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 20px' }}>
                            <div style={{ 
                                width: '100%', height: '100%', borderRadius: '50%',
                                background: 'var(--secondary-bg)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-color)',
                                border: '3px solid var(--primary-color)',
                                overflow: 'hidden'
                            }}>
                                {user.photoURL ? (
                                    <img 
                                        id="profile-avatar-img"
                                        src={user.photoURL} 
                                        alt={user.name || 'User'} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div className="avatar-fallback">{user.name?.charAt(0) || <User size={40} />}</div>
                                )}
                            </div>
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={handleImageUpload} 
                                style={{ display: 'none' }} 
                                accept="image/*"
                            />
                            <button 
                                onClick={() => fileInputRef.current?.click()}
                                disabled={uploadingImage}
                                style={{
                                    position: 'absolute', bottom: 0, right: 0,
                                    zIndex: 2,
                                    background: 'var(--primary-color)', color: 'white',
                                    border: 'none', width: '32px', height: '32px',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', cursor: 'pointer',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                    opacity: uploadingImage ? 0.7 : 1
                                }}
                            >
                                {uploadingImage ? (
                                    <div style={{ width: '16px', height: '16px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                                ) : (
                                    <Camera size={16} />
                                )}
                            </button>
                        </div>

                        {!isEditing ? (
                            <>
                                <h2 style={{ marginBottom: '8px', fontSize: '1.8rem' }}>{user.name || t('profile.set_name')}</h2>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    <Mail size={16} /> {user.email}
                                </p>
                                <button 
                                    onClick={() => setIsEditing(true)}
                                    className="btn btn-outline" 
                                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                                >
                                    <Settings size={18} /> {t('profile.edit_btn')}
                                </button>
                            </>
                        ) : (
                            <form onSubmit={handleUpdateProfile}>
                                <div style={{ marginBottom: '16px', textAlign: 'left' }}>
                                    <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-muted)' }}>{t('profile.name_label')}</label>
                                    <input 
                                        type="text" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={t('profile.name_placeholder')}
                                        style={{ 
                                            width: '100%', padding: '12px', borderRadius: '12px',
                                            background: 'var(--secondary-bg)', border: '1px solid var(--border-color)',
                                            color: 'var(--text-main)', fontSize: '1rem'
                                        }}
                                        required
                                    />
                                </div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <button 
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="btn btn-outline" 
                                        style={{ flex: 1 }}
                                    >
                                        {t('profile.cancel')}
                                    </button>
                                    <button 
                                        type="submit"
                                        className="btn btn-primary" 
                                        style={{ flex: 1 }}
                                        disabled={isSaving}
                                    >
                                        {isSaving ? t('profile.saving') : <><Save size={18} /> {t('profile.save_btn')}</>}
                                    </button>
                                </div>
                            </form>
                        )}
                        
                        <AnimatePresence>
                            {message.text && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    style={{ 
                                        marginTop: '20px', padding: '12px', borderRadius: '8px',
                                        background: message.type === 'success' ? 'rgba(var(--primary-rgb), 0.05)' : 'rgba(var(--secondary-rgb), 0.05)',
                                        color: message.type === 'success' ? 'var(--success-color)' : 'var(--error-color)',
                                        fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center'
                                    }}
                                >
                                    {message.type === 'error' && <AlertCircle size={16} />}
                                    {message.text}
                                </motion.div>
                            )}
                        </AnimatePresence>


                        <div style={{ marginTop: '30px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                            <button 
                                onClick={handleLogout}
                                style={{ 
                                    background: 'none', border: 'none', color: 'var(--error-color)',
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                                    margin: '0 auto'
                                }}
                            >
                                <LogOut size={18} /> {t('nav.signout')}
                            </button>
                        </div>
                    </motion.div>

                    {/* Premium Card */}
                    {!user.isPremium && (
                        <motion.div 
                            className="card" 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ 
                                padding: '30px', 
                                background: 'var(--primary-color)',
                                color: 'white', border: 'none'
                            }}
                        >
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Crown size={24} /> {t('profile.upgrade_title')}
                            </h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.9, marginBottom: '24px', lineHeight: 1.5 }}>
                                {t('profile.upgrade_desc')}
                            </p>
                            <button 
                                onClick={() => navigate('/pricing')}
                                className="btn" 
                                style={{ background: 'white', color: 'var(--primary-color)', width: '100%', fontWeight: 700 }}
                            >
                                {t('profile.view_pricing')}
                            </button>
                        </motion.div>
                    )}
                </div>

                {/* Right Column: Favorites & Activities */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    
                    {/* Favorites Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Heart size={24} color="#F44336" fill="#F44336" /> {t('profile.shortlist_title')}
                        </h2>
                        {favoriteAreas.length === 0 ? (
                            <div className="card" style={{ padding: '40px 24px', textAlign: 'center' }}>
                                <Heart size={40} color="var(--border-color)" style={{ marginBottom: '16px' }} />
                                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>{t('profile.no_favorites')}</p>
                                <Link to="/explore" className="btn btn-outline" style={{ display: 'inline-flex' }}>{t('profile.explore_btn')}</Link>
                            </div>
                        ) : (
                            <div style={{ display: 'grid', gap: '16px' }}>
                                {favoriteAreas.map(area => (
                                    <motion.div 
                                        key={area.id}
                                        className="card"
                                        whileHover={{ x: 5 }}
                                        style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                                        onClick={() => navigate('/explore', { state: { selectedId: area.id } })}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--secondary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <MapPin size={24} color="var(--primary-color)" />
                                            </div>
                                            <div>
                                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{area.name}</h3>
                                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                                    {area.priceRange[language]?.split('(')[0] || area.priceRange['en']?.split('(')[0]}
                                                </p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleFavorite(area.id);
                                            }}
                                            style={{ background: 'none', border: 'none', color: 'var(--error-color)', cursor: 'pointer', padding: '8px' }}
                                        >
                                            <Heart size={20} fill="var(--error-color)" strokeWidth={1.5} />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Recent History Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Clock size={24} color="var(--primary-color)" /> {t('profile.recent_quiz')}
                            </h2>
                            <Link to="/history" style={{ fontSize: '0.9rem', color: 'var(--primary-color)', fontWeight: 600 }}>{t('profile.view_all')}</Link>
                        </div>
                        {loadingHistory ? (
                            <div className="card" style={{ padding: '24px' }}>{t('review.loading')}</div>
                        ) : quizHistory.length === 0 ? (
                            <div className="card" style={{ padding: '40px 24px', textAlign: 'center' }}>
                                <Clock size={40} color="var(--border-color)" style={{ marginBottom: '16px' }} />
                                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>{t('profile.no_history')}</p>
                                <button onClick={() => navigate('/quiz')} className="btn btn-primary">{t('profile.take_quiz')}</button>
                            </div>
                        ) : (
                            <div className="card" style={{ padding: '24px', position: 'relative' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(var(--primary-rgb), 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <ArrowRight size={24} color="var(--primary-color)" />
                                    </div>
                                    <div>
                                        <h3 style={{ margin: 0 }}>{t('profile.latest_rec')}</h3>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                            {quizHistory[0].topMatch.name} • {new Date(quizHistory[0].date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => navigate('/result', { state: { fromHistory: true, answers: quizHistory[0].answers } })}
                                    className="btn btn-outline" 
                                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                                >
                                    {t('profile.review_result')} <ChevronRight size={18} />
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
