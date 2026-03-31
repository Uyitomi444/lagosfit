import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface OptionCardProps {
    label: string;
    selected: boolean;
    onSelect: () => void;
    multiSelect?: boolean;
}

const OptionCard = ({ label, selected, onSelect, multiSelect }: OptionCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01, x: 5 }}
            whileTap={{ scale: 0.99 }}
            className={`option-card ${selected ? 'selected' : ''}`}
            onClick={onSelect}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '18px 24px',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: selected ? 'rgba(var(--primary-rgb), 0.15)' : 'var(--card-bg)',
                border: selected ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                boxShadow: selected ? '0 8px 20px rgba(var(--primary-rgb), 0.2)' : 'var(--shadow)',
            }}
        >
            <span style={{
                fontWeight: selected ? 600 : 500,
                fontSize: '1.05rem',
                color: selected ? 'var(--primary-color)' : 'var(--text-main)'
            }}>
                {label}
            </span>
            <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: selected ? 'var(--primary-color)' : 'transparent', border: !selected && multiSelect ? '2px solid var(--border-color)' : 'none' }}>
                <AnimatePresence mode="wait">
                    {selected ? (
                        <motion.div
                            key="check"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            style={{ color: 'white' }}
                        >
                            <Check size={18} strokeWidth={1.5} />
                        </motion.div>
                    ) : !multiSelect && (
                        <motion.div
                            key="arrow"
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 0.3, x: 0 }}
                            style={{ color: 'var(--text-muted)' }}
                        >
                            <ArrowRight size={20} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default OptionCard;
