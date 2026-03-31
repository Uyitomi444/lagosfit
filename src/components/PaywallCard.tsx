import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Crown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PaywallCardProps {
    title: string;
    description: string;
}

const PaywallCard: React.FC<PaywallCardProps> = ({ title, description }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ 
                margin: '20px 0',
                padding: '40px 32px',
                borderRadius: '24px',
                background: 'linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.05))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(var(--primary-rgb), 0.2)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Glow */}
            <div style={{ 
                position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
                background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)',
                zIndex: 0
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                    width: '64px', height: '64px', borderRadius: '50%', background: 'var(--primary-color)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                    boxShadow: '0 8px 24px rgba(var(--primary-rgb), 0.3)'
                }}>
                    <Lock size={32} color="white" />
                </div>
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '300px', margin: '0 auto 32px' }}>
                    {description}
                </p>
                
                <Link to="/pricing" style={{ display: 'inline-block', width: '100%' }}>
                    <button className="btn btn-primary" style={{ width: '100%', gap: '12px', fontSize: '1.1rem', padding: '16px' }}>
                        <Crown size={20} fill="white" /> Unlock with Pro <ArrowRight size={20} />
                    </button>
                </Link>
                
                <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Just ₦5,000 / month. Cancel anytime.
                </p>
            </div>
        </motion.div>
    );
};

export default PaywallCard;
