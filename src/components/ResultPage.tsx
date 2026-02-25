import { useMemo, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { getRecommendations } from '../utils/recommendation';
import type { Area } from '../types';
import { motion } from 'framer-motion';
import { Star, RefreshCw, ArrowRight, Navigation, MessageSquare, AlertCircle, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { calculateDistance } from '../utils/distance';
import { AREAS } from '../data/quiz_data';
import TruthCard from './TruthCard';

const ResultPage = () => {
    const { answers: currentAnswers, resetQuiz, saveResult } = useQuiz();
    const { language } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    // Check if we arrived here from history
    const fromHistory = location.state?.fromHistory || false;
    const historyAnswers = location.state?.answers;

    // Use history answers if available, otherwise use live quiz answers
    const answers = fromHistory && historyAnswers ? historyAnswers : currentAnswers;

    const { top, others } = useMemo(() => getRecommendations(answers), [answers]);
    const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);

    // Save result on mount only if NOT from history
    useEffect(() => {
        if (top && !fromHistory) {
            saveResult(top);
        }
    }, [top, fromHistory]); // Added dependencies for safety

    const currentArea = useMemo(() => {
        if (selectedAreaId && selectedAreaId !== top.id) {
            return others.find(a => a.id === selectedAreaId) || top;
        }
        return top;
    }, [selectedAreaId, top, others]);

    const displayOptions = useMemo(() => {
        const all = [top, ...others];
        // Deduplicate by ID just in case
        const unique = Array.from(new Map(all.map(item => [item.id, item])).values());
        return unique.filter((a: Area) => a.id !== currentArea.id);
    }, [top, others, currentArea]);

    // Scroll to top when selection changes manually
    const handleAreaSelect = (id: string) => {
        setSelectedAreaId(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleRetake = () => {
        resetQuiz();
        navigate('/quiz');
    };

    return (
        <div className="container" style={{ padding: '60px 24px', maxWidth: '1000px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <span style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '1.2rem' }}>Based on your answers</span>
                <h1 style={{ fontSize: '3rem', margin: '16px 0' }}>We Found Your Perfect Match</h1>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', alignItems: 'start' }}>
                {/* Top Match Card */}
                <motion.div
                    className="card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ background: 'var(--primary-color)', color: 'white', padding: '40px', position: 'relative', overflow: 'hidden' }}
                >
                    {/* Decorative element */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/lagos_pattern.png)', opacity: 0.1, zIndex: 0 }} />
                    <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', zIndex: 1 }} />
                    <img src="/eyo_icon.png" alt="Eyo" style={{ position: 'absolute', bottom: '-20px', right: '20px', height: '180px', opacity: 0.1, transform: 'rotate(-10deg)', zIndex: 0 }} />

                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ padding: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}>
                                <Star size={24} fill="var(--accent-color)" stroke="none" />
                            </div>
                            <span style={{ fontWeight: 600, letterSpacing: '1px', opacity: 0.9 }}>TOP RECOMMENDATION</span>
                        </div>

                        <h2 style={{ fontSize: '3.5rem', marginBottom: '8px', color: 'white' }}>{currentArea.name}</h2>

                        {currentArea.innerLocalities && currentArea.innerLocalities.length > 0 && (
                            <div style={{ marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', width: '100%', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Try these specific spots:</span>
                                {currentArea.innerLocalities.slice(0, 3).map((loc, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                                        style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', fontSize: '0.9rem', color: 'white', border: '1px solid rgba(255,255,255,0.2)', cursor: 'default' }}
                                    >
                                        {loc}
                                    </motion.span>
                                ))}
                            </div>
                        )}

                        <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '32px' }}>{currentArea.description[language]}</p>

                        <div style={{ marginBottom: '32px' }}>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {/* Rent */}
                                {(() => {
                                    const matchedRent = answers.rent && currentArea.attributes.rent.includes(answers.rent) ? answers.rent : null;
                                    const displayRent = matchedRent || currentArea.attributes.rent.join(', ');
                                    return <span className="tag">Rent: {displayRent.charAt(0).toUpperCase() + displayRent.slice(1)}</span>;
                                })()}

                                {/* Noise */}
                                {(() => {
                                    const matchedNoise = answers.noise && currentArea.attributes.noise.includes(answers.noise) ? answers.noise : null;
                                    const displayNoise = matchedNoise || currentArea.attributes.noise.join(', ');
                                    return <span className="tag">Noise: {displayNoise.charAt(0).toUpperCase() + displayNoise.slice(1)}</span>;
                                })()}

                                {/* Lifestyle (New) */}
                                {currentArea.attributes.lifestyle && (() => {
                                    const matchedLifestyle = answers.lifestyle && currentArea.attributes.lifestyle.includes(answers.lifestyle) ? answers.lifestyle : null;
                                    const displayLifestyle = matchedLifestyle || currentArea.attributes.lifestyle[0]; // Just show first if multiple/no match to save space
                                    return <span className="tag">Lifestyle: {displayLifestyle.charAt(0).toUpperCase() + displayLifestyle.slice(1)}</span>;
                                })()}

                                {/* Electricity (New) */}
                                {currentArea.attributes.electricity && (() => {
                                    const matchedElec = answers.electricity && currentArea.attributes.electricity.includes(answers.electricity) ? answers.electricity : null;
                                    const displayElec = matchedElec || currentArea.attributes.electricity[0];
                                    return <span className="tag">Power: {displayElec.charAt(0).toUpperCase() + displayElec.slice(1)}</span>;
                                })()}
                            </div>
                        </div>

                        {/* Social Buzz section */}
                        {currentArea.socialBuzz && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    marginBottom: '32px'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                    <MessageSquare size={18} color="var(--accent-color)" />
                                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase' }}>Street Talk</span>
                                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', background: 'var(--accent-color)', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>TRENDING</span>
                                </div>
                                <p style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', fontStyle: 'italic', color: 'white' }}>"{currentArea.socialBuzz.trending}"</p>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <div>
                                        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 800, display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>Complaints</span>
                                        {currentArea.socialBuzz.complaints.slice(0, 2).map((c, i) => (
                                            <div key={i} style={{ fontSize: '0.8rem', display: 'flex', gap: '6px', marginBottom: '6px', opacity: 0.9 }}>
                                                <AlertCircle size={14} color="#ff4d4d" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <span>{c}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 800, display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>Compliments</span>
                                        {currentArea.socialBuzz.compliments.slice(0, 2).map((c, i) => (
                                            <div key={i} style={{ fontSize: '0.8rem', display: 'flex', gap: '6px', marginBottom: '6px', opacity: 0.9 }}>
                                                <ThumbsUp size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <span>{c}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <button
                            className="btn"
                            onClick={() => navigate('/explore', { state: { selectedId: currentArea.id } })}
                            style={{ background: 'white', color: 'var(--primary-color)', width: '100%', marginBottom: '12px' }}
                        >
                            Explore {currentArea.name}
                        </button>

                        <button
                            className="btn"
                            onClick={() => navigate('/market', { state: { areaId: currentArea.id } })}
                            style={{ background: 'var(--accent-color)', color: 'white', width: '100%', fontWeight: 700 }}
                        >
                            Find an Apartment
                        </button>
                    </div>
                </motion.div>

                {/* Truth Metrics side column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <TruthCard area={currentArea} />

                    {/* Alternatives & Map Placeholder */}
                    <div>
                        <div className="card" style={{ marginBottom: '24px', minHeight: '300px', padding: 0, overflow: 'hidden', position: 'relative', border: 'none' }}>
                            <iframe
                                title={`Map of ${currentArea.name}`}
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                loading="lazy"
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(currentArea.name + ', Lagos')}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                            ></iframe>
                        </div>

                        {currentArea.coords && (
                            <div className="card" style={{ marginBottom: '24px', padding: '24px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Navigation size={20} color="var(--primary-color)" /> Closest Neighbors
                                </h3>
                                <div style={{ display: 'grid', gap: '12px' }}>
                                    {AREAS
                                        .filter(a => a.id !== currentArea.id && a.coords)
                                        .map(a => ({
                                            ...a,
                                            distance: calculateDistance(
                                                currentArea.coords!.lat,
                                                currentArea.coords!.lng,
                                                a.coords!.lat,
                                                a.coords!.lng
                                            )
                                        }))
                                        .sort((a, b) => a.distance - b.distance)
                                        .slice(0, 3)
                                        .map(a => (
                                            <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem' }}>
                                                <span style={{ color: 'var(--text-muted)' }}>{a.name}</span>
                                                <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{a.distance} km</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        <h3 style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>Other great options</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Filter out currentArea from others if needed, but for now just show original 'others' logic or better yet: 
                            Show 'top' in the list if currentArea is NOT top? 
                            Let's keep it simple: Show the 'others' list as recommended alternatives. 
                            If you click one, it becomes main.
                        */}
                            {displayOptions.map((area: Area, index: number) => (
                                <motion.div
                                    key={area.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="card"
                                    onClick={() => handleAreaSelect(area.id)}
                                    style={{
                                        padding: '20px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        margin: 0,
                                        cursor: 'pointer',
                                        border: currentArea.id === area.id ? '2px solid var(--primary-color)' : 'none',
                                        background: currentArea.id === area.id ? 'rgba(var(--primary-rgb), 0.1)' : 'var(--card-bg)',
                                        color: 'var(--text-main)'
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem' }}>{area.name}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Match Score: {area.matchScore}</p>
                                    </div>
                                    <ArrowRight size={20} color="var(--primary-color)" />
                                </motion.div>
                            ))}

                            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                                <button onClick={handleRetake} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 500, border: 'none', background: 'transparent', color: 'var(--text-muted)' }}>
                                    <RefreshCw size={16} /> Retake Quiz
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
