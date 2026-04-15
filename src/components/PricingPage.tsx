
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Star, Users, Building2, MapPin, Smartphone, MessageSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { initializePayment, PLANS } from '../utils/paystack';
import type { PlanKey } from '../utils/paystack';
import { useLanguage } from '../context/LanguageContext';

const PricingPage = () => {
    const { user, upgradeToPremium } = useAuth();
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [billingCycle, setBillingCycle] = useState<PlanKey>('monthly');

    const handleUpgrade = (plan: PlanKey) => {
        if (!user) {
            navigate('/login', { state: { from: '/pricing' } });
            return;
        }

        initializePayment({
            email: user.email || '',
            userId: user.uid,
            plan: plan,
            onSuccess: async (reference: string) => {
                console.log('Payment Successful:', reference);
                try {
                    // Diagnostic Log
                    console.log("Upgrading user in Firestore...");
                    await upgradeToPremium(reference);
                    
                    // Success feedback
                    alert("Payment and Upgrade Successful! Welcome to Pro.");
                    navigate('/market', { state: { message: 'Welcome to Pro! Your features are now unlocked.' } });
                } catch (err: any) {
                    console.error("Pro Upgrade Firestore Error:", err);
                    const errorDetails = `
Payment was SUCCESSFUL (${reference}) 
BUT database update failed.
Error: ${err.message || err.code || 'Unknown Error'}
                    `.trim();
                    alert(errorDetails);
                }
            },
            onCancel: () => {
                console.log('Payment closed');
            }
        });
    };

    const features = [
        { name: t('pricing.feat1'), pro: true, free: true, icon: <Building2 size={18} /> },
        { name: t('pricing.feat2'), pro: true, free: false, icon: <Users size={18} /> },
        { name: t('pricing.feat3'), pro: true, free: false, icon: <Building2 size={18} /> },
        { name: t('pricing.feat4'), pro: true, free: false, icon: <MapPin size={18} /> },
        { name: t('pricing.feat5'), pro: true, free: false, icon: <Smartphone size={18} /> },
        { name: t('pricing.feat6'), pro: true, free: false, icon: <MessageSquare size={18} /> },
    ];

    return (
        <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: '60px' }}
            >
                <div style={{ 
                    display: 'inline-flex', alignItems: 'center', gap: '8px', 
                    padding: '8px 16px', borderRadius: '30px', background: 'rgba(var(--primary-rgb), 0.1)',
                    color: 'var(--primary-color)', fontWeight: 700, marginBottom: '24px', fontSize: '0.9rem'
                }}>
                    <Star size={16} fill="var(--primary-color)" /> {t('pricing.badge')}
                </div>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{t('pricing.title')}</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                    {t('pricing.subtitle')}
                </p>

                {/* Billing Toggle */}
                <div style={{ 
                    marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    gap: '16px', background: 'var(--secondary-bg)', padding: '6px', 
                    borderRadius: '40px', width: 'fit-content', margin: '40px auto 0' 
                }}>
                    <button 
                        onClick={() => setBillingCycle('monthly')}
                        style={{ 
                            padding: '10px 24px', borderRadius: '30px', border: 'none',
                            background: billingCycle === 'monthly' ? 'white' : 'transparent',
                            color: billingCycle === 'monthly' ? 'var(--primary-color)' : 'var(--text-muted)',
                            fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
                            boxShadow: billingCycle === 'monthly' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                        }}
                    >
                        {t('pricing.monthly')}
                    </button>
                    <button 
                        onClick={() => setBillingCycle('yearly')}
                        style={{ 
                            padding: '10px 24px', borderRadius: '30px', border: 'none',
                            background: billingCycle === 'yearly' ? 'white' : 'transparent',
                            color: billingCycle === 'yearly' ? 'var(--primary-color)' : 'var(--text-muted)',
                            fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
                            boxShadow: billingCycle === 'yearly' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                        }}
                    >
                        {t('pricing.yearly')} <span style={{ color: 'var(--success-color)', fontSize: '0.8rem' }}>({PLANS.yearly.badge})</span>
                    </button>
                </div>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                
                {/* Free Plan */}
                <motion.div 
                    className="card"
                    whileHover={{ y: -5 }}
                    style={{ padding: '40px', textAlign: 'left', background: 'var(--card-bg)' }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{t('pricing.free_name')}</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>{t('pricing.free_desc')}</p>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '32px' }}>
                        {t('pricing.free_price')} <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-muted)' }}>{t('pricing.forever')}</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                        {features.map((f, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', opacity: f.free ? 1 : 0.4 }}>
                                <div style={{ color: f.free ? 'var(--success-color)' : 'var(--text-muted)' }}>
                                    {f.free ? <Check size={18} strokeWidth={1.5} /> : <div style={{ width: '18px', height: '2px', background: 'currentColor' }} />}
                                </div>
                                <span style={{ fontSize: '0.95rem' }}>{f.name}</span>
                            </li>
                        ))}
                    </ul>
                    <button 
                        onClick={() => navigate('/login')}
                        className="btn btn-outline" 
                        style={{ width: '100%' }}
                        disabled={!!user}
                    >
                        {user ? t('pricing.current_plan') : t('pricing.get_started')}
                    </button>
                </motion.div>

                {/* Pro Plan */}
                <motion.div 
                    className="card"
                    whileHover={{ y: -5 }}
                    style={{ 
                        padding: '40px', textAlign: 'left', background: 'var(--card-bg)',
                        border: '2px solid var(--primary-color)', position: 'relative'
                    }}
                >
                    <div style={{ 
                        position: 'absolute', top: '16px', right: '16px', 
                        background: 'var(--primary-color)', color: 'white', 
                        padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 
                    }}>
                        {t('pricing.popular')}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--primary-color)' }}>{t('pricing.pro_name')}</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>{t('pricing.pro_desc')}</p>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '32px' }}>
                        ₦{PLANS[billingCycle].displayPrice} 
                        <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-muted)' }}> 
                            {t('pricing.per_period').replace('{0}', PLANS[billingCycle].period)}
                        </span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                        {features.map((f, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ color: 'var(--success-color)' }}>
                                    <Check size={18} strokeWidth={1.5} />
                                </div>
                                <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{f.name}</span>
                            </li>
                        ))}
                    </ul>
                    <button 
                        onClick={() => handleUpgrade(billingCycle)}
                        className="btn btn-primary" 
                        style={{ width: '100%', padding: '16px' }}
                        disabled={user?.isPremium}
                    >
                        {user?.isPremium ? t('pricing.already_pro') : t('pricing.upgrade_btn')}
                    </button>

                    {/* Admin/Developer Bypass Button */}
                    {user?.email === 'admin@lagosfit.com' && !user?.isPremium && (
                        <button 
                            onClick={async () => {
                                try {
                                    await upgradeToPremium('admin-test-bypass');
                                    alert('Admin Bypass Successful! You are now Pro.');
                                } catch (e: any) {
                                    alert('Bypass Error: ' + e.message);
                                }
                            }}
                            className="btn"
                            style={{ width: '100%', marginTop: '12px', background: 'var(--accent-color)', color: 'white' }}
                        >
                            🚀 Test Upgrade (Admin Bypass)
                        </button>
                    )}
                </motion.div>
            </div>

            {/* Trust Badges */}
            <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '60px', opacity: 0.6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Shield size={32} />
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontWeight: 700 }}>{t('pricing.secure_payment')}</div>
                        <div style={{ fontSize: '0.8rem' }}>{t('pricing.via_paystack')}</div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Zap size={32} />
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontWeight: 700 }}>{t('pricing.instant_activation')}</div>
                        <div style={{ fontSize: '0.8rem' }}>{t('pricing.unlock_pro')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
