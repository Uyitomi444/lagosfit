import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { Sun, Moon, Globe, LogIn, LogOut, ChevronDown, History, Menu, X, User, ShieldCheck, CheckCircle } from 'lucide-react';

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const langRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setLangDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const handleLogout = () => {
        logout();
        setDropdownOpen(false);
        setMobileMenuOpen(false);
        navigate('/');
    };

    const displayName = user?.name || user?.email?.split('@')[0] || 'User';
    const initial = displayName.charAt(0).toUpperCase();

    const navLinks = [
        { to: '/', label: t('nav.home') },
        { to: '/explore', label: t('nav.explore') },
        { to: '/market', label: t('nav.market') },
        { to: '/pricing', label: t('nav.pricing') },
        { to: '/about', label: t('nav.about') },
    ];

    return (
        <>
            <nav style={{
                height: 'var(--nav-height)',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                background: 'var(--nav-bg)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--border-color)',
                transition: 'background 0.3s ease'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%',
                    maxWidth: 'var(--max-width)',
                    margin: '0 auto',
                    padding: '0 20px'
                }}>
                    {/* Logo */}
                    <Link to="/" style={{ flexShrink: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src="/logo.png" alt="Logo" style={{ height: '48px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
                            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: 'var(--primary-color)', letterSpacing: '-0.5px' }}>LagosFit</span>
                        </div>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="nav-desktop-links" style={{ display: 'flex', gap: '20px' }}>
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: location.pathname === link.to ? 700 : 500,
                                    color: location.pathname === link.to ? 'var(--primary-color)' : 'var(--text-main)',
                                    transition: 'color 0.2s'
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right side controls */}
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
                        <div ref={langRef} style={{ position: 'relative' }} className="hide-on-mobile">
                            <button
                                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                                className="nav-icon-btn"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-main)', padding: '6px' }}
                            >
                                <Globe size={18} />
                                <span className="nav-hide-xs" style={{ fontSize: '0.75rem', fontWeight: 600 }}>{language.toUpperCase()}</span>
                                <ChevronDown size={12} style={{ transition: 'transform 0.2s', transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                            </button>

                            {langDropdownOpen && (
                                <div style={{
                                    position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                                    width: '160px', background: 'var(--card-bg)',
                                    border: '1px solid var(--border-color)', borderRadius: '12px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: '6px',
                                    zIndex: 200, animation: 'dropdownIn 0.2s ease',
                                    maxHeight: '70vh', overflowY: 'auto'
                                }}>
                                    {[
                                        { code: 'en', label: 'English' },
                                        { code: 'pidgin', label: 'Pidgin' },
                                        { code: 'yo', label: 'Yoruba' },
                                        { code: 'ig', label: 'Igbo' },
                                        { code: 'ha', label: 'Hausa' }
                                    ].map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code as any);
                                                setLangDropdownOpen(false);
                                            }}
                                            style={{
                                                width: '100%', padding: '10px 12px', border: 'none',
                                                background: language === lang.code ? 'var(--secondary-bg)' : 'transparent',
                                                color: language === lang.code ? 'var(--primary-color)' : 'var(--text-main)',
                                                textAlign: 'left', borderRadius: '8px', cursor: 'pointer',
                                                fontSize: '0.85rem', fontWeight: language === lang.code ? 700 : 500,
                                                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                                            }}
                                        >
                                            {lang.label}
                                            {language === lang.code && <CheckCircle size={14} />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="nav-icon-btn"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', padding: '6px' }}
                        >
                            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>

                        {/* Auth section */}
                        {user ? (
                            <div ref={dropdownRef} style={{ position: 'relative' }}>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="user-avatar-btn"
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '8px',
                                        background: 'var(--secondary-bg)', color: 'var(--text-main)',
                                        border: '1px solid var(--border-color)', borderRadius: '50px',
                                        padding: '4px 12px 4px 4px', cursor: 'pointer',
                                        transition: 'all 0.2s ease', fontWeight: 500, fontSize: '0.82rem'
                                    }}
                                >
                                    {user.photoURL ? (
                                        <img src={user.photoURL} alt={displayName} style={{
                                            width: '24px', height: '24px', borderRadius: '50%',
                                            objectFit: 'cover'
                                        }} />
                                    ) : (
                                        <div style={{
                                            width: '24px', height: '24px', borderRadius: '50%',
                                            background: 'var(--primary-color)', color: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '0.75rem', fontWeight: 700
                                        }}>{initial}</div>
                                    )}
                                    <span className="nav-hide-mobile">{displayName.split(' ')[0]}</span>
                                    <ChevronDown size={13} style={{
                                        transition: 'transform 0.2s',
                                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)'
                                    }} />
                                </button>

                                {dropdownOpen && (
                                    <div style={{
                                        position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                                        minWidth: '240px', background: 'var(--card-bg)',
                                        border: '1px solid var(--border-color)', borderRadius: '16px',
                                        boxShadow: '0 12px 32px rgba(0,0,0,0.15)', padding: '8px',
                                        animation: 'dropdownIn 0.2s ease', zIndex: 200
                                    }}>
                                        <div style={{
                                            padding: '12px 16px', borderBottom: '1px solid var(--border-color)',
                                            marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '12px'
                                        }}>
                                            {user.photoURL ? (
                                                <img src={user.photoURL} alt={displayName} style={{
                                                    width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover'
                                                }} />
                                            ) : (
                                                <div style={{
                                                    width: '36px', height: '36px', borderRadius: '50%',
                                                    background: 'var(--primary-color)', color: 'white',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    fontSize: '1rem', fontWeight: 700
                                                }}>{initial}</div>
                                            )}
                                            <div>
                                                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>{displayName}</div>
                                                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '1px' }}>{user.email}</div>
                                            </div>
                                        </div>

                                        <Link to="/profile" onClick={() => setDropdownOpen(false)} className="dropdown-item" style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            padding: '10px 16px', fontSize: '0.9rem', color: 'var(--text-main)',
                                            borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s'
                                        }}>
                                            <User size={16} /> {t('nav.profile')}
                                        </Link>

                                        {user.isAdmin && (
                                            <Link to="/admin" onClick={() => setDropdownOpen(false)} className="dropdown-item" style={{
                                                display: 'flex', alignItems: 'center', gap: '10px',
                                                padding: '10px 16px', fontSize: '0.9rem', color: 'var(--primary-color)',
                                                borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s',
                                                fontWeight: 700
                                            }}>
                                                <ShieldCheck size={16} /> {t('nav.admin')}
                                            </Link>
                                        )}

                                        <Link to="/history" onClick={() => setDropdownOpen(false)} className="dropdown-item" style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            padding: '10px 16px', fontSize: '0.9rem', color: 'var(--text-main)',
                                            borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s'
                                        }}>
                                            <History size={16} /> {t('nav.history')}
                                        </Link>

                                        <button onClick={handleLogout} className="dropdown-item" style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            padding: '10px 16px', fontSize: '0.9rem', color: '#ef4444',
                                            borderRadius: '10px', background: 'none', border: 'none',
                                            cursor: 'pointer', width: '100%', textAlign: 'left', transition: 'background 0.15s'
                                        }}>
                                            <LogOut size={16} /> {t('nav.signout')}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/login" className="nav-signin-btn hide-on-mobile" style={{
                                display: 'flex', alignItems: 'center', gap: '6px',
                                background: 'var(--primary-color)', color: 'white',
                                border: 'none', borderRadius: '50px',
                                padding: '8px 16px', fontSize: '0.82rem', fontWeight: 600,
                                textDecoration: 'none', transition: 'all 0.2s ease',
                                boxShadow: '0 2px 8px rgba(56, 102, 104, 0.25)'
                            }}>
                                <LogIn size={15} />
                                <span className="nav-hide-xs">{t('nav.signin')}</span>
                            </Link>
                        )}

                        {/* Hamburger menu button — mobile only */}
                        <button
                            className="nav-hamburger"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{
                                display: 'none', background: 'none', border: 'none',
                                cursor: 'pointer', color: 'var(--text-main)', padding: '6px',
                                marginLeft: '4px'
                            }}
                        >
                            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile slide-down menu */}
            <div
                className="nav-mobile-menu"
                style={{
                    position: 'sticky',
                    top: 'var(--nav-height)',
                    zIndex: 99,
                    background: 'var(--card-bg)',
                    borderBottom: mobileMenuOpen ? '1px solid var(--border-color)' : 'none',
                    maxHeight: mobileMenuOpen ? 'calc(100vh - var(--nav-height))' : '0',
                    overflowY: mobileMenuOpen ? 'auto' : 'hidden',
                    transition: 'max-height 0.3s ease, padding 0.3s ease',
                    padding: mobileMenuOpen ? '12px 20px 32px' : '0 20px',
                    boxShadow: mobileMenuOpen ? '0 8px 24px rgba(0,0,0,0.1)' : 'none',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                {navLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            display: 'block',
                            padding: '12px 0',
                            fontSize: '1rem',
                            fontWeight: location.pathname === link.to ? 700 : 500,
                            color: location.pathname === link.to ? 'var(--primary-color)' : 'var(--text-main)',
                            borderBottom: '1px solid var(--border-color)',
                            textDecoration: 'none'
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                {user && (
                    <>
                        <Link
                            to="/profile"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                padding: '12px 0', fontSize: '1rem', fontWeight: 500,
                                color: 'var(--text-main)', textDecoration: 'none',
                                borderBottom: '1px solid var(--border-color)'
                            }}
                        >
                            <User size={16} /> {t('nav.profile')}
                        </Link>
                        <Link
                        to="/history"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            padding: '12px 0', fontSize: '1rem', fontWeight: 500,
                            color: 'var(--text-main)', textDecoration: 'none'
                        }}
                    >
                        <History size={16} /> {t('nav.history')}
                    </Link>
                    </>
                )}
                
                {/* Mobile-only language and auth items */}
                <div className="show-on-mobile" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Language Selection
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                        {[
                            { code: 'en', label: 'English' },
                            { code: 'pidgin', label: 'Pidgin' },
                            { code: 'yo', label: 'Yoruba' },
                            { code: 'ig', label: 'Igbo' },
                            { code: 'ha', label: 'Hausa' }
                        ].map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code as any)}
                                style={{
                                    padding: '6px 12px', borderRadius: '20px', border: '1px solid var(--border-color)',
                                    background: language === lang.code ? 'var(--primary-color)' : 'var(--secondary-bg)',
                                    color: language === lang.code ? 'white' : 'var(--text-main)',
                                    fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
                                }}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                    
                    {!user && (
                        <Link
                            to="/login"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                padding: '12px 16px', fontSize: '1rem', fontWeight: 600,
                                color: 'white', textDecoration: 'none',
                                background: 'var(--primary-color)', borderRadius: '12px', justifyContent: 'center'
                            }}
                        >
                            <LogIn size={18} /> {t('nav.signin')}
                        </Link>
                    )}
                    
                    {user && (
                        <button
                            onClick={handleLogout}
                            style={{
                                width: '100%', display: 'flex', alignItems: 'center', gap: '8px',
                                padding: '12px 16px', fontSize: '1rem', fontWeight: 600,
                                color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)',
                                border: 'none', borderRadius: '12px', cursor: 'pointer', justifyContent: 'center'
                            }}
                        >
                            <LogOut size={18} /> {t('nav.signout')}
                        </button>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes dropdownIn {
                    from { opacity: 0; transform: translateY(-8px) scale(0.96); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .dropdown-item:hover { background: var(--bg-main) !important; }
                .user-avatar-btn:hover { opacity: 0.9; transform: scale(1.02); }
                .nav-signin-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(56, 102, 104, 0.35) !important;
                }
                .nav-hamburger { display: none !important; }
                .nav-mobile-menu { display: none; }

                /* Tablet breakpoint */
                @media (max-width: 991px) {
                    .nav-desktop-links { display: none !important; }
                    .nav-hamburger { display: flex !important; }
                    .nav-mobile-menu { display: block !important; }
                    .nav-hide-mobile { display: none !important; }
                }

                /* Mobile breakpoint */
                @media (max-width: 991px) {
                    .hide-on-mobile { display: none !important; }
                    .show-on-mobile { display: block !important; }
                }
                
                @media (min-width: 992px) {
                    .show-on-mobile { display: none !important; }
                }

                /* Small phone breakpoint */
                @media (max-width: 420px) {
                    .nav-hide-xs { display: none !important; }
                }
            `}</style>
        </>
    );
};

export default NavBar;
