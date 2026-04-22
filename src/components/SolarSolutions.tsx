import { motion } from 'framer-motion';
import { Sun, Zap, Battery, ArrowRight, ShieldCheck } from 'lucide-react';

const SolarSolutions = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{
                background: 'var(--secondary-bg)',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ flex: '1.5', minWidth: '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)', fontWeight: 700, marginBottom: '12px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            <Zap size={14} /> Energy Partner
                        </div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)', lineHeight: 1.2 }}>
                            Reliable <span style={{ color: 'var(--primary-color)' }}>Solar Power</span> for Your New Home
                        </h2>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                            Eliminate generator noise and fuel costs. Get 24/7 clean energy with <strong>Strength Field Solar</strong>.
                        </p>
                    </div>

                    <div style={{ flex: '1', minWidth: '260px', background: 'var(--card-bg)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Zap size={16} color="var(--primary-color)" /> Estimated Savings
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                    <span>Before (Generator)</span>
                                    <span>₦150k/mo</span>
                                </div>
                                <div style={{ height: '6px', background: 'rgba(0,0,0,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: '100%', background: 'var(--error-color)' }} />
                                </div>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.75rem', color: 'var(--success-color)', fontWeight: 600 }}>
                                    <span>After (Solar)</span>
                                    <span>₦0/mo</span>
                                </div>
                                <div style={{ height: '6px', background: 'rgba(0,0,0,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: '5%', background: 'var(--success-color)' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        {[
                            { icon: <ShieldCheck size={16} strokeWidth={1.5} />, text: 'Zero Noise/Fuel' },
                            { icon: <Battery size={16} strokeWidth={1.5} />, text: 'All Home Sizes' },
                            { icon: <Sun size={16} strokeWidth={1.5} />, text: '₦1.2m Yearly Saving' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                <span style={{ color: 'var(--primary-color)' }}>{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>

                    <a 
                        href={`https://wa.me/2348102441180?text=${encodeURIComponent("Hello! I was referred by LagosFit for a free solar quote.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ 
                            padding: '12px 24px',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none'
                        }}
                    >
                        Get Free Quote <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default SolarSolutions;
