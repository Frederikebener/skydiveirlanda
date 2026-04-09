import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Phone, Instagram, Facebook, Clock, Mail, Building2, Hash } from 'lucide-react';
import { config } from '../../data/config';
import logo from '../../assets/skydive-ireland-icon.webp';
import cbpLogo from '../../assets/skydive-ireland-19.webp';
import iadzLogo from '../../assets/skydive-thru-ireland-logo.webp';

const Footer = () => {
    const { t } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    const packageCards = t('packages.cards') || [];

    const handleNavClick = (e, anchor) => {
        e.preventDefault();
        if (location.pathname === '/') {
            if (anchor === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.querySelector(anchor);
                if (element) {
                    const isPackage = anchor.includes('package-');
                    const isMobile = window.innerWidth <= 720;
                    const headerOffset = isPackage ? (isMobile ? 165 : 15) : 150;

                    const rect = element.getBoundingClientRect();
                    const elementPosition = rect.top
                    const offsetPosition = elementPosition
                    window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
                }
            }
        } else {
            if (anchor === '#') {
                navigate('/');
            } else {
                navigate('/' + anchor);
            }
        }
    };

    // Social links
    const LINKS = {
        instagram: "https://www.instagram.com/skydivethru.ie/",
        facebook: "https://www.facebook.com/skydivethru.ie",
        tiktok: "https://www.tiktok.com/@skydivethru.ie",
        youtube: "https://www.youtube.com/@skydivethruie",
    };

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-column brand-column">
                        <div className="footer-logo-wrapper">
                            <img src={logo} alt="SkyDiveThru" className="footer-logo-img" loading="lazy" />
                        </div>
                        <p className="footer-description">
                            {t('footer.description')}
                        </p>
                        <div className="footer-socials">
                            {LINKS.instagram && (
                                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="social-link group">
                                    <Instagram size={20} className="transition-colors" />
                                </a>
                            )}
                            {LINKS.facebook && (
                                <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="social-link group">
                                    <Facebook size={20} className="transition-colors" />
                                </a>
                            )}
                            {LINKS.tiktok && (
                                <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="social-link group">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                                    </svg>
                                </a>
                            )}
                            {LINKS.youtube && (
                                <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="social-link group">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.81zM9.75 15.52V8.48L15.75 12l-6 3.52z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                        <div className="footer-seals">
                            <img src={cbpLogo} alt="CBP" className="footer-seal-img" loading="lazy" />
                            <img src={iadzLogo} alt="IADZ" className="footer-seal-img" loading="lazy" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="footer-column nav-column">
                        <h3 className="footer-heading">{t('footer.navigation')}</h3>
                        <ul className="footer-links">
                            <li><a href="/#" className="footer-link" onClick={(e) => handleNavClick(e, '#')}><span className="link-dot"></span>{t('footer.home')}</a></li>
                            <li><a href="#about" className="footer-link" onClick={(e) => handleNavClick(e, '#about')}><span className="link-dot"></span>{t('footer.about')}</a></li>
                            <li><a href="#experience" className="footer-link" onClick={(e) => handleNavClick(e, '#experience')}><span className="link-dot"></span>{t('footer.experience')}</a></li>
                            <li><a href="#faq" className="footer-link" onClick={(e) => handleNavClick(e, '#faq')}><span className="link-dot"></span>{t('footer.faq')}</a></li>
                            <li><a href="#contact" className="footer-link" onClick={(e) => handleNavClick(e, '#contact')}><span className="link-dot"></span>{t('footer.contact')}</a></li>
                        </ul>
                    </div>

                    {/* Packages */}
                    <div className="footer-column resources-column">
                        <h3 className="footer-heading">{t('footer.packagesTitle')}</h3>
                        <ul className="footer-links">
                            {(t('packages.nav_titles') || []).map((navTitle, index) => (
                                <li key={index}>
                                    <a href={`#package-${index}`} className="footer-link" onClick={(e) => handleNavClick(e, `#package-${index}`)}>
                                        <span className="link-dot"></span>
                                        {navTitle}
                                    </a>
                                </li>
                            ))}
                            <li><Link to="/course?type=aff#cp-pricing" className="footer-link"><span className="link-dot"></span>{t('menu.course_aff')}</Link></li>
                            <li><Link to="/course?type=asl#cp-pricing" className="footer-link"><span className="link-dot"></span>{t('menu.course_asl')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column contact-column">
                        <h3 className="footer-heading">CONTACT</h3>
                        <ul className="footer-contact-list">
                            <li className="footer-contact-item">
                                <Building2 className="footer-contact-icon" />
                                <span>{t('contact.legal_name.value')}</span>
                            </li>
                            <li className="footer-contact-item">
                                <MapPin className="footer-contact-icon" />
                                <a
                                    href="https://share.google/RAJgk83OpbYMH9uvG"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-contact-link"
                                >
                                    {t('contact.address.value')}
                                </a>
                            </li>
                            <li className="footer-contact-item">
                                <Phone className="footer-contact-icon" />
                                <a href={`tel:${t('contact.phone.value')}`} className="footer-contact-link">{t('contact.phone.value')}</a>
                            </li>
                            <li className="footer-contact-item">
                                <Mail className="footer-contact-icon" />
                                <a href={`mailto:${t('contact.email.value')}`} className="footer-contact-link">{t('contact.email.value')}</a>
                            </li>
                            <li className="footer-contact-item">
                                <Clock className="footer-contact-icon" />
                                <span>{t('contact.hours.value')}</span>
                            </li>
                            {config.showRegistrationNumber && (
                                <li className="footer-contact-item">
                                    <Hash className="footer-contact-icon" />
                                    <span>{t('contact.reg.title')}: {t('contact.reg.value')}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} SkyDiveThru. {t('footer.rights')}</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy" className="footer-bottom-link">{t('footer.legal') || 'Privacy Policy'}</Link>
                        <span className="footer-divider">|</span>
                        <Link to="/cookie-policy" className="footer-bottom-link">Cookie Policy</Link>
                        <span className="footer-divider">|</span>
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))}
                            className="footer-bottom-link-btn"
                        >
                            Manage Cookies
                        </button>
                        <span className="footer-divider">|</span>
                        <a 
                            href="https://webmail.skydivethru.ie" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer-bottom-link"
                        >
                            Webmail
                        </a>
                    </div>
                    <p>
                        <a href="https://15dmarketingdigital.com.br/" target="_blank" rel="noopener noreferrer" className="footer-developed-link">
                            {t('footer.developed')}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
