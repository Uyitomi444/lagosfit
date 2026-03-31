
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AREAS } from '../data/quiz_data';
import {
    AGENTS as STATIC_AGENTS,
    AGENCIES as STATIC_AGENCIES,
    OFFICE_AGENTS as STATIC_OFFICES,
    TIKTOK_HANDLES as STATIC_TIKTOK
} from '../data/agents_data';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useLanguage } from '../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    Search, ExternalLink, Building2, Home, Globe,
    MapPin, Smartphone, Lock, Crown, Phone, MessageSquare,
    ChevronDown, ChevronUp, Star,
    Users, Briefcase, Loader2
} from 'lucide-react';

import ReviewSection from './ReviewSection';
import SEO from './SEO';

const MarketPage = () => {
    const { language, t } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    
    const isPremium = user?.isPremium === true;

    const PLATFORMS = [
        {
            name: "PropertyPro Nigeria",
            description: t("market.platform.propertypro.desc"),
            icon: <Building2 size={18} strokeWidth={1.5} />,
            color: "var(--primary-color)",
            urlBuilder: (area: string) => `https://www.propertypro.ng/property-for-rent/in/lagos/${area.toLowerCase().replace(/\s+/g, "-")}`
        },
        {
            name: "NaijaHouses",
            description: t("market.platform.naijahouses.desc"),
            icon: <Home size={18} strokeWidth={1.5} />,
            color: "#2C3E50",
            urlBuilder: (area: string) => `https://naijahouses.com/property/for-rent/lagos/${area.toLowerCase().replace(/\s+/g, "-")}`
        },
        {
            name: "MyPlace.ng",
            description: t("market.platform.myplace.desc"),
            icon: <Globe size={18} strokeWidth={1.5} />,
            color: "var(--primary-color)",
            urlBuilder: (area: string) => `https://myplace.ng/property-search/?location=${encodeURIComponent(area + " Lagos")}`
        },
        {
            name: "ListProperty Nigeria",
            description: t("market.platform.listproperty.desc"),
            icon: <Building2 size={18} strokeWidth={1.5} />,
            color: "#454545",
            urlBuilder: (area: string) => `https://listproperty.ng/property-search/?location=${encodeURIComponent(area + " Lagos")}`
        },
        {
            name: "Property Marketplace",
            description: t("market.platform.marketplace.desc"),
            icon: <MapPin size={18} strokeWidth={1.5} />,
            color: "var(--primary-color)",
            urlBuilder: (area: string) => `https://propertymarketplace.com.ng/property-search/?location=${encodeURIComponent(area + " Lagos")}`
        },
        {
            name: "TikTok Apartment Hunting",
            description: t("market.platform.tiktok.desc"),
            icon: <Smartphone size={18} strokeWidth={1.5} />,
            color: "#000000",
            urlBuilder: (area: string) => `https://www.tiktok.com/search?q=${encodeURIComponent(area + " apartments lagos")}`
        }
    ];

    const initialArea = location.state?.areaId
        ? AREAS.find(a => a.id === location.state.areaId) || AREAS[0]
        : AREAS[0];

    const [selectedArea, setSelectedArea] = useState(initialArea);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'platforms' | 'agents'>('platforms');
    const [agentSection, setAgentSection] = useState<'individual' | 'agencies' | 'offices' | 'social'>('individual');
    const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
    const [dbAgents, setDbAgents] = useState<any[]>([]); 
    const [loadingAgents, setLoadingAgents] = useState(true); 

    // Fetch Agents from Firestore
    useEffect(() => {
        const fetchAgents = async () => {
            setLoadingAgents(true);
            try {
                const snap = await getDocs(collection(db, 'agents'));
                const agents = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                
                if (agents.length > 0) {
                    setDbAgents(agents);
                } else {
                    // Fallback to static data if DB is empty
                    setDbAgents([
                        ...STATIC_AGENTS.map(a => ({ ...a, category: 'individual', id: `static-agent-${a.name}` })),
                        ...STATIC_AGENCIES.map(a => ({ ...a, category: 'agency', id: `static-agency-${a.name}` })),
                        ...STATIC_OFFICES.map(a => ({ ...a, category: 'office', id: `static-office-${a.name}` })),
                        ...STATIC_TIKTOK.map(a => ({ ...a, category: 'social', id: `static-social-${a.handle}` }))
                    ]);
                }
            } catch (err) {
                console.error('Failed to fetch agents:', err);
                setDbAgents([
                    ...STATIC_AGENTS.map(a => ({ ...a, category: 'individual', id: `static-agent-${a.name}` })),
                    ...STATIC_AGENCIES.map(a => ({ ...a, category: 'agency', id: `static-agency-${a.name}` })),
                    ...STATIC_OFFICES.map(a => ({ ...a, category: 'office', id: `static-office-${a.name}` })),
                    ...STATIC_TIKTOK.map(a => ({ ...a, category: 'social', id: `static-social-${a.handle}` }))
                ]);
            }
            setLoadingAgents(false);
        };
        fetchAgents();
    }, []);

    const agentsList = dbAgents.filter(a => a.category === 'individual');
    const agenciesList = dbAgents.filter(a => a.category === 'agency');
    const officesList = dbAgents.filter(a => a.category === 'office');
    const socialList = dbAgents.filter(a => a.category === 'social');

    const filteredAreas = AREAS.filter(a =>
        a.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (location.state?.areaId) {
            const area = AREAS.find(a => a.id === location.state.areaId);
            if (area) setSelectedArea(area);
        }
    }, [location.state?.areaId]);

    // handleUpgrade removed - redirection to /pricing used instead for cleaner flow


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

    // SuccessModal removed - redirected flow handles success via Pricing page


    const PremiumGate = ({ children }: { children: React.ReactNode }) => {
        if (isPremium) return <>{children}</>;
        return (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ 
                    position: 'relative', 
                    borderRadius: '24px', 
                    overflow: 'hidden',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    padding: '60px 24px',
                    textAlign: 'center',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
            >
                <div style={{
                    width: '64px', height: '64px',
                    borderRadius: '16px',
                    background: 'var(--secondary-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px',
                    color: 'var(--accent-color)',
                    border: '1px solid var(--border-color)'
                }}>
                    <Lock size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>{t('market.premium.title')}</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 32px', lineHeight: 1.6 }}>
                    {t('market.premium.text')}
                </p>
                <button 
                    className="btn btn-primary"
                    onClick={() => navigate('/pricing')}
                    style={{ padding: '14px 32px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}
                >
                    <Crown size={18} /> {t('market.premium.btn')}
                </button>
            </motion.div>
        );
    };

    const AgentDirectory = () => (
        <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
                {[
                    { key: 'individual' as const, label: t('market.category.individual'), icon: <Users size={16} /> },
                    { key: 'agencies' as const, label: t('market.category.agencies'), icon: <Building2 size={16} /> },
                    { key: 'offices' as const, label: t('market.category.offices'), icon: <Briefcase size={16} /> },
                    { key: 'social' as const, label: t('market.category.social'), icon: <Smartphone size={16} /> }
                ].map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setAgentSection(tab.key)}
                        style={{
                            padding: '10px 20px', borderRadius: '12px',
                            border: agentSection === tab.key ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                            background: agentSection === tab.key ? 'rgba(var(--primary-rgb), 0.1)' : 'var(--card-bg)',
                            color: agentSection === tab.key ? 'var(--primary-color)' : 'var(--text-muted)',
                            cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
                            display: 'flex', alignItems: 'center', gap: '6px'
                        }}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            {loadingAgents ? (
                <div style={{ padding: '80px 0', textAlign: 'center' }}>
                    <Loader2 size={40} className="spinner" color="var(--primary-color)" />
                    <p style={{ marginTop: '16px', color: 'var(--text-muted)' }}>{t('market.loading')}</p>
                </div>
            ) : (
                <>
                    {agentSection === 'individual' && (
                        <div style={{ display: 'grid', gap: '16px' }}>
                            {agentsList.map((agent: any) => (
                                <motion.div
                                    key={agent.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="card"
                                    style={{ padding: '24px', cursor: 'pointer', border: expandedAgent === agent.name ? '2px solid var(--primary-color)' : '1px solid var(--border-color)' }}
                                    onClick={() => setExpandedAgent(expandedAgent === agent.name ? null : agent.name)}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--secondary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontWeight: 800 }}>
                                                {agent.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 style={{ margin: 0 }}>{agent.name}</h4>
                                                <span style={{ fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: 600 }}>{t('market.verified')}</span>
                                            </div>
                                        </div>
                                        {expandedAgent === agent.name ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                    {expandedAgent === agent.name && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                <a href={`tel:${agent.phone}`} className="btn" style={{ background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary-color)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                                                    <Phone size={16} /> {agent.phone}
                                                </a>
                                                {agent.whatsapp && (
                                                    <a href={`https://wa.me/${agent.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25d366', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                                                        <MessageSquare size={16} /> {t('market.whatsapp')}
                                                    </a>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {agentSection === 'agencies' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            {agenciesList.map((agency: any) => (
                                <div key={agency.id} className="card" style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                        <Building2 size={24} color="var(--primary-color)" />
                                        {renderStars(agency.rating || 5)}
                                    </div>
                                    <h4 style={{ marginBottom: '8px' }}>{agency.name}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>{agency.description}</p>
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <a href={`tel:${agency.phone}`} className="btn" style={{ padding: '8px', flex: 1, textDecoration: 'none', background: 'var(--secondary-bg)', color: 'var(--text-main)', fontSize: '0.8rem', textAlign: 'center' }}>{t('market.call')}</a>
                                        <a href={agency.website} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px', flex: 1, textDecoration: 'none', background: 'var(--secondary-bg)', color: 'var(--text-main)', fontSize: '0.8rem', textAlign: 'center' }}>{t('market.website')}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {agentSection === 'offices' && (
                        <div style={{ display: 'grid', gap: '16px' }}>
                            {officesList.map((office: any) => (
                                <div key={office.name} className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <h4 style={{ margin: '0 0 4px 0' }}>{office.name}</h4>
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}><MapPin size={14} /> {office.address}</p>
                                    </div>
                                    <a href={`tel:${office.phone}`} className="btn" style={{ textDecoration: 'none', background: 'var(--secondary-bg)', color: 'var(--text-main)', padding: '10px 20px' }}>{office.phone}</a>
                                </div>
                            ))}
                        </div>
                    )}

                    {agentSection === 'social' && (
                        <div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                                {socialList.map((handle: any) => (
                                    <a key={handle.handle} href={handle.url} target="_blank" rel="noopener noreferrer" className="card" style={{ padding: '20px', textDecoration: 'none', color: 'var(--text-main)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                            <span style={{ fontWeight: 700, color: 'var(--primary-color)' }}>{handle.handle}</span>
                                            <ExternalLink size={14} />
                                        </div>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{handle.description}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );

    return (
        <>
            <SEO 
                title={`${selectedArea.name} Properties & Agents`} 
                description={`Find verified properties and real estate agents in ${selectedArea.name}, Lagos. Our Accommodation Hub connects you with the best listings.`}
            />
            <div className="container" style={{ padding: '60px 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '16px', color: 'var(--primary-color)' }}>{t('market.title.main')}</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>{t('market.subtitle.main')}</p>
                </div>

                <div style={{ display: 'flex', gap: '6px', background: 'var(--secondary-bg)', padding: '6px', borderRadius: '16px', maxWidth: '400px', margin: '0 auto 40px' }}>
                    <button onClick={() => setActiveTab('platforms')} style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', background: activeTab === 'platforms' ? 'var(--primary-color)' : 'transparent', color: activeTab === 'platforms' ? 'white' : 'var(--text-muted)', cursor: 'pointer', fontWeight: 700 }}>{t('market.tabs.platforms')}</button>
                    <button onClick={() => setActiveTab('agents')} style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', background: activeTab === 'agents' ? 'var(--primary-color)' : 'transparent', color: activeTab === 'agents' ? 'white' : 'var(--text-muted)', cursor: 'pointer', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <Crown size={14} /> {t('market.tabs.agents')} {!isPremium && <Lock size={12} />}
                    </button>
                </div>

                {activeTab === 'platforms' ? (
                    <div className="market-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 3fr', gap: '40px' }}>
                        <div style={{ background: 'var(--secondary-bg)', borderRadius: '24px', padding: '24px', height: 'fit-content' }}>
                            <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}><Search size={20} /> {t('market.select_area')}</h3>
                            <input type="text" placeholder={t('market.search_placeholder')} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-main)', marginBottom: '16px' }} />
                            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                {filteredAreas.map(area => (
                                    <button key={area.id} onClick={() => setSelectedArea(area)} style={{ width: '100%', textAlign: 'left', padding: '12px', borderRadius: '12px', border: 'none', background: selectedArea.id === area.id ? 'var(--primary-color)' : 'transparent', color: selectedArea.id === area.id ? 'white' : 'var(--text-main)', cursor: 'pointer', marginBottom: '4px' }}>{area.name}</button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div style={{ marginBottom: '40px', padding: '32px', background: 'var(--primary-color)', borderRadius: '24px', color: 'white' }}>
                                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('market.searching_in')}</span>
                                <h2 style={{ fontSize: '2.5rem', color: 'white' }}>{selectedArea.name}</h2>
                                <p style={{ marginTop: '12px' }}>{selectedArea.description[language] || selectedArea.description['en']}</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                                {PLATFORMS.map(platform => (
                                    <div key={platform.name} className="card" style={{ padding: '32px', borderTop: `4px solid ${platform.color}` }}>
                                        <div style={{ marginBottom: '20px' }}>{platform.icon}</div>
                                        <h3>{platform.name}</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.9rem' }}>{platform.description}</p>
                                        <a href={platform.urlBuilder(selectedArea.name)} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', background: platform.color }}>{t('market.search_btn')} {selectedArea.name}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '2rem' }}>{t('market.directory.title')}</h2>
                            <p style={{ color: 'var(--text-muted)' }}>{t('market.directory.subtitle')}</p>
                        </div>
                        <PremiumGate>
                            <AgentDirectory />
                        </PremiumGate>
                    </div>
                )}
            </div>
            <ReviewSection targetId="market" targetType="area" />
            <style>{`
                @media (max-width: 900px) {
                    .market-grid {
                        grid-template-columns: 1fr !important;
                        gap: 24px !important;
                    }
                    h1 { font-size: 2.2rem !important; }
                    h2 { font-size: 1.8rem !important; }
                }
            `}</style>
        </>
    );
};

export default MarketPage;
