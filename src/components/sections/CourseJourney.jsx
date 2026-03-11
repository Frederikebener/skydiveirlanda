import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import img7 from '../../assets/Static-Line.jpg';
import img8 from '../../assets/BIRR TRIO- 1920X1080.png';

import '../../style-coursejourney.css';

export const CourseJourney = () => {
    const { t } = useLanguage();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('AFF'); // 'AFF' or 'ASL'

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const type = params.get('type');
        if (type === 'asl') {
            setActiveTab('ASL');
        } else if (type === 'aff') {
            setActiveTab('AFF');
        }
    }, [location.search]);

    return (
        <section className="cj-section" id="coursejourney">
            <div className="cj-container">
                <div className="cj-header">
                    <h2 dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.title') }} />
                </div>

                <div className="cj-tabs-container">
                    <button
                        className={`cj-tab-btn ${activeTab === 'AFF' ? 'active' : ''}`}
                        onClick={() => setActiveTab('AFF')}
                    >
                        {t('menu.course_aff')}
                    </button>
                    <span className="cj-tabs-or">{t('coursepage.pricing.or')}</span>
                    <button
                        className={`cj-tab-btn ${activeTab === 'ASL' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ASL')}
                    >
                        {t('menu.course_asl')}
                    </button>
                </div>

                <div className="cj-cards-wrapper">
                    {activeTab === 'AFF' ? (
                        /* CARD 1 -> AFF */
                        <div className="cj-card animate-fade-in">
                            <div className="cj-card-top">
                                <div className="cj-card-image">
                                    <img src={img8} alt="AFF Complete" />
                                </div>
                                <div className="cj-card-content">
                                    <h3 dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.card2.title') }} />
                                    <p className="cj-card-subtitle" dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.card2.subtitle') }} />

                                    <div className="cj-pricing-table">
                                        <div className="cj-pricing-col cj-pricing-complete">
                                            <div className="cj-pricing-col-header">
                                                <div className="cj-pricing-title-row">
                                                    <h4>{t('pricing.complete.title')}</h4>
                                                    <div className="cj-price-container">
                                                        <span className="cj-price-label">{t('pricing.complete.label')}</span>
                                                        <span className="cj-price-value">€1.577,00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="cj-pricing-items">
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.aff.2')}</li>
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.aff.3')}</li>
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.aff.5')}</li>
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.aff.7')}</li>
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.aff.8')}</li>
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.aff.9')}</li>
                                            </ul>
                                        </div>
                                        <div className="cj-pricing-col cj-pricing-modular">
                                            <div className="cj-pricing-col-header">
                                                <div className="cj-pricing-title-row">
                                                    <h4>{t('pricing.modular.title')}</h4>
                                                    <div className="cj-price-container">
                                                        <span className="cj-price-label">{t('pricing.modular.label.total')}</span>
                                                        <span className="cj-price-value">€1.719,00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="cj-pricing-levels">
                                                <li><span>{t('pricing.aff.level1')}</span><strong>€497</strong></li>
                                                <li><span>{t('pricing.level')} 2</span><strong>€257</strong></li>
                                                <li><span>{t('pricing.level')} 3</span><strong>€257</strong></li>
                                                <li><span>{t('pricing.level')} 4</span><strong>€177</strong></li>
                                                <li><span>{t('pricing.level')} 5</span><strong>€177</strong></li>
                                                <li><span>{t('pricing.level')} 6</span><strong>€177</strong></li>
                                                <li className="cj-last-level"><span>{t('pricing.level')} 7</span><strong>€177</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="cj-card-cta-only">
                                        <a
                                            href={`https://wa.me/353894098150?text=${encodeURIComponent(t('coursepage.cta.wa_message_aff', 'en') || 'Hi! I am interested in starting the AFF course.')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cj-btn"
                                        >
                                            {t('coursepage.pricing.card1.cta')} <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* CARD 2 -> ASL */
                        <div className="cj-card animate-fade-in">
                            <div className="cj-card-top">
                                <div className="cj-card-image">
                                    <img src={img7} alt="ASL Progressive" />
                                </div>
                                <div className="cj-card-content">
                                    <h3 dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.card1.title') }} />
                                    <p className="cj-card-subtitle" dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.card1.subtitle') }} />

                                    <div className="cj-pricing-table">
                                        <div className="cj-pricing-col cj-pricing-complete">
                                            <div className="cj-pricing-col-header">
                                                <div className="cj-pricing-title-row">
                                                    <h4>{t('pricing.complete.title')}</h4>
                                                    <div className="cj-price-container">
                                                        <span className="cj-price-label">{t('pricing.complete.label')}</span>
                                                        <span className="cj-price-value">€1.607,00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="cj-pricing-items">
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.asl.2')}</li>
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.asl.3')}</li>
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.asl.5')}</li>
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.asl.7')}</li>
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.asl.8')}</li>
                                                <li><span className="cj-check">✓</span> {t('pricing.feature.asl.9')}</li>
                                            </ul>
                                        </div>
                                        <div className="cj-pricing-col cj-pricing-modular">
                                            <div className="cj-pricing-col-header">
                                                <div className="cj-pricing-title-row">
                                                    <h4>{t('pricing.modular.title')}</h4>
                                                    <div className="cj-price-container">
                                                        <span className="cj-price-label">{t('pricing.modular.label.total')}</span>
                                                        <span className="cj-price-value">€1.772,00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="cj-pricing-levels">
                                                <li><span>{t('pricing.asl.level1')}</span><strong>€434</strong></li>
                                                <li><span>{t('pricing.level')} 2 (3 {t('pricing.jumps')})</span><strong>€67/{t('pricing.jump')} (€201 total)</strong></li>
                                                <li><span>{t('pricing.level')} 3 (3 {t('pricing.jumps')})</span><strong>€67/{t('pricing.jump')} (€201 total)</strong></li>
                                                <li><span>{t('pricing.level')} 4 (2 {t('pricing.jumps')})</span><strong>€87/{t('pricing.jump')} (€261 total)</strong></li>
                                                <li><span>{t('pricing.level')} 5 (2 {t('pricing.jumps')})</span><strong>€127/{t('pricing.jump')} (€889 total)</strong></li>
                                                <li><span>{t('pricing.level')} 6 (2 {t('pricing.jumps')})</span><strong>€127/{t('pricing.jump')} (€889 total)</strong></li>
                                                <li className="cj-last-level"><span>{t('pricing.level')} 7 (2 {t('pricing.jumps')})</span><strong>€127/{t('pricing.jump')} (€889 total)</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="cj-card-cta-only">
                                        <a
                                            href={`https://wa.me/353894098150?text=${encodeURIComponent(t('coursepage.cta.wa_message_asl', 'en') || 'Hi! I am interested in starting the ASL course.')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cj-btn"
                                        >
                                            {t('coursepage.pricing.card1.cta')} <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </section >
    );
};

