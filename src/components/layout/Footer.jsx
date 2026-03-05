import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Phone, Instagram, Facebook, Clock } from 'lucide-react';
import logo from '../../assets/logo1.webp';

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

    // Social links placeholder
    const LINKS = {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
    };

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-column brand-column">
                        <div className="footer-logo-wrapper">
                            <img src={logo} alt="SkyDiveThru" className="footer-logo-img" />
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
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="footer-column nav-column">
                        <h3 className="footer-heading">{t('footer.navigation')}</h3>
                        <ul className="footer-links">
                            <li><a href="/#" className="footer-link" onClick={(e) => handleNavClick(e, '#')}><span className="link-dot"></span>{t('footer.home')}</a></li>
                            <li><a href="#about" className="footer-link" onClick={(e) => handleNavClick(e, '#about')}><span className="link-dot"></span>{t('footer.about')}</a></li>
                            <li><a href="#experience" className="footer-link" onClick={(e) => handleNavClick(e, '#experience')}><span className="link-dot"></span>{t('footer.experience')}</a></li>
                            <li><a href="#video" className="footer-link" onClick={(e) => handleNavClick(e, '#video')}><span className="link-dot"></span>{t('footer.video')}</a></li>
                            <li><a href="#packages" className="footer-link" onClick={(e) => handleNavClick(e, '#packages')}><span className="link-dot"></span>{t('footer.packages')}</a></li>
                            <li><Link to="/course" className="footer-link"><span className="link-dot"></span>{t('footer.course')}</Link></li>
                            <li><a href="#faq" className="footer-link" onClick={(e) => handleNavClick(e, '#faq')}><span className="link-dot"></span>{t('footer.faq')}</a></li>
                            <li><a href="#contact" className="footer-link" onClick={(e) => handleNavClick(e, '#contact')}><span className="link-dot"></span>{t('footer.contact')}</a></li>
                        </ul>
                    </div>

                    {/* Packages */}
                    <div className="footer-column resources-column">
                        <h3 className="footer-heading">{t('footer.packagesTitle')}</h3>
                        <ul className="footer-links">
                            {packageCards.map((card, index) => (
                                <li key={index}>
                                    <a href={`#package-${index}`} className="footer-link" onClick={(e) => handleNavClick(e, `#package-${index}`)}>
                                        <span className="link-dot"></span>
                                        {card.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column contact-column">
                        <h3 className="footer-heading">CONTACT</h3>
                        <ul className="footer-contact-list">
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
                                <Clock className="footer-contact-icon" />
                                <span>{t('contact.hours.value')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} SkyDiveThru. {t('footer.rights')}</p>
                    <p>{t('footer.developed')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
