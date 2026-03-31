import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
    rating: number;
    max?: number;
    size?: number;
    interactive?: boolean;
    onChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ 
    rating, 
    max = 5, 
    size = 18, 
    interactive = false, 
    onChange 
}) => {
    return (
        <div style={{ display: 'flex', gap: '4px' }}>
            {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
                <div 
                    key={star}
                    onClick={() => interactive && onChange && onChange(star)}
                    style={{ cursor: interactive ? 'pointer' : 'default', transition: 'transform 0.1s' }}
                    onMouseEnter={(e) => interactive && (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => interactive && (e.currentTarget.style.transform = 'scale(1)')}
                >
                    <Star 
                        size={size} 
                        strokeWidth={1.5}
                        fill={star <= rating ? 'var(--accent-color)' : 'transparent'}
                        color={star <= rating ? 'var(--accent-color)' : 'var(--text-muted)'}
                        style={{ opacity: star <= rating ? 1 : 0.4 }}
                    />
                </div>
            ))}
        </div>
    );
};

export default StarRating;
