import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { config } from '../../data/config';

// Computes the !1d scale value in the Google Maps pb= URL from a zoom level.
// Calibrated from two known reference points: zoom 7 ≈ all of Ireland, zoom 15 ≈ street level.
const getMapScale = (zoom) => {
    const refScale = 2396.871072838082; // known scale at zoom 15
    const refZoom = 15;
    return refScale * Math.pow(2, (refZoom - zoom) * 1.25);
};

const WhatsAppIcon = ({ className, size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        stroke="currentColor"
        className={className}
    >
        <g strokeWidth="0"></g>
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g>
            <title>whatsapp</title>
            <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
        </g>
    </svg>
);

const Contact = () => {
    const { t, language } = useLanguage();

    // Maps app language code → Google Maps locale (lang, country)
    const mapsLocale = {
        en: { lang: 'en', country: 'ie' },
        pt: { lang: 'pt-BR', country: 'br' },
        es: { lang: 'es', country: 'es' },
        fr: { lang: 'fr', country: 'fr' },
        de: { lang: 'de', country: 'de' },
        it: { lang: 'it', country: 'it' },
        ga: { lang: 'ga', country: 'ie' },
    };
    const locale = mapsLocale[language] || mapsLocale.en;

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/353894098150', '_blank');
    };

    const handleMapClick = () => {
        window.open('https://share.google/RAJgk83OpbYMH9uvG', '_blank');
    }

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-card">
                    {/* Info Side */}
                    <div className="contact-info">
                        <div className="contact-content">
                            <span className="contact-badge">
                                {t('contact.badge')}
                            </span>
                            <h2
                                className="contact-title"
                                dangerouslySetInnerHTML={{ __html: t('contact.title') }}
                            />

                            <div className="contact-items">
                                {[
                                    { icon: <MapPin size={22} />, title: t('contact.address.title'), val: t('contact.address.value'), link: 'https://share.google/RAJgk83OpbYMH9uvG' },
                                    { icon: <Phone size={22} />, title: t('contact.phone.title'), val: t('contact.phone.value'), link: 'tel:+353894098150' },
                                    { icon: <Clock size={22} />, title: t('contact.hours.title'), val: t('contact.hours.value') }
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="contact-item"
                                        onClick={item.link ? () => window.open(item.link, '_blank') : undefined}
                                        style={item.link ? { cursor: 'pointer' } : undefined}
                                    >
                                        <div className="icon-wrapper">
                                            {item.icon}
                                        </div>
                                        <div className="contact-item-text">
                                            <h3>{item.title}</h3>
                                            <p>{item.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                id="wa-btn-contact-main"
                                href={`https://wa.me/353894098150?text=${encodeURIComponent(t('contact.wa_message', 'en') || 'Hi! I have some questions.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-cta"
                                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                {t('contact.cta')}
                            </a>
                        </div>

                        {/* Decorative Circle */}
                        <div className="contact-decor"></div>
                    </div>

                    {/* Map Side */}
                    <div className="contact-map" onClick={handleMapClick}>
                        <div className="map-overlay">
                            <button className="map-overlay-btn">
                                <ExternalLink size={18} />
                                <span>{t('contact.map_button')}</span>
                            </button>
                        </div>
                        <iframe
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${getMapScale(config.map.zoom)}!2d-7.904503899999998!3d53.076589299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485cf7a5b75e3215%3A0x945144a6057d3a94!2sSkyDive%20Thru%20Ireland!5e0!3m2!1s${locale.lang}!2s${locale.country}!4v1772246121635!5m2!1s${locale.lang}!2s${locale.country}`}
                            style={{ border: 0 }}
                            width="600"
                            height="450"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SkyDive Thru Ireland - Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
