import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AREAS } from '../data/quiz_data';
import { useLanguage } from '../context/LanguageContext';
import {
    Search, MapPin, Navigation,
    Home, Clock,
    X, Map, ExternalLink, Activity, Compass,
    Utensils, Dribbble
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PLACES_TO_VISIT, WHAT_TO_EAT } from '../data/lifestyle_data';
import { calculateDistance } from '../utils/distance';

const ExplorePage = () => {
    const { language } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAreaId, setSelectedAreaId] = useState<string | null>(location.state?.selectedId || null);
    const [activeSubLocality, setActiveSubLocality] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'reviews' | 'perks'>('reviews');

    const filteredAreas = AREAS.filter(area =>
        area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        area.description[language].toLowerCase().includes(searchTerm.toLowerCase())
    );

    const selectedArea = selectedAreaId ? AREAS.find(a => a.id === selectedAreaId) : null;

    return (
        <div className="container" style={{ padding: '40px 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Explore Lagos Areas</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                    {language === 'en' ? 'Discover detailed insights about every neighborhood.' : 'Check everything about every area inside Lagos.'}
                </p>
            </div>

            {/* Search Bar */}
            <div style={{ maxWidth: '600px', margin: '0 auto 60px', position: 'relative' }}>
                <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                    type="text"
                    placeholder={language === 'en' ? "Search for an area (e.g. Yaba, Lekki)..." : "Find area (e.g. Yaba, Lekki)..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '16px 16px 16px 48px',
                        fontSize: '1rem',
                        borderRadius: '30px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--secondary-bg)',
                        color: 'var(--text-color)',
                        outline: 'none'
                    }}
                />
            </div>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
                {filteredAreas.map((area, index) => (
                    <motion.div
                        key={area.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="card"
                        style={{ cursor: 'pointer', padding: 0, overflow: 'hidden' }}
                        onClick={() => setSelectedAreaId(area.id)}
                        whileHover={{ y: -5 }}
                    >
                        <div style={{ height: '160px', background: 'var(--primary-color)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url(/lagos_cityscape_illustration.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)' }} />
                            <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
                                <MapPin size={32} color="var(--accent-color)" />
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{area.name}</h3>
                            </div>
                        </div>
                        <div style={{ padding: '24px' }}>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px', minHeight: '3em' }}>
                                {area.description[language]}
                            </p>

                            <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
                                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Avg. Rent</span>
                                <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{area.priceRange[language]}</span>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {area.attributes.rent.map(r => (
                                    <span key={r} className="tag" style={{ fontSize: '0.8rem' }}>{r.toUpperCase()}</span>
                                ))}
                                {area.attributes.work.includes('island') && <span className="tag" style={{ background: 'var(--secondary-bg)' }}>Island</span>}
                                {area.attributes.work.includes('central') && <span className="tag" style={{ background: 'var(--secondary-bg)' }}>Central</span>}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Explore More Section */}
            <div style={{ marginTop: '100px', borderTop: '1px solid var(--border-color)', paddingTop: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Experience Lagos</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Curated lists of where to go and what to eat.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                    {/* Places to Visit */}
                    <div className="card" style={{ padding: '32px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Map size={24} color="var(--primary-color)" /> Places You Need to Visit
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {PLACES_TO_VISIT.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            fontSize: '0.95rem',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s'
                                        }}
                                        className="hover-link"
                                    >
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-color)' }} />
                                        {item.name} {item.isStarred ? '★' : ''}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What to Eat */}
                    <div className="card" style={{ padding: '32px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Utensils size={24} color="var(--primary-color)" /> What to Eat
                        </h3>
                        <div style={{ overflowY: 'auto', maxHeight: '400px', paddingRight: '12px' }}>
                            {Object.entries(WHAT_TO_EAT).map(([category, items]) => (
                                <div key={category} style={{ marginBottom: '24px' }}>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--primary-color)', marginBottom: '12px', textTransform: 'capitalize' }}>
                                        {category.replace(/([A-Z])/g, ' $1').trim()}
                                    </h4>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {items.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '8px' }}>
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        fontSize: '0.9rem',
                                                        color: 'var(--text-muted)',
                                                        textDecoration: 'none',
                                                        transition: 'color 0.2s'
                                                    }}
                                                    className="hover-link"
                                                >
                                                    {item.name} {item.isStarred ? '★' : ''}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal Detail View */}
            <AnimatePresence>
                {selectedArea && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.7)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '24px'
                        }}
                        onClick={() => setSelectedAreaId(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            style={{
                                background: 'var(--bg-color)',
                                width: '100%',
                                maxWidth: '600px',
                                borderRadius: '24px',
                                padding: '40px',
                                position: 'relative',
                                maxHeight: '90vh',
                                overflowY: 'auto'
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedAreaId(null)}
                                style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                            >
                                <X size={24} />
                            </button>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--primary-color)' }}>{selectedArea.name}</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
                                {selectedArea.description[language]}
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Price Range</h4>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-color)' }}>
                                        {selectedArea.priceRange[language]}
                                    </div>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Vibe / Noise</h4>
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                        {selectedArea.attributes.noise.map(n => <span key={n} className="tag">{n}</span>)}
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '32px', padding: '24px', background: 'var(--secondary-bg)', borderRadius: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                    <Clock size={16} color="var(--primary-color)" />
                                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Estimated Commute (Driving)</h4>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>To Victoria Island</span>
                                        <span style={{ fontWeight: 600 }}>{selectedArea.commuteTo.vi}</span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>To Ikeja (Central)</span>
                                        <span style={{ fontWeight: 600 }}>{selectedArea.commuteTo.ikeja}</span>
                                    </div>
                                </div>
                            </div>

                            {selectedArea.innerLocalities && selectedArea.innerLocalities.length > 0 && (
                                <div style={{ marginTop: '32px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                        <MapPin size={16} color="var(--primary-color)" />
                                        <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Inner Localities & Areas</h4>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative' }}>
                                        {selectedArea.innerLocalities.map((loc, i) => (
                                            <motion.span
                                                key={i}
                                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--primary-rgb), 0.1)' }}
                                                onClick={() => setActiveSubLocality(activeSubLocality === loc ? null : loc)}
                                                style={{
                                                    padding: '6px 14px',
                                                    background: activeSubLocality === loc ? 'var(--primary-color)' : 'rgba(var(--primary-rgb), 0.05)',
                                                    borderRadius: '20px',
                                                    fontSize: '0.85rem',
                                                    color: activeSubLocality === loc ? 'white' : 'var(--text-main)',
                                                    border: '1px solid var(--border-color)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                {loc}
                                            </motion.span>
                                        ))}

                                        <AnimatePresence>
                                            {activeSubLocality && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '100%',
                                                        left: 0,
                                                        right: 0,
                                                        marginTop: '12px',
                                                        background: 'var(--card-bg)',
                                                        borderRadius: '16px',
                                                        padding: '20px',
                                                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                                        border: '1px solid var(--border-color)',
                                                        zIndex: 10,
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                                        <h5 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', margin: 0 }}>{activeSubLocality}</h5>
                                                        <X size={16} onClick={() => setActiveSubLocality(null)} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} />
                                                    </div>

                                                    <div style={{ height: '120px', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px' }}>
                                                        <iframe
                                                            title={`Map of ${activeSubLocality}`}
                                                            width="100%"
                                                            height="100%"
                                                            style={{ border: 0 }}
                                                            src={`https://maps.google.com/maps?q=${encodeURIComponent(activeSubLocality + ', ' + selectedArea.name + ', Lagos')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                                        ></iframe>
                                                    </div>

                                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                                                        <button
                                                            onClick={() => setViewMode('reviews')}
                                                            style={{
                                                                flex: 1, padding: '8px', borderRadius: '8px', border: 'none',
                                                                background: viewMode === 'reviews' ? 'var(--primary-color)' : 'transparent',
                                                                color: viewMode === 'reviews' ? 'white' : 'var(--text-muted)',
                                                                fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
                                                            }}
                                                        >
                                                            STREET TALK
                                                        </button>
                                                        <button
                                                            onClick={() => setViewMode('perks')}
                                                            style={{
                                                                flex: 1, padding: '8px', borderRadius: '8px', border: 'none',
                                                                background: viewMode === 'perks' ? 'var(--primary-color)' : 'transparent',
                                                                color: viewMode === 'perks' ? 'white' : 'var(--text-muted)',
                                                                fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
                                                            }}
                                                        >
                                                            LOCAL PERKS
                                                        </button>
                                                    </div>

                                                    {viewMode === 'reviews' ? (
                                                        <div style={{ background: 'rgba(var(--accent-rgb), 0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(var(--accent-rgb), 0.1)' }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                                                <Activity size={16} color="var(--accent-color)" />
                                                                <strong style={{ fontSize: '0.8rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>Map Talk (Street Reviews)</strong>
                                                            </div>
                                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                                                                {
                                                                    selectedArea.subLocalityInsights?.[activeSubLocality] ?
                                                                        selectedArea.subLocalityInsights[activeSubLocality][language] :
                                                                        (activeSubLocality.toLowerCase().includes('estate') ?
                                                                            `"This is a strictly gated community. Security is 10/10 but you'll need a code for every visitor. Very quiet and elite vibe."` :
                                                                            activeSubLocality.toLowerCase().includes('road') ?
                                                                                `"The main heartbeat of this area. Move here if you love being in the center of things, but expect some traffic during rush hours."` :
                                                                                `"This pocket of ${selectedArea.name} has a strong community feel. Residents highlight the ${language === 'en' ? 'accessibility and unique local character' : 'how things set for here and neighbors get sense'}."`)
                                                                }
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                                            {selectedArea.subLocalityDetails?.[activeSubLocality] ? (
                                                                <>

                                                                    {selectedArea.subLocalityDetails[activeSubLocality].placesToVisit && (
                                                                        <div className="perk-section">
                                                                            <h6 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', color: 'var(--text-color)', marginBottom: '16px', fontWeight: 800 }}>
                                                                                <Compass size={20} color="var(--primary-color)" /> Places to Visit
                                                                            </h6>
                                                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                                                {selectedArea.subLocalityDetails[activeSubLocality].placesToVisit.map((p, i) => (
                                                                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', boxShadow: '0 0 0 4px rgba(var(--accent-rgb), 0.1)' }} />
                                                                                        <a
                                                                                            href={p.url || '#'}
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            style={{
                                                                                                fontSize: '0.95rem', color: 'var(--text-main)', textDecoration: 'none',
                                                                                                fontWeight: 600, borderBottom: '1px solid transparent', transition: 'all 0.2s'
                                                                                            }}
                                                                                            onMouseOver={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-color)'}
                                                                                            onMouseOut={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                                                                                        >
                                                                                            {p.name}
                                                                                        </a>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    {selectedArea.subLocalityDetails[activeSubLocality].whatToEat && (
                                                                        <div className="perk-section">
                                                                            <h6 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', color: 'var(--text-color)', marginBottom: '16px', fontWeight: 800 }}>
                                                                                <Utensils size={20} color="var(--primary-color)" /> What to Eat
                                                                            </h6>
                                                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                                                {selectedArea.subLocalityDetails[activeSubLocality].whatToEat.map((food, i) => (
                                                                                    <a
                                                                                        key={i}
                                                                                        href={food.url || '#'}
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                        style={{
                                                                                            fontSize: '0.9rem', padding: '8px 16px', background: 'var(--secondary-bg)',
                                                                                            borderRadius: '12px', color: 'var(--text-main)', textDecoration: 'none',
                                                                                            display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--border-color)',
                                                                                            fontWeight: 500, transition: 'all 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                                                                        }}
                                                                                        onMouseOver={(e) => {
                                                                                            e.currentTarget.style.borderColor = 'var(--accent-color)';
                                                                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                                                                        }}
                                                                                        onMouseOut={(e) => {
                                                                                            e.currentTarget.style.borderColor = 'var(--border-color)';
                                                                                            e.currentTarget.style.transform = 'translateY(0)';
                                                                                        }}
                                                                                    >
                                                                                        {food.name} {food.url && <ExternalLink size={12} opacity={0.6} />}
                                                                                    </a>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    {selectedArea.subLocalityDetails[activeSubLocality].sports && (
                                                                        <div className="perk-section">
                                                                            <h6 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', color: 'var(--text-color)', marginBottom: '16px', fontWeight: 800 }}>
                                                                                <Dribbble size={20} color="var(--primary-color)" /> Sports & Fitness
                                                                            </h6>
                                                                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px' }}>
                                                                                {selectedArea.subLocalityDetails[activeSubLocality].sports.map((sport, i) => (
                                                                                    <a
                                                                                        key={i}
                                                                                        href={sport.url || '#'}
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                        style={{
                                                                                            textDecoration: 'none', color: 'inherit', display: 'flex',
                                                                                            flexDirection: 'column', gap: '4px', padding: '12px',
                                                                                            background: 'var(--secondary-bg)', borderRadius: '14px',
                                                                                            border: '1px solid var(--border-color)', transition: 'all 0.2s',
                                                                                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                                                                        }}
                                                                                        onMouseOver={(e) => {
                                                                                            e.currentTarget.style.borderColor = 'var(--accent-color)';
                                                                                            e.currentTarget.style.background = 'rgba(var(--accent-rgb), 0.05)';
                                                                                        }}
                                                                                        onMouseOut={(e) => {
                                                                                            e.currentTarget.style.borderColor = 'var(--border-color)';
                                                                                            e.currentTarget.style.background = 'var(--secondary-bg)';
                                                                                        }}
                                                                                    >
                                                                                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sport.name}</span>
                                                                                        <span style={{ fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 600 }}>{sport.type}</span>
                                                                                    </a>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <p style={{ fontSize: '0.85rem', textAlign: 'center', padding: '20px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                                                    We're still mapping the best spots in {activeSubLocality}. Check back soon for food and sport recommendations!
                                                                </p>
                                                            )}
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            )}

                            <div style={{ marginTop: '32px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                    <Map size={16} color="var(--primary-color)" />
                                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Popular Hotspots</h4>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                                    {selectedArea.hotspots.map((spot, i) => (
                                        <div key={i} style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--secondary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Utensils size={14} color="var(--text-muted)" />
                                            </div>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{spot.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {selectedArea.coords && (
                                <div style={{ marginTop: '32px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                        <Navigation size={16} color="var(--primary-color)" />
                                        <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Proximity to Other Areas</h4>
                                    </div>
                                    <div style={{ background: 'var(--secondary-bg)', borderRadius: '16px', padding: '20px' }}>
                                        <div style={{ display: 'grid', gap: '12px' }}>
                                            {AREAS
                                                .filter(a => a.id !== selectedArea.id && a.coords)
                                                .map(a => ({
                                                    ...a,
                                                    distance: calculateDistance(
                                                        selectedArea.coords!.lat,
                                                        selectedArea.coords!.lng,
                                                        a.coords!.lat,
                                                        a.coords!.lng
                                                    )
                                                }))
                                                .sort((a, b) => a.distance - b.distance)
                                                .slice(0, 5)
                                                .map(a => (
                                                    <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                                                        <span style={{ color: 'var(--text-muted)' }}>{a.name}</span>
                                                        <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{a.distance} km</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '12px', fontStyle: 'italic' }}>
                                            *Distances are approximate "as the crow flies".
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div style={{ marginTop: '32px', padding: '32px', border: '2px dashed var(--accent-color)', borderRadius: '24px', textAlign: 'center' }}>
                                <Home size={32} color="var(--accent-color)" style={{ marginBottom: '12px' }} />
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Ready to move to {selectedArea.name}?</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
                                    Connect with verified agents and browse available apartments in {selectedArea.name} right now.
                                </p>
                                <button
                                    onClick={() => navigate('/market', { state: { areaId: selectedArea.id } })}
                                    className="btn btn-primary"
                                    style={{ background: 'var(--accent-color)', width: '100%', fontWeight: 700 }}
                                >
                                    Find an Apartment
                                </button>
                            </div>

                            <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    Does this sound like you? <Link to="/quiz" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Take the quiz</Link> to be sure!
                                </p>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ExplorePage;
