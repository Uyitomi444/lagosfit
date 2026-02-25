import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AREAS } from '../data/quiz_data';
import {
    AGENTS, AGENCIES, OFFICE_AGENTS, TIKTOK_HANDLES,
    PROPERTY_TYPES
} from '../data/agents_data';
import { useLanguage } from '../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { initializePayment, PLANS, type PlanKey } from '../utils/paystack';
import { sendWelcomeEmail } from '../utils/email';
import {
    Search, ExternalLink, Building2, LayoutGrid, Home, Globe,
    MapPin, Smartphone, Lock, Crown, Phone, Mail, Star, Users,
    Briefcase, ChevronDown, ChevronUp, Shield, MessageSquare,
    CheckCircle, Sparkles, X, Zap
} from 'lucide-react';

const platforms = [
    {
        name: 'PropertyPro Nigeria',
        description: 'One of the largest property search platforms in Africa.',
        icon: <Building2 style={{ color: '#1e7d32' }} />,
        color: '#1e7d32',
        urlBuilder: (area: string) => `https://www.propertypro.ng/property-for-rent/in/lagos/${area.toLowerCase().replace(/\s+/g, '-')}`
    },
    {
        name: 'NaijaHouses',
        description: 'Comprehensive Lagos listings with verified properties.',
        icon: <Home style={{ color: '#2a5298' }} />,
        color: '#2a5298',
        urlBuilder: (area: string) => `https://naijahouses.com/property/for-rent/lagos/${area.toLowerCase().replace(/\s+/g, '-')}`
    },
    {
        name: 'MyPlace.ng',
        description: 'Modern property search with diverse Lagos options.',
        icon: <Globe style={{ color: '#6366f1' }} />,
        color: '#6366f1',
        urlBuilder: (area: string) => `https://myplace.ng/property-search/?location=${encodeURIComponent(area + ' Lagos')}`
    },
    {
        name: 'ListProperty Nigeria',
        description: 'Trusted portal for finding your next Lagos home.',
        icon: <LayoutGrid style={{ color: '#ffa000' }} />,
        color: '#ffa000',
        urlBuilder: (area: string) => `https://listproperty.ng/property-search/?location=${encodeURIComponent(area + ' Lagos')}`
    },
    {
        name: 'Property Marketplace',
        description: 'Direct connections to verified agents and listings.',
        icon: <MapPin style={{ color: '#3adb3a' }} />,
        color: '#3adb3a',
        urlBuilder: (area: string) => `https://propertymarketplace.com.ng/property-search/?location=${encodeURIComponent(area + ' Lagos')}`
    },
    {
        name: 'TikTok Apartment Hunting',
        description: 'Watch real-time house tours and agent walkthroughs.',
        icon: <Smartphone style={{ color: '#ff0050' }} />,
        color: '#000000',
        urlBuilder: (area: string) => `https://www.tiktok.com/search?q=${encodeURIComponent(area + ' apartments lagos')}`
    }
];

