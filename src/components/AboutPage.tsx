import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Heart, Globe, Users, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { sendContactEmail } from '../utils/email';
import SEO from './SEO';

const AboutPage = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        
        try {
            console.log('Attempting to send email with params:', formData);
            const success = await sendContactEmail({
                name: formData.name,
                email: formData.email,
                title: formData.subject,
                message: formData.message
            });
            
            if (success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error('sendContactEmail returned false - check network tab or EmailJS config');
                setStatus('error');
            }
        } catch (err: any) {
            console.error('Contact form error caught:', err);
            setStatus('error');
        }
    };

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
                    style={{ marginTop: '100px', background: 'var(--secondary-bg)', borderRadius: '24px', padding: '60px 24px' }}
                >
                    <div className="grid-responsive" style={{ gap: '60px' }}>
                        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Mail size={48} color="var(--primary-color)" style={{ marginBottom: '24px' }} />
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('about.contact_title')}</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '400px', marginBottom: '24px' }}>
                                {t('about.contact_text')}
                            </p>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '300px' }}>
                                <a 
                                    href="https://wa.me/2347066684457?text=Hello%20LagosFit!%20I%20have%20an%20inquiry."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ background: '#25D366', borderColor: '#25D366', width: '100%', textDecoration: 'none' }}
                                >
                                    <MessageSquare size={20} /> Chat on WhatsApp
                                </a>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Typical response: Instant</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {status === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <CheckCircle2 size={64} color="var(--success-color)" style={{ marginBottom: '16px' }} />
                                    <h3 style={{ marginBottom: '8px' }}>Message Sent!</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. We'll get back to you shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="mobile-stack">
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Your Name</label>
                                            <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-main)' }} placeholder="John Doe" />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email Address</label>
                                            <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-main)' }} placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Subject</label>
                                        <input required type="text" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-main)' }} placeholder="Inquiry about area search" />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Message</label>
                                        <textarea required rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-main)', resize: 'none' }} placeholder="Your message here..." />
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={status === 'sending'}
                                        className="btn btn-primary" 
                                        style={{ marginTop: '8px', padding: '16px', fontWeight: 700 }}
                                    >
                                        {status === 'sending' ? 'Sending...' : <><Send size={18} /> {t('about.contact_btn')}</>}
                                    </button>
                                    {status === 'error' && (
                                        <p style={{ color: 'var(--error-color)', fontSize: '0.85rem', textAlign: 'center', marginTop: '8px' }}>
                                            Failed to send message. Please try again or email us directly at uyitomiadebiyi@gmail.com.
                                        </p>
                                    )}
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
