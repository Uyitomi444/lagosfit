
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Loader2, ArrowLeft, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ForgotPasswordPage = () => {
    const { t } = useLanguage();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [sent, setSent] = useState(false);

    const { resetPassword } = useAuth();

    const getReadableError = (code: string) => {
        switch (code) {
            case 'auth/user-not-found': return t('auth.error.user_not_found');
            case 'auth/invalid-email': return t('auth.error.invalid_email');
            case 'auth/too-many-requests': return t('auth.error.too_many_requests');
            default: return t('auth.error.generic');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await resetPassword(email);
            setSent(true);
        } catch (err: any) {
            setError(getReadableError(err.code));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: 'calc(100vh - var(--nav-height))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px', background: 'var(--bg-main)',
            position: 'relative', overflow: 'hidden'
        }}>

            <div className="card" style={{
                width: '100%', maxWidth: '440px', position: 'relative', zIndex: 1,
                padding: '40px', borderRadius: '24px',
                background: 'var(--card-bg)', border: '1px solid var(--border-color)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                animation: 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
                <Link to="/login" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '24px',
                    textDecoration: 'none'
                }}>
                    <ArrowLeft size={16} /> {t('auth.back_to_login')}
                </Link>

                {sent ? (
                    /* Success state */
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '50%',
                            background: 'rgba(var(--primary-rgb), 0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 24px'
                        }}>
                            <CheckCircle2 size={32} color="var(--success-color)" strokeWidth={1.5} />
                        </div>
                        <h2 style={{
                            fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px',
                            color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif'
                        }}>
                            {t('auth.reset_check_email')}
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '32px' }}>
                            {t('auth.reset_sent_to').replace('{0}', email)}<br />
                            {t('auth.reset_instruction')}
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                            {t('auth.reset_not_received')} {t('auth.reset_spam_note')}{' '}
                            <button
                                onClick={() => { setSent(false); setEmail(''); }}
                                style={{
                                    background: 'none', border: 'none',
                                    color: 'var(--primary-color)', cursor: 'pointer',
                                    fontWeight: 600, fontSize: '0.8rem', padding: 0
                                }}
                            >
                                {t('auth.reset_try_again')}
                            </button>
                        </p>
                    </div>
                ) : (
                    /* Form state */
                    <>
                        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                            <h1 style={{
                                fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px',
                                color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif'
                            }}>
                                {t('auth.forgot_title')}
                            </h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                {t('auth.forgot_subtitle')}
                            </p>
                        </div>

                        {error && (
                            <div style={{
                                padding: '12px 16px',
                                background: 'rgba(var(--secondary-rgb), 0.05)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '12px', color: 'var(--error-color)', fontSize: '0.85rem',
                                display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px'
                            }}>
                                <AlertCircle size={16} strokeWidth={1.5} />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>{t('auth.email_label')}</label>
                                <div style={{ position: 'relative' }}>
                                    <Mail size={18} style={{
                                        position: 'absolute', left: '16px', top: '50%',
                                        transform: 'translateY(-50%)', color: 'var(--text-muted)'
                                    }} />
                                    <input
                                        type="email" required value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        style={{
                                            width: '100%', padding: '14px 16px 14px 48px',
                                            borderRadius: '14px', border: '1px solid var(--border-color)',
                                            background: 'var(--bg-main)', color: 'var(--text-main)',
                                            fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s ease',
                                            boxSizing: 'border-box'
                                        }}
                                        className="auth-input"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit" disabled={isLoading}
                                className="auth-btn"
                                style={{
                                    marginTop: '8px', background: 'var(--primary-color)',
                                    color: 'white', padding: '14px', borderRadius: '14px',
                                    border: 'none', fontWeight: 700, fontSize: '1rem',
                                    cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }}
                            >
                                {isLoading ? (
                                    <Loader2 size={20} className="animate-spin" />
                                ) : (
                                    t('auth.reset_btn')
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .auth-input:focus {
                    border-color: var(--primary-color) !important;
                    box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
                }
                .auth-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
                }
                .animate-spin { animation: spin 1s linear infinite; }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default ForgotPasswordPage;
