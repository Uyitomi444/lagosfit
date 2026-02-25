
import { Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--secondary-bg)',
            padding: '60px 24px 24px',
            borderTop: '1px solid var(--border-color)',
            marginTop: 'auto'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <img src="/logo.png" alt="LagosFit" style={{ height: '40px', filter: 'grayscale(100%) opacity(0.8)' }} />
                        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-main)', opacity: 0.9 }}>LagosFit</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '280px' }}>
                        The smart way to find your perfect neighborhood in Lagos. Data-driven, honest, and easy.
                    </p>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>Explore</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Home</Link></li>
                        <li><Link to="/explore" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>All Areas</Link></li>
                        <li><Link to="/quiz" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Find Your Match</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>Company</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><Link to="/about" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>About Us</Link></li>
                        <li><span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }}>Contact</span></li>
                        <li><span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }}>Privacy Policy</span></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>Connect</h4>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <a href="#" style={{ color: 'var(--text-muted)' }}><Twitter size={20} /></a>
                        <a href="#" style={{ color: 'var(--text-muted)' }}><Instagram size={20} /></a>
                        <a href="#" style={{ color: 'var(--text-muted)' }}><Github size={20} /></a>
                    </div>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-color)',
                color: 'var(--text-muted)',
                fontSize: '0.85rem'
            }}>
                <p>&copy; {new Date().getFullYear()} LagosFit. Built for Lagos.</p>
            </div>
        </footer>
    );
};

export default Footer;
