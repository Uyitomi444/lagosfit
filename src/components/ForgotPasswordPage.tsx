import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Loader2, ArrowLeft, AlertCircle, CheckCircle2 } from 'lucide-react';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [sent, setSent] = useState(false);

    const { resetPassword } = useAuth();

    const getReadableError = (code: string) => {
        switch (code) {
            case 'auth/user-not-found': return 'No account found with this email.';
            case 'auth/invalid-email': return 'Please enter a valid email address.';
            case 'auth/too-many-requests': return 'Too many requests. Please wait a bit.';
            default: return 'Something went wrong. Please try again.';
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
            {/* Background blobs */}
            <div style={{
                position: 'absolute', top: '-10%', right: '-5%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
                opacity: 0.1, filter: 'blur(60px)', zIndex: 0
            }} />
            <div style={{
                position: 'absolute', bottom: '-10%', left: '-5%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
                opacity: 0.1, filter: 'blur(60px)', zIndex: 0
            }} />

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
                    <ArrowLeft size={16} /> Back to Sign In
                </Link>

                {sent ? (
                    /* Success state */
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '50%',
                            background: 'rgba(16, 185, 129, 0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 24px'
                        }}>
                            <CheckCircle2 size={32} color="#10b981" />
                        </div>
                        <h2 style={{
                            fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px',
                            color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif'
                        }}>
                            Check Your Email
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '32px' }}>
                            We sent a password reset link to <strong style={{ color: 'var(--text-main)' }}>{email}</strong>.
                            Click the link in the email to reset your password.
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                            Didn't get it? Check your spam folder or{' '}
                            <button
                                onClick={() => { setSent(false); setEmail(''); }}
                                style={{
                                    background: 'none', border: 'none',
                                    color: 'var(--primary-color)', cursor: 'pointer',
                                    fontWeight: 600, fontSize: '0.8rem', padding: 0
                                }}
                            >
                                try again
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
                                Reset Password
                            </h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                Enter your email and we'll send you a reset link.
                            </p>
                        </div>

                        {error && (
                            <div style={{
                                padding: '12px 16px',
                                background: 'rgba(239, 68, 68, 0.1)',
                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                borderRadius: '12px', color: '#ef4444', fontSize: '0.85rem',
                                display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px'
                            }}>
                                <AlertCircle size={16} />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Email Address</label>
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
                                    boxShadow: '0 4px 12px rgba(56, 102, 104, 0.3)'
                                }}
                            >
                                {isLoading ? (
                                    <Loader2 size={20} className="animate-spin" />
                                ) : (
                                    'Send Reset Link'
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
                    box-shadow: 0 0 0 4px rgba(56, 102, 104, 0.1);
                }
                .auth-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(56, 102, 104, 0.4);
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
