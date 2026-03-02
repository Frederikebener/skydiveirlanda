import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import sky360Img from '../../assets/package-sky360.jpg';
import classicImg from '../../assets/BIRR DUPLO3 - 1024 x 768.png';
import eliteImg from '../../assets/package-record.jpg';
import recordImg from '../../assets/BIRR DUO9- 1920X1080.png';

export const Packages = () => {
    const { t } = useLanguage();
    const cards = t('packages.cards');
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
                                            index === 1 ? classicImg :
                                                index === 2 ? eliteImg :
                                                    recordImg
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
                                    <div className="package-pricing">
                                        <span className="price-label">{card.price_label}</span>
                                        <span className="price-value">{card.price}</span>
                                        <span className="payment-info">{card.payment}</span>
                                    </div>

                                    <button className="package-cta">
                                        {card.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
