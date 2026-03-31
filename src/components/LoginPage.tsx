
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, Loader2, ArrowRight, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);

const LoginPage = () => {
    const { t } = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [error, setError] = useState('');

    const { login, loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = (location.state as any)?.from || '/';

    const getReadableError = (code: string) => {
        switch (code) {
            case 'auth/user-not-found': return t('auth.error.user_not_found');
            case 'auth/wrong-password': return t('auth.error.wrong_password');
            case 'auth/invalid-credential': return t('auth.error.invalid_credential');
            case 'auth/too-many-requests': return t('auth.error.too_many_requests');
            case 'auth/popup-closed-by-user': return t('auth.error.popup_closed');
            case 'auth/network-request-failed': return t('auth.error.network_failed');
            default: return t('auth.error.generic');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await login(email, password);
            navigate(redirectTo);
        } catch (err: any) {
            setError(getReadableError(err.code));
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setIsGoogleLoading(true);
        setError('');

        try {
            await loginWithGoogle();
            navigate(redirectTo);
        } catch (err: any) {
            setError(getReadableError(err.code));
        } finally {
            setIsGoogleLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: 'calc(100vh - var(--nav-height))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            background: 'var(--bg-main)',
            position: 'relative',
            overflow: 'hidden'
        }}>

            <div className="card" style={{
                width: '100%', maxWidth: '440px', position: 'relative', zIndex: 1,
                padding: '40px', borderRadius: '24px',
                background: 'var(--card-bg)', border: '1px solid var(--border-color)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                animation: 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h1 style={{
                        fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px',
                        color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif'
                    }}>
                        {t('auth.login_title')}
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        {t('auth.login_subtitle')}
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

                {/* Google Sign-In Button */}
                <button
                    onClick={handleGoogleSignIn}
                    disabled={isGoogleLoading}
                    className="google-btn"
                    style={{
                        width: '100%', padding: '13px',
                        borderRadius: '14px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-main)',
                        color: 'var(--text-main)',
                        fontWeight: 600, fontSize: '0.95rem',
                        cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                        transition: 'all 0.2s ease',
                        marginBottom: '24px'
                    }}
                >
                    {isGoogleLoading ? (
                        <Loader2 size={20} className="animate-spin" />
                    ) : (
                        <>
                            <GoogleIcon />
                            {t('auth.google_btn')}
                        </>
                    )}
                </button>

                {/* Divider */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px'
                }}>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }} />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>{t('auth.or_email')}</span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }} />
                </div>

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

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>{t('auth.password_label')}</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{
                                position: 'absolute', left: '16px', top: '50%',
                                transform: 'translateY(-50%)', color: 'var(--text-muted)'
                            }} />
                            <input
                                type="password" required value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
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
                            <>{t('auth.login_btn')} <ArrowRight size={18} /></>
                        )}
                    </button>
                </form>

                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                    <Link to="/forgot-password" style={{
                        color: 'var(--text-muted)', fontSize: '0.85rem',
                        textDecoration: 'none', fontWeight: 500
                    }}>
                        {t('auth.forgot_password')}
                    </Link>
                </div>

                <div style={{
                    marginTop: '24px', textAlign: 'center',
                    fontSize: '0.9rem', color: 'var(--text-muted)'
                }}>
                    {t('auth.no_account')}{' '}
                    <Link to="/register" style={{
                        color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'none'
                    }}>
                        {t('auth.register_link')}
                    </Link>
                </div>
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
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                }
                .auth-btn:active:not(:disabled) { transform: translateY(0); }
                .google-btn:hover:not(:disabled) {
                    background: var(--card-bg) !important;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    transform: translateY(-1px);
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

export default LoginPage;
