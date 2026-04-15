import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Heart, Globe, Users } from 'lucide-react';
import SEO from './SEO';

const AboutPage = () => {
    const { t } = useLanguage();

    return (
        <div style={{ paddingBottom: '80px', overflowX: 'hidden' }}>
            <SEO 
                title={t('about.title')} 
                description="Learn about LagosFit, our mission to simplify the Lagos housing market, and our commitment to transparency and community."
            />
            {/* Hero Section */}
            <div style={{
                background: 'var(--primary-color)',
                color: 'white',
                padding: '80px 24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', fontWeight: 800 }}>{t('about.title')}</h1>
                    <p style={{ fontSize: '1.4rem', opacity: 0.9, lineHeight: 1.5 }}>{t('about.subtitle')}</p>
                </motion.div>

                {/* Decorative circles */}
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
            </div>

            <div className="container" style={{ padding: '40px 24px' }}>
                <div 
                    className="grid-responsive"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="/about_intro.png"
                            alt="Lagos Community"
                            style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow)' }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--primary-color)' }}>{t('about.story_title')}</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                            {t('about.story_text')}
                        </p>
                    </motion.div>
                </div>

                <div style={{ marginTop: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('about.values_title')}</h2>
                        <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', margin: '0 auto' }} />
                    </div>

                    <div 
                        className="grid-responsive"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}
                    >
                        {[
                            { icon: <Globe size={32} />, title: t('about.value1_title'), text: t('about.value1_text') },
                            { icon: <Heart size={32} />, title: t('about.value2_title'), text: t('about.value2_text') },
                            { icon: <Users size={32} />, title: t('about.value3_title'), text: t('about.value3_text') }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="card"
                                style={{ padding: '40px', textAlign: 'center' }}
                            >
                                <div style={{
                                    width: '64px', height: '64px',
                                    background: 'var(--secondary-bg)',
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 24px',
                                    color: 'var(--primary-color)'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div 
                    className="mobile-stack"
                    style={{ marginTop: '100px', background: 'var(--secondary-bg)', borderRadius: '24px', padding: '60px 24px', textAlign: 'center' }}
                >
                    <Mail size={48} color="var(--primary-color)" style={{ marginBottom: '24px' }} />
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('about.contact_title')}</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                        {t('about.contact_text')}
                    </p>
                    <a href="mailto:hello@lagosfit.com" className="btn btn-primary" style={{ padding: '16px 40px' }}>
                        {t('about.contact_btn')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