const MarketPage = () => {
    const { language } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const { user, upgradeToPremium } = useAuth();

    const isPremium = user?.isPremium === true;

    const initialArea = location.state?.areaId
        ? AREAS.find(a => a.id === location.state.areaId) || AREAS[0]
        : AREAS[0];

    const [selectedArea, setSelectedArea] = useState(initialArea);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'platforms' | 'agents'>('platforms');
    const [agentSection, setAgentSection] = useState<'individual' | 'agencies' | 'offices' | 'social'>('individual');
    const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<PlanKey>('yearly');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleUpgrade = async () => {
        if (!user?.email) return;
        setPaymentLoading(true);
        setPaymentError(null);
        try {
            await initializePayment({
                email: user.email,
                userId: user.uid,
                plan: selectedPlan,
                onSuccess: async (reference) => {
                    try {
                        await upgradeToPremium(reference);
                        setShowSuccess(true);
                        // Fire-and-forget welcome email
                        const plan = PLANS[selectedPlan];
                        sendWelcomeEmail({
                            email: user.email!,
                            name: user.name || 'Premium User',
                            planName: plan.name,
                            amount: plan.displayPrice,
                            reference
                        });
                    } catch {
                        setPaymentError('Payment received but activation failed. Contact support with ref: ' + reference);
                    }
                    setPaymentLoading(false);
                },
                onCancel: () => {
                    setPaymentLoading(false);
                }
            });
        } catch (err) {
            setPaymentError(err instanceof Error ? err.message : 'Payment failed. Please try again.');
            setPaymentLoading(false);
        }
    };

    useEffect(() => {
        if (location.state?.areaId) {
            const area = AREAS.find(a => a.id === location.state.areaId);
            if (area) setSelectedArea(area);
        }
    }, [location.state?.areaId]);

    const filteredAreas = AREAS.filter(a =>
        a.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                size={14}
                fill={i < Math.floor(rating) ? '#f59e0b' : 'none'}
                stroke={i < Math.ceil(rating) ? '#f59e0b' : 'var(--border-color)'}
            />
        ));
    };

    // ─── Success Celebration Modal ───
    const SuccessModal = () => {
        if (!showSuccess) return null;
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 9999, padding: '20px'
                }}
                onClick={() => setShowSuccess(false)}
            >
                <motion.div
                    initial={{ scale: 0.7, opacity: 0, y: 40 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                    onClick={e => e.stopPropagation()}
                    style={{
                        maxWidth: '440px', width: '100%',
                        background: 'var(--card-bg)',
                        borderRadius: '28px',
                        padding: '48px 32px 40px',
                        textAlign: 'center',
                        position: 'relative',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.3)'
                    }}
                >
                    <button
                        onClick={() => setShowSuccess(false)}
                        style={{
                            position: 'absolute', top: '16px', right: '16px',
                            background: 'none', border: 'none', cursor: 'pointer',
                            color: 'var(--text-muted)', padding: '4px'
                        }}
                    >
                        <X size={20} />
                    </button>

                    {/* Animated sparkle ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        style={{
                            width: '100px', height: '100px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(16,185,129,0.15))',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 24px',
                            border: '2px dashed rgba(245,158,11,0.3)'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                            style={{
                                width: '72px', height: '72px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)'
                            }}
                        >
                            <CheckCircle size={36} color="white" />
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <h2 style={{
                            fontSize: '1.6rem', fontWeight: 800,
                            fontFamily: 'Outfit, sans-serif',
                            marginBottom: '8px',
                            background: 'linear-gradient(135deg, #f59e0b, #10b981)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Welcome to Premium!
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '8px' }}>
                            You now have full access to our <strong style={{ color: 'var(--text-main)' }}>verified agent directory</strong>, agencies, and all premium features.
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '28px' }}>
                            A confirmation email has been sent to <strong style={{ color: 'var(--text-main)' }}>{user?.email}</strong>
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="btn btn-primary"
                        onClick={() => setShowSuccess(false)}
                        style={{
                            padding: '14px 40px',
                            background: 'linear-gradient(135deg, #10b981, #059669)',
                            border: 'none', fontWeight: 700,
                            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
                            width: '100%', fontSize: '1rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                        }}
                    >
                        <Sparkles size={18} /> Explore Agents Now
                    </motion.button>
                </motion.div>
            </motion.div>
        );
    };

    // ─── Floating Premium Gate ───
    const PremiumGate = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'relative',
                borderRadius: '32px',
                overflow: 'hidden',
                minHeight: '500px'
            }}
        >
            {/* Blurred preview behind */}
            <div style={{
                filter: 'blur(10px)',
                opacity: 0.3,
                pointerEvents: 'none',
                padding: '32px'
            }}>
                <div style={{ display: 'grid', gap: '16px' }}>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} style={{
                            padding: '24px', borderRadius: '20px',
                            background: 'var(--secondary-bg)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4 style={{ marginBottom: '4px' }}>Agent Name Here</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>080XXXXXXXX</p>
                                </div>
                                <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>Contact</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating overlay */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'radial-gradient(ellipse at center, rgba(var(--primary-rgb), 0.06) 0%, transparent 70%)',
                zIndex: 2, padding: '20px'
            }}>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{
                        textAlign: 'center',
                        maxWidth: '460px',
                        width: '100%',
                        padding: '44px 32px 36px',
                        background: 'rgba(var(--card-rgb, 30, 30, 30), 0.85)',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        borderRadius: '28px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 32px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05) inset'
                    }}
                >
                    {/* Crown icon with glow */}
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            width: '68px', height: '68px',
                            background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                            borderRadius: '20px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 24px',
                            boxShadow: '0 12px 40px rgba(245, 158, 11, 0.35)'
                        }}
                    >
                        <Crown size={30} color="white" />
                    </motion.div>

                    <h3 style={{
                        fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px',
                        fontFamily: 'Outfit, sans-serif'
                    }}>
                        Upgrade to Premium
                    </h3>
                    <p style={{
                        color: 'var(--text-muted)', fontSize: '0.88rem',
                        lineHeight: 1.6, marginBottom: '24px', maxWidth: '360px', margin: '0 auto 24px'
                    }}>
                        Unlock <strong style={{ color: 'var(--text-main)' }}>verified agents, agencies, and TikTok handles</strong> to find your perfect Lagos apartment.
                    </p>

                    {!user ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button
                                className="btn btn-primary"
                                onClick={() => navigate('/login', { state: { from: '/market' } })}
                                style={{
                                    padding: '14px 32px',
                                    background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                                    border: 'none', fontWeight: 700,
                                    boxShadow: '0 4px 16px rgba(245, 158, 11, 0.3)',
                                    width: '100%'
                                }}
                            >
                                Sign In to Upgrade
                            </button>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                You need an account to access premium features
                            </span>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Plan Toggle */}
                            <div style={{
                                display: 'flex', gap: '6px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '16px', padding: '5px'
                            }}>
                                {(['monthly', 'yearly'] as PlanKey[]).map(planKey => {
                                    const plan = PLANS[planKey];
                                    const isSelected = selectedPlan === planKey;
                                    return (
                                        <button
                                            key={planKey}
                                            onClick={() => setSelectedPlan(planKey)}
                                            style={{
                                                flex: 1, padding: '11px 8px',
                                                borderRadius: '12px', border: 'none',
                                                background: isSelected
                                                    ? 'rgba(255,255,255,0.1)'
                                                    : 'transparent',
                                                boxShadow: isSelected ? '0 2px 12px rgba(0,0,0,0.15)' : 'none',
                                                fontWeight: isSelected ? 700 : 500,
                                                color: isSelected ? 'var(--text-main)' : 'var(--text-muted)',
                                                cursor: 'pointer',
                                                fontSize: '0.85rem',
                                                transition: 'all 0.25s ease',
                                                position: 'relative'
                                            }}
                                        >
                                            {plan.name}
                                            {plan.badge && (
                                                <span style={{
                                                    position: 'absolute', top: '-9px', right: '-2px',
                                                    background: 'linear-gradient(135deg, #10b981, #059669)',
                                                    color: 'white', fontSize: '0.58rem', fontWeight: 800,
                                                    padding: '2px 7px', borderRadius: '8px',
                                                    letterSpacing: '0.5px',
                                                    boxShadow: '0 2px 8px rgba(16,185,129,0.3)'
                                                }}>
                                                    {plan.badge}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Price Display */}
                            <div style={{ padding: '12px 0 4px' }}>
                                {selectedPlan === 'yearly' && (
                                    <p style={{
                                        fontSize: '0.85rem', color: 'var(--text-muted)',
                                        textDecoration: 'line-through', margin: '0 0 4px 0',
                                        opacity: 0.6
                                    }}>
                                        N60,000/yr
                                    </p>
                                )}
                                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                                    <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)' }}>N</span>
                                    <span style={{
                                        fontSize: '2.6rem', fontWeight: 800,
                                        fontFamily: 'Outfit, sans-serif', lineHeight: 1
                                    }}>
                                        {PLANS[selectedPlan].displayPrice}
                                    </span>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                                        /{PLANS[selectedPlan].period}
                                    </span>
                                </div>
                                {selectedPlan === 'yearly' && (
                                    <p style={{
                                        fontSize: '0.78rem', color: '#10b981', fontWeight: 600,
                                        margin: '8px 0 0 0',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'
                                    }}>
                                        <Zap size={12} /> N{PLANS.yearly.perMonth}/mo — you save N24,000!
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <div style={{
                                textAlign: 'left', padding: '4px 12px',
                                display: 'flex', flexDirection: 'column', gap: '9px'
                            }}>
                                {[
                                    'Verified agents with direct contacts',
                                    'Rated agencies with websites & emails',
                                    'Office locations across Lagos',
                                    'TikTok handles for property tours',
                                    'WhatsApp direct chat links'
                                ].map((feature, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem' }}>
                                        <CheckCircle size={14} color="#10b981" style={{ flexShrink: 0 }} />
                                        <span style={{ color: 'var(--text-muted)' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button
                                className="btn btn-primary"
                                onClick={handleUpgrade}
                                disabled={paymentLoading}
                                style={{
                                    padding: '15px 32px',
                                    background: paymentLoading
                                        ? 'var(--text-muted)'
                                        : 'linear-gradient(135deg, #f59e0b, #ef4444)',
                                    border: 'none', fontWeight: 700, fontSize: '0.95rem',
                                    boxShadow: paymentLoading ? 'none' : '0 8px 24px rgba(245, 158, 11, 0.3)',
                                    cursor: paymentLoading ? 'not-allowed' : 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    width: '100%', borderRadius: '14px'
                                }}
                            >
                                {paymentLoading ? (
                                    <>
                                        <span style={{
                                            width: '16px', height: '16px', border: '2px solid white',
                                            borderTopColor: 'transparent', borderRadius: '50%',
                                            display: 'inline-block', animation: 'spin 1s linear infinite'
                                        }} />
                                        Processing...
                                    </>
                                ) : (
                                    <><Sparkles size={16} /> Get Premium Access</>
                                )}
                            </button>
                            {paymentError && (
                                <span style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 600 }}>
                                    {paymentError}
                                </span>
                            )}
                            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0, opacity: 0.7 }}>
                                Secure payment via Paystack. Cancel anytime.
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );

    // ─── Premium Agent Content ───
    const AgentDirectory = () => (
        <div>
            {/* Sub-tabs */}
            <div style={{
                display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap'
            }}>
                {[
                    { key: 'individual' as const, label: 'Agents', icon: <Users size={16} /> },
                    { key: 'agencies' as const, label: 'Agencies', icon: <Building2 size={16} /> },
                    { key: 'offices' as const, label: 'Offices', icon: <Briefcase size={16} /> },
                    { key: 'social' as const, label: 'Social', icon: <Smartphone size={16} /> }
                ].map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setAgentSection(tab.key)}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '12px',
                            border: agentSection === tab.key ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                            background: agentSection === tab.key ? 'rgba(var(--primary-rgb), 0.1)' : 'var(--card-bg)',
                            color: agentSection === tab.key ? 'var(--primary-color)' : 'var(--text-muted)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            display: 'flex', alignItems: 'center', gap: '6px',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            {/* Individual Agents */}
            {agentSection === 'individual' && (
                <div style={{ display: 'grid', gap: '16px' }}>
                    {AGENTS.map((agent, idx) => (
                        <motion.div
                            key={agent.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="card"
                            style={{
                                padding: '24px',
                                cursor: 'pointer',
                                border: expandedAgent === agent.name
                                    ? '2px solid var(--primary-color)'
                                    : '1px solid var(--border-color)',
                                transition: 'all 0.2s ease'
                            }}
                            onClick={() => setExpandedAgent(
                                expandedAgent === agent.name ? null : agent.name
                            )}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '14px',
                                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white', fontWeight: 800, fontSize: '1.1rem',
                                        flexShrink: 0
                                    }}>
                                        {agent.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>{agent.name}</h4>
                                        <span style={{
                                            fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: 600,
                                            background: 'rgba(var(--primary-rgb), 0.1)',
                                            padding: '2px 8px', borderRadius: '6px', marginTop: '4px',
                                            display: 'inline-block'
                                        }}>
                                            <Shield size={10} style={{ verticalAlign: 'middle', marginRight: '3px' }} />
                                            Verified Agent
                                        </span>
                                    </div>
                                </div>
                                {expandedAgent === agent.name ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </div>

                            {expandedAgent === agent.name && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <a href={`tel:${agent.phone}`} style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            padding: '12px 16px', borderRadius: '12px',
                                            background: 'rgba(16, 185, 129, 0.08)',
                                            color: '#10b981', textDecoration: 'none', fontWeight: 600,
                                            transition: 'all 0.2s ease', fontSize: '0.9rem'
                                        }}>
                                            <Phone size={16} /> {agent.phone}
                                        </a>
                                        {agent.whatsapp && (
                                            <a
                                                href={`https://wa.me/${agent.whatsapp}?text=${encodeURIComponent('Hi, I found you on LagosFit and I\'m looking for a property. Can you help?')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '10px',
                                                    padding: '12px 16px', borderRadius: '12px',
                                                    background: 'rgba(37, 211, 102, 0.1)',
                                                    color: '#25d366', textDecoration: 'none', fontWeight: 600,
                                                    transition: 'all 0.2s ease', fontSize: '0.9rem'
                                                }}
                                            >
                                                <MessageSquare size={16} /> WhatsApp Chat
                                            </a>
                                        )}
                                        <a href={`mailto:${agent.email}`} style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            padding: '12px 16px', borderRadius: '12px',
                                            background: 'rgba(59, 130, 246, 0.08)',
                                            color: '#3b82f6', textDecoration: 'none', fontWeight: 600,
                                            transition: 'all 0.2s ease', fontSize: '0.9rem',
                                            wordBreak: 'break-all'
                                        }}>
                                            <Mail size={16} style={{ flexShrink: 0 }} /> {agent.email}
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Agencies */}
            {agentSection === 'agencies' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {AGENCIES.map((agency, idx) => (
                        <motion.div
                            key={agency.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="card"
                            style={{ padding: '24px', borderLeft: '4px solid var(--primary-color)' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                <Building2 size={18} color="var(--primary-color)" />
                                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>{agency.name}</h4>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                                {renderStars(agency.rating)}
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '6px' }}>
                                    {agency.rating}/5
                                </span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                                {agency.description}
                            </p>
                            {agency.address && (
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 12px 0', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                                    <MapPin size={13} style={{ flexShrink: 0, marginTop: '2px' }} /> {agency.address}
                                </p>
                            )}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {agency.website && (
                                    <a href={agency.website} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                                        padding: '8px 14px', borderRadius: '10px',
                                        background: 'rgba(var(--primary-rgb), 0.08)',
                                        color: 'var(--primary-color)',
                                        textDecoration: 'none', fontWeight: 600, fontSize: '0.8rem',
                                        transition: 'all 0.2s ease'
                                    }}>
                                        <Globe size={13} /> Website
                                    </a>
                                )}
                                {agency.phone && (
                                    <a href={`tel:${agency.phone}`} style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                                        padding: '8px 14px', borderRadius: '10px',
                                        background: 'rgba(16, 185, 129, 0.08)',
                                        color: '#10b981',
                                        textDecoration: 'none', fontWeight: 600, fontSize: '0.8rem',
                                        transition: 'all 0.2s ease'
                                    }}>
                                        <Phone size={13} /> Call
                                    </a>
                                )}
                                {agency.email && (
                                    <a href={`mailto:${agency.email}`} style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                                        padding: '8px 14px', borderRadius: '10px',
                                        background: 'rgba(59, 130, 246, 0.08)',
                                        color: '#3b82f6',
                                        textDecoration: 'none', fontWeight: 600, fontSize: '0.8rem',
                                        transition: 'all 0.2s ease'
                                    }}>
                                        <Mail size={13} /> Email
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Office Agents */}
            {agentSection === 'offices' && (
                <div style={{ display: 'grid', gap: '16px' }}>
                    {OFFICE_AGENTS.map((office, idx) => (
                        <motion.div
                            key={office.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="card"
                            style={{ padding: '24px' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                                <div>
                                    <h4 style={{ margin: '0 0 8px 0', fontWeight: 700 }}>{office.name}</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <MapPin size={14} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                                        {office.address}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    <a href={`tel:${office.phone}`} className="btn" style={{
                                        padding: '10px 20px', fontSize: '0.85rem',
                                        background: 'var(--secondary-bg)',
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        fontWeight: 600, whiteSpace: 'nowrap',
                                        textDecoration: 'none', color: 'var(--text-main)'
                                    }}>
                                        <Phone size={14} /> {office.phone}
                                    </a>
                                    {office.whatsapp && (
                                        <a
                                            href={`https://wa.me/${office.whatsapp}?text=${encodeURIComponent('Hi, I found you on LagosFit and I\'m looking for a property. Can you help?')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn"
                                            style={{
                                                padding: '10px 20px', fontSize: '0.85rem',
                                                background: '#25d366',
                                                color: 'white',
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                fontWeight: 600, whiteSpace: 'nowrap',
                                                textDecoration: 'none', border: 'none',
                                                borderRadius: '12px'
                                            }}
                                        >
                                            <MessageSquare size={14} /> WhatsApp
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Social / TikTok */}
            {agentSection === 'social' && (
                <div>
                    {/* TikTok Handles */}
                    <h4 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Smartphone size={18} color="#ff0050" /> TikTok Handles
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                        {TIKTOK_HANDLES.map((handle, idx) => (
                            <motion.a
                                key={handle.handle}
                                href={handle.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="card"
                                style={{
                                    padding: '20px',
                                    textDecoration: 'none',
                                    color: 'var(--text-main)',
                                    borderTop: '3px solid #ff0050',
                                    display: 'flex', flexDirection: 'column', gap: '8px',
                                    transition: 'all 0.2s ease'
                                }}
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ff0050' }}>
                                        {handle.handle}
                                    </span>
                                    <ExternalLink size={14} color="var(--text-muted)" />
                                </div>
                                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                                    {handle.description}
                                </p>
                            </motion.a>
                        ))}
                    </div>


                    {/* Property Types Tip */}
                    <div style={{
                        marginTop: '32px', padding: '24px',
                        background: 'var(--secondary-bg)',
                        borderRadius: '16px'
                    }}>
                        <h4 style={{ marginBottom: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            TIP: Search for these property types on TikTok & Instagram
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {PROPERTY_TYPES.map(type => (
                                <span key={type} style={{
                                    padding: '6px 14px', borderRadius: '20px',
                                    background: 'var(--bg-main)',
                                    border: '1px solid var(--border-color)',
                                    fontSize: '0.8rem', color: 'var(--text-main)',
                                    fontWeight: 500
                                }}>
                                    {type}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <>
            <SuccessModal />
            <div className="container" style={{ padding: '60px 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '16px',
                            background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                        }}
                    >
                        Accommodation Hub
                    </motion.h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Found your area? Now let's find your home. Search platforms, connect with agents, and browse verified listings.
                    </p>
                </div>

                {/* Main Tabs */}
                <div style={{
                    display: 'flex', gap: '4px', marginBottom: '40px',
                    background: 'var(--secondary-bg)', padding: '6px', borderRadius: '16px',
                    maxWidth: '400px', margin: '0 auto 40px'
                }}>
                    <button
                        onClick={() => setActiveTab('platforms')}
                        style={{
                            flex: 1, padding: '12px 24px',
                            borderRadius: '12px', border: 'none',
                            background: activeTab === 'platforms' ? 'var(--primary-color)' : 'transparent',
                            color: activeTab === 'platforms' ? 'white' : 'var(--text-muted)',
                            cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        Platforms
                    </button>
                    <button
                        onClick={() => setActiveTab('agents')}
                        style={{
                            flex: 1, padding: '12px 24px',
                            borderRadius: '12px', border: 'none',
                            background: activeTab === 'agents'
                                ? 'linear-gradient(135deg, #f59e0b, #ef4444)'
                                : 'transparent',
                            color: activeTab === 'agents' ? 'white' : 'var(--text-muted)',
                            cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <Crown size={14} /> Agents
                        {!isPremium && <Lock size={12} />}
                    </button>
                </div>

                {activeTab === 'platforms' ? (
                    /* ─── PLATFORMS TAB ─── */
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 3fr', gap: '40px' }}>
                        {/* Sidebar */}
                        <div style={{ background: 'var(--secondary-bg)', borderRadius: '24px', padding: '24px', height: 'fit-content' }}>
                            <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Search size={20} color="var(--primary-color)" /> Select Area
                            </h3>
                            <input
                                type="text"
                                placeholder="Search areas..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%', padding: '12px 16px',
                                    borderRadius: '12px', border: '1px solid var(--border-color)',
                                    background: 'var(--bg-color)', marginBottom: '16px', outline: 'none',
                                    boxSizing: 'border-box', color: 'var(--text-main)'
                                }}
                            />
                            <div style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '8px' }}>
                                {filteredAreas.map(area => (
                                    <button
                                        key={area.id}
                                        onClick={() => setSelectedArea(area)}
                                        style={{
                                            width: '100%', textAlign: 'left',
                                            padding: '12px 16px', borderRadius: '12px', border: 'none',
                                            background: selectedArea.id === area.id ? 'var(--primary-color)' : 'transparent',
                                            color: selectedArea.id === area.id ? 'white' : 'var(--text-main)',
                                            cursor: 'pointer', marginBottom: '4px',
                                            transition: 'all 0.2s',
                                            fontWeight: selectedArea.id === area.id ? 600 : 400
                                        }}
                                    >
                                        {area.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Content */}
                        <div>
                            <div style={{
                                marginBottom: '40px', padding: '32px',
                                background: 'var(--primary-color)', borderRadius: '24px',
                                color: 'white', position: 'relative', overflow: 'hidden'
                            }}>
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.8, textTransform: 'uppercase' }}>Currently Searching In</span>
                                    <motion.h2
                                        key={selectedArea.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        style={{ fontSize: '2.5rem', marginTop: '8px' }}
                                    >
                                        {selectedArea.name}
                                    </motion.h2>
                                    <p style={{ marginTop: '12px', opacity: 0.9 }}>{selectedArea.description[language]}</p>
                                </div>
                                <Building2 size={120} style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1 }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                                {platforms.map((platform, idx) => (
                                    <motion.div
                                        key={platform.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="card"
                                        style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: `4px solid ${platform.color}` }}
                                    >
                                        <div>
                                            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ padding: '10px', borderRadius: '12px', background: 'var(--secondary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    {platform.icon}
                                                </div>
                                            </div>
                                            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{platform.name}</h3>
                                            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.9rem' }}>{platform.description}</p>
                                        </div>
                                        <a
                                            href={platform.urlBuilder(selectedArea.name)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                            style={{ width: '100%', background: platform.color, gap: '10px', fontSize: '0.95rem' }}
                                        >
                                            Search {selectedArea.name} <ExternalLink size={16} />
                                        </a>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Safety Tips */}
                            <div style={{ marginTop: '60px', padding: '40px', background: 'var(--secondary-bg)', borderRadius: '24px' }}>
                                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                                    <h3 style={{ fontSize: '1.8rem' }}>Agent Tips & Safety</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>How to navigate the Lagos rental market safely.</p>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                                    <div style={{ padding: '20px', background: 'var(--bg-color)', borderRadius: '16px' }}>
                                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Verify Before Pay</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Never pay for an apartment you haven't physically inspected. Scams are common online.</p>
                                    </div>
                                    <div style={{ padding: '20px', background: 'var(--bg-color)', borderRadius: '16px' }}>
                                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Ask for the Landlord</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ensure the agent is authorized. Request to see the caretaker or landlord when finalized.</p>
                                    </div>
                                    <div style={{ padding: '20px', background: 'var(--bg-color)', borderRadius: '16px' }}>
                                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Check Different Platforms</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>The same apartment can be listed on multiple platforms with different prices. Always compare.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* ─── AGENTS TAB (Premium) ─── */
                    <div>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                padding: '8px 20px', borderRadius: '24px',
                                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1))',
                                border: '1px solid rgba(245, 158, 11, 0.3)',
                                marginBottom: '16px'
                            }}>
                                <Crown size={16} color="#f59e0b" />
                                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#f59e0b' }}>PREMIUM DIRECTORY</span>
                            </div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>
                                Agent & Agency Directory
                            </h2>
                            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                                Verified real estate agents, rated agencies, office locations, and social media handles — all in one place.
                            </p>
                        </div>

                        {isPremium ? <AgentDirectory /> : <PremiumGate />}
                    </div>
                )}
            </div>
        </>
    );
};

export default MarketPage;
