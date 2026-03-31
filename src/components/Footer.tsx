
import { Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

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
                        {t('footer.tagline')}
                    </p>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>{t('footer.explore')}</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t('nav.home')}</Link></li>
                        <li><Link to="/explore" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t('nav.all_areas')}</Link></li>
                        <li><Link to="/quiz" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t('nav.find_match')}</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>{t('footer.company')}</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><Link to="/about" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t('nav.about')}</Link></li>
                        <li><span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }}>{t('footer.contact')}</span></li>
                        <li><span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }}>{t('footer.privacy')}</span></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>{t('footer.connect')}</h4>
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
                <p>&copy; {new Date().getFullYear()} LagosFit. {t('footer.built_for')}</p>
            </div>
        </footer>
    );
};

export default Footer;
