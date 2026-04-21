import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Globe, Fuel, Lock, Check } from 'lucide-react';
import type { Area } from '../types';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface TruthCardProps {
    area: Area;
}

const TruthCard = ({ area }: TruthCardProps) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const isPremium = user?.isPremium || false;

    const renderMetric = (
        icon: React.ReactNode,
        label: string,
        value: string | number | undefined,
        isLocked: boolean
    ) => (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
            borderBottom: '1px solid var(--border-color)',
            opacity: isLocked ? 0.7 : 1
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: isLocked ? 'var(--text-muted)' : 'var(--primary-color)' }}>
                    {icon}
                </div>
                <span style={{ fontWeight: 500 }}>{label}</span>
            </div>
            <div>
                {isLocked ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        <Lock size={12} /> Unlock with Pro
                    </div>
                ) : (
                    <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>
                        {value !== undefined ? value : 'N/A'}
                    </span>
                )}
            </div>
        </div>
    );

    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ padding: '24px', position: 'relative' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldAlert size={20} color="var(--primary-color)" /> LagosFit Truth™
                </h3>
                {!isPremium && (
                    <span style={{ fontSize: '0.75rem', padding: '4px 8px', background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary-color)', borderRadius: '4px', fontWeight: 600 }}>
                        LIMITED PREVIEW
                    </span>
                )}
            </div>

            <div style={{ marginBottom: '24px' }}>
                {renderMetric(
                    <ShieldAlert size={18} />,
                    'Flood Risk',
                    area.floodRisk?.toUpperCase(),
                    !isPremium
                )}
                {renderMetric(
                    <Zap size={18} />,
                    'Power Supply (Avg/Day)',
                    area.powerAvgHours ? `${area.powerAvgHours} hrs` : undefined,
                    !isPremium
                )}
                {renderMetric(
                    <Globe size={18} />,
                    'Fiber Internet',
                    area.internetFiber ? 'Available' : 'Limited',
                    !isPremium
                )}
                {renderMetric(
                    <Fuel size={18} />,
                    'Monthly Generator Est.',
                    area.genCostEstimate,
                    !isPremium
                )}
            </div>

            {!isPremium && (
                <div style={{
                    background: 'var(--main-bg)',
                    padding: '24px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '2px dashed rgba(var(--primary-rgb), 0.2)'
                }}>
                    <h4 style={{ margin: '0 0 8px 0' }}>Get the Real Picture</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                        Join 5,000+ residents making data-backed decisions.
                    </p>
                    <button
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                        onClick={() => navigate('/pricing')}
                    >
                        Upgrade to Pro
                    </button>
                </div>
            )}

            {isPremium && (
                <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success-color)', fontSize: '0.85rem', marginBottom: '20px' }}>
                        <Check size={18} strokeWidth={1.5} />
                        Pro access active — Full data unlocked.
                    </div>
                    
                    <div style={{ 
                        padding: '16px', 
                        background: 'rgba(var(--primary-rgb), 0.03)', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem', 
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-color)'
                    }}>
                        <p style={{ margin: '0 0 8px 0', fontWeight: 700, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Data Sources & Accuracy
                        </p>
                        <ul style={{ paddingLeft: '16px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li><strong>Flood Risk:</strong> Sourced from LSWMO elevation benchmarks and 5-year historical soil-saturation trends.</li>
                            <li><strong>Power Supply:</strong> Derived from Ikeja Electric / Eko DisCo cluster performance indices (Ref: Q1 2026).</li>
                            <li><strong>Fiber Internet:</strong> Verified against FiberOne, Airtel, and MainOne active coverage heatmaps.</li>
                        </ul>
                        <p style={{ marginTop: '12px', fontSize: '0.7rem', fontStyle: 'italic' }}>
                            Last Comprehensive Audit: April 2026.
                        </p>
                    </div>
                </>
            )}

        </motion.div>
    );
};


export default TruthCard;
