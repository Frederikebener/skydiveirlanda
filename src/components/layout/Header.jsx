import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assets/logo1.webp';
import flagDe from '../../assets/flag-de.svg';
import flagEn from '../../assets/flag-en.png';
import flagEs from '../../assets/flag-es.png';
import flagFr from '../../assets/flag-fr.png';
import flagGa from '../../assets/flag-ga.png';
import flagIt from '../../assets/flag-it.svg';
import flagPt from '../../assets/flag-pt.png';

const Header = ({ isHidden }) => {
    const { t, language, setLanguage } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPackagesOpen, setIsPackagesOpen] = useState(false);

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
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleNavClick = (e, anchor) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (location.pathname === '/') {
            const element = document.querySelector(anchor);
            if (element) {
                const headerOffset = 150; // Increased offset for better spacing
                const rect = element.getBoundingClientRect();
                const elementPosition = rect.top 
                const offsetPosition = elementPosition

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
                const headerOffset = isMobile ? 165 : 15;
                const rect = element.getBoundingClientRect();
                const elementPosition = rect.top
                const offsetPosition = elementPosition
                window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
            }
        } else {
            navigate('/#package-' + index);
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
                    <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>{t('footer.experience')}</a>
                    <a href="#video" onClick={(e) => handleNavClick(e, '#video')}>{t('footer.video')}</a>

                    {/* Mobile Packages Accordion */}
                    <div className="mobile-packages-menu">
                        <button
                            className="mobile-packages-toggle"
                            onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                        >
                            {t('footer.packages')}
                            <svg
                                className={`mobile-chevron ${isPackagesOpen ? 'open' : ''}`}
                                width="16" height="16" viewBox="0 0 10 10"
                                fill="none" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round"
                            >
                                <path d="M1 3 L5 7 L9 3" />
                            </svg>
                        </button>
                        <div className={`mobile-packages-list ${isPackagesOpen ? 'open' : ''}`}>
                            {(t('packages.cards') || []).map((card, index) => (
                                <a
                                    key={index}
                                    href={`#package-${index}`}
                                    className="mobile-package-item"
                                    onClick={(e) => handlePackageClick(e, index)}
                                >
                                    {card.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    <Link to="/course" onClick={() => setIsMobileMenuOpen(false)}>{t('footer.course')}</Link>

                    <a href="#contact" className="btn btn-primary mobile-cta" onClick={(e) => handleNavClick(e, '#contact')}>
                        {t('footer.contact')}
                    </a>
                </nav>
            </div>

            {/* Background Shield */}
            <div className={`header-background ${isScrolled || isMobileMenuOpen ? 'visible' : ''}`}></div>

            <div className="container header-container">
                <div className="header-logo">
                    <a href="/" onClick={handleLogoClick}>
                        <img src={logo} alt="SkyDiveThru" />
                    </a>
                </div>

                <nav className="header-nav">
                    <ul>
                        <li><a href="/" onClick={handleLogoClick}>{t('footer.home')}</a></li>
                        <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>{t('footer.about')}</a></li>
                        <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>{t('footer.experience')}</a></li>
                        <li><a href="#video" onClick={(e) => handleNavClick(e, '#video')}>{t('footer.video')}</a></li>
                        <li className="has-dropdown">
                            <a href="#package-0" onClick={(e) => handlePackageClick(e, 0)}>
                                {t('footer.packages')}
                                <svg className="dropdown-chevron" width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                                    <path d="M1 3 L5 7 L9 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            {/* Invisible bridge prevents dropdown from closing when moving mouse */}
                            <div className="nav-dropdown-bridge" />
                            <ul className="nav-dropdown">
                                {(t('packages.cards') || []).map((card, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#package-${index}`}
                                            onClick={(e) => handlePackageClick(e, index)}
                                        >
                                            {card.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li><Link to="/course">{t('footer.course')}</Link></li>
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

                    {isScrolled && (
                        <a href="#packages" className="btn btn-primary header-cta" onClick={(e) => handleNavClick(e, '#packages')}>
                            {t('footer.contact')}
                        </a>
                    )}
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
        </header>
    );
};

export default Header;

