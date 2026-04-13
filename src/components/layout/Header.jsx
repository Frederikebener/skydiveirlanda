import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assets/skydive-ireland-icon.webp';
import flagDe from '../../assets/flag-de.svg';
import flagEn from '../../assets/flag-english.webp';
import flagEs from '../../assets/flag-spanish.webp';
import flagFr from '../../assets/flag-french.webp';
import flagGa from '../../assets/flag-irish.webp';
import flagIt from '../../assets/flag-it.svg';
import flagPt from '../../assets/flag-portuguese.webp';

const Header = ({ isHidden }) => {
    const { t, language, setLanguage } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPackagesOpen, setIsPackagesOpen] = useState(false);
    const [isCourseOpen, setIsCourseOpen] = useState(false);
    const [isAthletesPopupOpen, setIsAthletesPopupOpen] = useState(false);

    const languages = [
        { code: 'ga', name: 'Gaeilge', flag: flagGa },
        { code: 'pt', name: 'Português', flag: flagPt },
        { code: 'en', name: 'English', flag: flagEn },
        { code: 'de', name: 'Deutsch', flag: flagDe },
        { code: 'es', name: 'Español', flag: flagEs },
        { code: 'fr', name: 'Français', flag: flagFr },
        { code: 'it', name: 'Italiano', flag: flagIt }
    ];

    const currentLang = languages.find(l => l.code === language) || languages[0];

    useEffect(() => {
        if (isMobileMenuOpen || isAthletesPopupOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isMobileMenuOpen, isAthletesPopupOpen]);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleNavClick = (e, anchor) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (location.pathname === '/') {
            const element = document.querySelector(anchor);
            if (element) {
                const isMobile = window.innerWidth <= 720;
                const headerOffset = isMobile ? 100 : 80;
                const rect = element.getBoundingClientRect();
                const elementPosition = rect.top
                const offsetPosition = elementPosition - headerOffset

                window.scrollBy({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } else {
            navigate('/' + anchor);
        }
    };

    // Dedicated scroll for packages submenu — lands right at the cards, no title showing
    const handlePackageClick = (e, index) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        setIsPackagesOpen(false);

        if (location.pathname === '/') {
            const element = document.querySelector(`#package-${index}`);
            if (element) {
                // Mobile has countdown bar (60px) + header (60px), desktop just needs minimal offset
                const isMobile = window.innerWidth <= 720;
                const headerOffset = isMobile ? 165 : 25;
                const rect = element.getBoundingClientRect();
                const elementPosition = rect.top
                const offsetPosition = elementPosition - headerOffset
                window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
            }
        } else {
            navigate('/#package-' + index);
        }
    };

    const handleCourseClick = (e, type) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        setIsCourseOpen(false);

        if (location.pathname === '/' || location.pathname === '/course') {
            const anchor = location.pathname === '/' ? '#coursejourney' : '#cp-pricing';
            const element = document.querySelector(anchor);
            if (element) {
                const isMobile = window.innerWidth <= 720;
                const headerOffset = isMobile ? 165 : 25;
                const rect = element.getBoundingClientRect();
                const elementPosition = rect.top;
                window.scrollBy({ top: elementPosition - headerOffset, behavior: 'smooth' });

                // Navigate with query param to trigger tab switch
                navigate(`${location.pathname}?type=${type}`, { replace: true });
            }
        } else {
            navigate(`/course?type=${type}`);
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''} ${isHidden ? 'header-hidden' : ''}`}>
            {/* Mobile Navigation Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
                <nav className="mobile-nav">
                    <a href="/" onClick={handleLogoClick}>{t('footer.home')}</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>{t('footer.about')}</a>

                    {/* Mobile Packages Accordion */}
                    <div className="mobile-packages-menu">
                        <div className="mobile-packages-toggle">
                            <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')}>
                                {t('footer.packages')}
                            </a>
                            <button
                                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px' }}
                                onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                            >
                                <svg
                                    className={`mobile-chevron ${isPackagesOpen ? 'open' : ''}`}
                                    width="16" height="16" viewBox="0 0 10 10"
                                    fill="none" stroke="currentColor" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M1 3 L5 7 L9 3" />
                                </svg>
                            </button>
                        </div>
                        <div className={`mobile-packages-list ${isPackagesOpen ? 'open' : ''}`}>
                            {(t('packages.nav_titles') || []).map((navTitle, index) => (
                                <a
                                    key={index}
                                    href={`#package-${index}`}
                                    className="mobile-package-item"
                                    onClick={(e) => handlePackageClick(e, index)}
                                >
                                    {navTitle}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mobile-packages-menu">
                        <div className="mobile-packages-toggle">
                            <Link to="/course" onClick={() => setIsMobileMenuOpen(false)}>
                                {t('footer.course')}
                            </Link>
                            <button
                                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px' }}
                                onClick={() => setIsCourseOpen(!isCourseOpen)}
                            >
                                <svg
                                    className={`mobile-chevron ${isCourseOpen ? 'open' : ''}`}
                                    width="16" height="16" viewBox="0 0 10 10"
                                    fill="none" stroke="currentColor" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M1 3 L5 7 L9 3" />
                                </svg>
                            </button>
                        </div>
                        <div className={`mobile-packages-list ${isCourseOpen ? 'open' : ''}`}>
                            <a
                                href="/course?type=aff"
                                className="mobile-package-item"
                                onClick={(e) => handleCourseClick(e, 'aff')}
                            >
                                {t('menu.course_aff')}
                            </a>
                            <a
                                href="/course?type=asl"
                                className="mobile-package-item"
                                onClick={(e) => handleCourseClick(e, 'asl')}
                            >
                                {t('menu.course_asl')}
                            </a>
                        </div>
                    </div>
                    
                    <a href="#athletes" onClick={(e) => { e.preventDefault(); setIsAthletesPopupOpen(true); setIsMobileMenuOpen(false); }}>
                        {t('header.athletes') || 'Fun Jumpers'}
                    </a>
                </nav>
            </div>

            {/* Background Shield */}
            <div className={`header-background ${isScrolled || isMobileMenuOpen ? 'visible' : ''}`}></div>

            <div className="header-container">
                <div className="header-logo">
                    <a href="/" onClick={handleLogoClick}>
                        <img src={logo} alt="SkyDiveThru" />
                    </a>
                </div>

                <nav className="header-nav">
                    <ul>
                        <li><a href="/" onClick={handleLogoClick}>{t('footer.home')}</a></li>
                        <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>{t('footer.about')}</a></li>
                        <li className="has-dropdown">
                            <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')}>
                                {t('footer.packages')}
                                <svg className="dropdown-chevron" width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                                    <path d="M1 3 L5 7 L9 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <div className="nav-dropdown-bridge" />
                            <ul className="nav-dropdown">
                                {(t('packages.nav_titles') || []).map((navTitle, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#package-${index}`}
                                            onClick={(e) => handlePackageClick(e, index)}
                                        >
                                            {navTitle}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link to="/course">
                                {t('footer.course')}
                                <svg className="dropdown-chevron" width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                                    <path d="M1 3 L5 7 L9 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <div className="nav-dropdown-bridge" />
                            <ul className="nav-dropdown">
                                <li>
                                    <Link to="/course?type=aff" onClick={(e) => handleCourseClick(e, 'aff')}>
                                        {t('menu.course_aff')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course?type=asl" onClick={(e) => handleCourseClick(e, 'asl')}>
                                        {t('menu.course_asl')}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#athletes" onClick={(e) => { e.preventDefault(); setIsAthletesPopupOpen(true); setIsMobileMenuOpen(false); }}>
                                {t('header.athletes') || 'Fun Jumpers'}
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className="lang-selector" onClick={() => setIsLangOpen(!isLangOpen)}>
                        <div className="current-lang">
                            <img src={currentLang.flag} alt={currentLang.name} className="lang-flag" />
                            <span className="lang-code">{currentLang.code.toUpperCase()}</span>
                            <span className="dropdown-arrow">▼</span>
                        </div>
                        {isLangOpen && (
                            <ul className="lang-dropdown">
                                {languages.map((lang) => (
                                    <li key={lang.code} onClick={() => setLanguage(lang.code)}>
                                        <img src={lang.flag} alt={lang.name} className="lang-flag-sm" />
                                        <span>{lang.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="mobile-menu-button"
                    aria-label="Menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>

            {/* Athletes Pop-up */}
            {isAthletesPopupOpen && (
                <div className="athletes-modal-overlay" onClick={() => setIsAthletesPopupOpen(false)}>
                    <div className="athletes-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="athletes-modal-close" onClick={() => setIsAthletesPopupOpen(false)} aria-label="Close modal">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <h3 className="athletes-modal-title">{t('header.athletes') || 'Fun Jumpers'}</h3>
                        <p className="athletes-modal-text">
                            {t('athletes.message') || 'Todos os Fun Jumpers são bem-vindos! A página dedicada estará disponível em breve.'}
                        </p>
                        <button className="btn btn-primary" onClick={() => setIsAthletesPopupOpen(false)}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
