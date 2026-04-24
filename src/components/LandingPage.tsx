import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { useQuiz } from '../context/QuizContext';
import { useAuth } from '../context/AuthContext';
import { AREAS } from '../data/quiz_data';
import SEO from './SEO';

const LandingPage = () => {
    const { t, language } = useLanguage();
    const navigate = useNavigate();
    const { resetQuiz } = useQuiz();
    const { user } = useAuth();

    // Reset quiz when landing on the home page
    useEffect(() => {
        resetQuiz();
    }, [resetQuiz]);

    return (
        <div style={{ overflowX: 'hidden' }}>
            <SEO 
                title="Find Your Perfect Neighborhood" 
                description="Discover the ideal Lagos neighborhood that matches your lifestyle, budget, and vibe with our AI-powered area finder."
            />

            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 24px'
            }}>
                {/* Background Logo Pattern Replacement */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `url(/logo.png)`,
                    backgroundSize: '320px',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center',
                    opacity: 0.08,
                    zIndex: -1,
                    pointerEvents: 'none'
                }} />

                <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '48px', paddingTop: '80px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, fontWeight: 800 }}
                    >
                        {t('landing.title')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}
                    >
                        {t('landing.subtitle')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ marginTop: '20px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <button
                            onClick={() => {
                                if (!user) {
                                    navigate('/login', { state: { from: '/quiz' } });
                                    return;
                                }
                                resetQuiz();
                                navigate('/quiz');
                            }}
                            className="btn btn-primary"
                            style={{ padding: '16px 40px', fontSize: '1.1rem' }}
                        >
                            {t('landing.cta')} <ArrowRight size={20} />
                        </button>
                        <button
                            onClick={() => navigate('/history')}
                            className="btn btn-outline"
                            style={{ padding: '16px 28px', fontSize: '1rem', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <Clock size={20} /> {t('landing.view_history')}
                        </button>
                    </motion.div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', opacity: 0.8, marginTop: '10px' }}>
                        {t('landing.time')}
                    </p>
                </div>
            </section>

            {/* How it Works */}
            <section style={{ padding: '80px 24px', backgroundColor: 'var(--secondary-bg)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>{t('landing.how.title')}</h2>
                        <p style={{ color: 'var(--text-muted)' }}>{t('landing.how.subtitle')}</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                        {[
                            { icon: <CheckCircle size={32} strokeWidth={1.5} />, title: t('landing.how.step1.title'), text: t('landing.how.step1.text') },
                            { icon: <MapPin size={32} strokeWidth={1.5} />, title: t('landing.how.step2.title'), text: t('landing.how.step2.text') },
                            { icon: <ArrowRight size={32} strokeWidth={1.5} />, title: t('landing.how.step3.title'), text: t('landing.how.step3.text') }
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ textAlign: 'center', padding: '40px 24px', border: '1px solid var(--border-color)' }}>
                                <div style={{ marginBottom: '20px', color: 'var(--primary-color)', opacity: 0.8 }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '12px', fontSize: '1.25rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Areas */}
            <section style={{ padding: '80px 24px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '16px', fontWeight: 800 }}>
                            {t('landing.trending.title')}
                        </h2>
                        <p style={{ color: 'var(--text-muted)' }}>{t('landing.trending.subtitle')}</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '32px'
                    }}>
                        {AREAS.filter(a => ['yaba', 'lekki_1', 'ikeja', 'surulere', 'vi', 'magodo'].includes(a.id)).slice(0, 3).map(area => (
                            <motion.div
                                key={area.id}
                                className="card"
                                whileHover={{ y: -8 }}
                                onClick={() => {
                                    if (!user) {
                                        navigate('/login', { state: { from: '/explore' } });
                                        return;
                                    }
                                    navigate('/explore', { state: { selectedId: area.id } });
                                }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                style={{
                                    padding: 0,
                                    overflow: 'hidden',
                                    border: 'none',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer'
                                }}
                            >
                                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                        backgroundImage: 'url(/lagos_cityscape_illustration.png)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.5s ease'
                                    }} />
                                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                                    <h3 style={{ position: 'absolute', bottom: '20px', left: '24px', color: 'white', fontWeight: 700, fontSize: '1.6rem' }}>{area.name}</h3>
                                    <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', padding: '6px 12px', borderRadius: '20px', color: 'white', fontSize: '0.8rem', fontWeight: 600 }}>
                                        {t('landing.trending.label')}
                                    </div>
                                </div>
                                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                                            {area.description[language] || area.description['en']}
                                        </p>
                                    </div>
                                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div>
                                            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>{t('landing.trending.starts')}</span>
                                            <span style={{ fontWeight: 700, color: 'var(--primary-color)', fontSize: '1rem' }}>{area.priceRange[language].split('(')[0]}</span>
                                        </div>
                                        <button
                                            onClick={() => navigate('/explore')}
                                            style={{ background: 'var(--secondary-bg)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-main)' }}
                                        >
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
