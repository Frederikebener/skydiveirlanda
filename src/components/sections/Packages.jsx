import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import sky360Img from '../../assets/360.jpeg';
import classicImg from '../../assets/package-record.jpg';
import eliteImg from '../../assets/BIRR DUPLO3 - 1024 x 768.png';
import recordImg from '../../assets/BIRR DUO9- 1920X1080.png';

export const Packages = () => {
    const { t } = useLanguage();
    const cards = t('packages.cards');
    const englishCards = t('packages.cards', 'en');
    const items = Array.isArray(cards) ? cards : [];
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (titleRef.current) {
                            titleRef.current.classList.add('animate');
                        }
                        if (subtitleRef.current) {
                            subtitleRef.current.classList.add('animate');
                        }
                        // Animate cards
                        cardRefs.current.forEach((card) => {
                            if (card) {
                                card.classList.add('animate');
                            }
                        });
                    }
                });
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="packages-section section-padding-lg" id="packages">
            <div className="packages-container">
                <div className="packages-header">
                    <h2 ref={titleRef} className="packages-title" dangerouslySetInnerHTML={{ __html: t('packages.title') }} />
                    <p ref={subtitleRef} className="packages-subtitle" dangerouslySetInnerHTML={{ __html: t('packages.subtitle') }}></p>
                </div>

                <div className="packages-grid" id="packages-grid">
                    {items.map((card, index) => (
                        <div
                            key={index}
                            id={`package-${index}`}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="package-card"
                        >
                            <div className="package-image-wrapper">
                                <img
                                    src={
                                        index === 0 ? sky360Img :
                                            index === 1 ? recordImg :
                                                index === 2 ? eliteImg :
                                                    classicImg
                                    }
                                    alt={card.title}
                                    className="package-image"
                                    loading="lazy"
                                />
                                {card.badge && (
                                    <div className="package-badge-custom">
                                        <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                        <span className="badge-text">{card.badge}</span>
                                    </div>
                                )}
                                {index === 3 && (
                                    <div className="package-no-media-overlay">
                                        <div className="no-media-circle">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                                                <circle cx="12" cy="13" r="3" />
                                                <line x1="2" y1="2" x2="22" y2="22" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="package-content">
                                <h3 className="package-title">{card.title}</h3>
                                <ul className="package-features">
                                    {card.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span className="feature-dot"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="package-description">{card.description}</p>

                                <div className="package-card-footer">
                                    <a
                                        id={index === 0 ? 'wa-btn-package-premium' : index === 1 ? 'wa-btn-package-vip' : index === 2 ? 'wa-btn-package-plus' : 'wa-btn-package-basic'}
                                        href={`https://wa.me/353894098150?text=${encodeURIComponent(
                                            (Array.isArray(englishCards) && englishCards[index]?.wa_message) ||
                                            card.wa_message ||
                                            t('packages.cta_wa_message', 'en') ||
                                            'Hi! I would like to book a tandem jump.'
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="package-cta"
                                        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        {card.cta}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
