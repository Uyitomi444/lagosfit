import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Globe, Fuel, Lock, CheckCircle2 } from 'lucide-react';
import type { Area, SubscriptionTier } from '../types';
import { useQuiz } from '../context/QuizContext';

interface TruthCardProps {
    area: Area;
}

const TruthCard = ({ area }: TruthCardProps) => {
    const { tier, setTier } = useQuiz();

    const isStandard = tier === 'standard' || tier === 'premium';
    const isPremium = tier === 'premium';

    const renderMetric = (
        icon: React.ReactNode,
        label: string,
        value: string | number | undefined,
        isLocked: boolean,
        requiredTier: SubscriptionTier
    ) => (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            opacity: isLocked ? 0.6 : 1
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
                        <Lock size={12} /> Unlock with {requiredTier.charAt(0).toUpperCase() + requiredTier.slice(1)}
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
                {tier === 'free' && (
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
                    !isStandard,
                    'standard'
                )}
                {renderMetric(
                    <Zap size={18} />,
                    'Power Supply (Avg/Day)',
                    area.powerAvgHours ? `${area.powerAvgHours} hrs` : undefined,
                    !isStandard,
                    'standard'
                )}
                {renderMetric(
                    <Globe size={18} />,
                    'Fiber Internet',
                    area.internetFiber ? 'Available' : 'Limited',
                    !isPremium,
                    'premium'
                )}
                {renderMetric(
                    <Fuel size={18} />,
                    'Monthly Generator Est.',
                    area.genCostEstimate,
                    !isPremium,
                    'premium'
                )}
            </div>

            {tier === 'free' && (
                <div style={{
                    background: 'var(--main-bg)',
                    padding: '24px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '2px dashed rgba(var(--primary-rgb), 0.2)'
                }}>
                    <h4 style={{ margin: '0 0 8px 0' }}>Get the Real Picture</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                        Join 2,000+ Lagosians making data-backed decisions.
                    </p>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <button
                            className="btn btn-primary"
                            style={{ fontSize: '0.8rem', padding: '8px 16px' }}
                            onClick={() => setTier('standard')}
                        >
                            Get Standard (₦2.5k)
                        </button>
                        <button
                            className="btn btn-outline"
                            style={{ fontSize: '0.8rem', padding: '8px 16px', background: 'var(--accent-color)', color: 'white', border: 'none' }}
                            onClick={() => setTier('premium')}
                        >
                            Get Premium (₦5k)
                        </button>
                    </div>
                </div>
            )}

            {tier !== 'free' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontSize: '0.85rem' }}>
                    <CheckCircle2 size={16} />
                    {tier === 'premium' ? 'Premium access active' : 'Standard access active'} — Full data unlocked.
                </div>
            )}
        </motion.div>
    );
};

export default TruthCard;
