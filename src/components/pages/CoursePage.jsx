import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { CountdownBar } from '../layout/CountdownBar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { config } from '../../data/config';

import img1 from '../../assets/BIRR TRIO3- 1920X1080.png';
import img2 from '../../assets/BIRR TRIO- 1920X1080.png';
import img3 from '../../assets/BIRR DUO- 1920X1080.png';
import img10 from '../../assets/Static-Line.jpg';
import img11 from '../../assets/BIRR TRIO1- 1920X1080.png'
import heroVideo from '../../assets/Video-2.mp4';
import ctaVideo from '../../assets/Takes-32.mp4';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../style-coursepage.css';
import '../../style-coursejourney.css';


export const CoursePage = () => {
    const { t } = useLanguage();
    const [faqOpen, setFaqOpen] = useState(null);
    const [activeTab, setActiveTab] = useState('AFF'); // 'AFF' or 'ASL'

    const toggleFaq = (index) => {
        if (faqOpen === index) {
            setFaqOpen(null);
        } else {
            setFaqOpen(index);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        // Handle query parameter to switch tabs
        const params = new URLSearchParams(window.location.search);
        const type = params.get('type');
        if (type === 'asl') {
            setActiveTab('ASL');
        } else if (type === 'aff') {
            setActiveTab('AFF');
        }
    }, [window.location.search]);

    const galleryImages = [img1, img2, img3];

    return (
        <>
            <Helmet>
                <title>{t('coursepage.meta.title')}</title>
                <meta name="description" content={t('coursepage.meta.description')} />
            </Helmet>

            {config.hero.enableCountdown && <CountdownBar />}
            <Header />

            {/* ── HERO ── */}
            <section className="cp-hero">
                <video
                    className="cp-hero-video-bg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={heroVideo}
                />

                <div className="cp-hero-overlay" />
                <div className="cp-hero-container">
                    <div className="cp-hero-box">
                        <h1 className="cp-hero-title" dangerouslySetInnerHTML={{ __html: t('coursepage.hero.title') }} />
                        <p className="cp-hero-subtitle" dangerouslySetInnerHTML={{ __html: t('coursepage.hero.subtitle') }} />
                        <a href="#cp-pricing" className="cp-btn-orange">
                            {t('coursepage.hero.cta')}
                        </a>
                        <div className="cp-hero-footer-text">
                            {t('coursepage.hero.footer') || '25 anos sem acidentes | Instrutores certificados'}
                        </div>
                    </div>
                </div>

                <div className="cp-hero-shape-bottom">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" shapeRendering="geometricPrecision">
                        <path d="M0,120 L1200,120 L1200,0 L720,0 C660,0 640,110 600,110 C560,110 540,0 480,0 L0,0 Z" fill="#fff" />
                        <path d="M585,55 L600,70 L615,55" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </section>

            {/* PRICING JOURNEY SECTION - same as CourseJourney */}
            <section className="cj-section cj-white-bg" id="cp-pricing">
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
                            /* CARD 1 - AFF */
                            <div className="cj-card animate-fade-in">
                                <div className="cj-card-top">
                                    <div className="cj-card-image">
                                        <img src={img3} alt="AFF Complete" />
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
                                                id="wa-btn-course-aff"
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
                            /* CARD 2 - ASL */
                            <div className="cj-card animate-fade-in">
                                <div className="cj-card-top">
                                    <div className="cj-card-image">
                                        <img src={img10} alt="ASL Progressive" />
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
                                                    <li><span>{t('pricing.level')} 2 (3 {t('pricing.jumps')})</span><strong>€67/{t('pricing.jump')}</strong></li>
                                                    <li><span>{t('pricing.level')} 3 (3 {t('pricing.jumps')})</span><strong>€67/{t('pricing.jump')}</strong></li>
                                                    <li><span>{t('pricing.level')} 4 (2 {t('pricing.jumps')})</span><strong>€87/{t('pricing.jump')}</strong></li>
                                                    <li><span>{t('pricing.level')} 5 (2 {t('pricing.jumps')})</span><strong>€127/{t('pricing.jump')}</strong></li>
                                                    <li><span>{t('pricing.level')} 6 (2 {t('pricing.jumps')})</span><strong>€127/{t('pricing.jump')}</strong></li>
                                                    <li className="cj-last-level"><span>{t('pricing.level')} 7 (2 {t('pricing.jumps')})</span><strong>€127/{t('pricing.jump')}</strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cj-card-cta-only">
                                            <a
                                                id="wa-btn-course-asl"
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
                </div>
            </section>
            {/* ── WHAT IS AFF ── */}
            <section className="cp-what cp-what-split cp-what-blue">
                <div className="cp-container cp-what-container">

                    <div className="cp-what-media">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            spaceBetween={30}
                            className="cp-what-swiper"
                        >
                            {galleryImages.map((src, i) => (
                                <SwiperSlide key={i}>
                                    <img src={src} alt="AFF Action" className="cp-what-slide-img" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="cp-what-text">
                        <h2 dangerouslySetInnerHTML={{ __html: t('coursepage.what.title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('coursepage.what.desc') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('coursepage.what.desc2') }} />

                        <ul className="cp-what-features">
                            {(t('coursepage.what.items') || []).map((item, i) => (
                                <li key={i}>
                                    <span className="cp-what-check">✔</span>
                                    <span dangerouslySetInnerHTML={{ __html: item }} />
                                </li>
                            ))}
                        </ul>

                        <div className="cp-what-cta">
                            <a href="#cp-pricing" className="cp-btn-orange">
                                {t('coursepage.what.cta') || 'Start My Journey'}
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* SAFETY SECTION */}
            <section className="cp-safety">
                <div className="cp-safety-container">
                    <div className="cp-safety-text">
                        <h2 dangerouslySetInnerHTML={{ __html: t('coursepage.safety.title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('coursepage.safety.p1') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('coursepage.safety.p2') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('coursepage.safety.p3') }} />

                        <div className="cp-what-cta">
                            <a href="#cp-pricing" className="cp-btn-primary-course">
                                {t('coursepage.safety.cta')}
                            </a>
                        </div>
                    </div>
                    <div className="cp-safety-media">
                        <img src={img11} alt="Safety in Skydiving" className="cp-safety-img" />
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="cp-faq">
                <div className="cp-faq-container">
                    <div className="cp-faq-header">
                        <span className="cp-faq-badge">FAQ</span>
                        <h2 dangerouslySetInnerHTML={{ __html: t('coursepage.faq.title') }} />
                    </div>
                    <div className="cp-faq-content">
                        <div className="cp-faq-list">
                            {t('coursepage.faqs', { returnObjects: true }).map((faq, index) => (
                                <div
                                    key={index}
                                    className={`cp-faq-item ${faqOpen === index ? 'active' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="cp-faq-question">
                                        <h3>{faq.question}</h3>
                                        <div className="cp-faq-toggle">
                                            {faqOpen === index ? '-' : '+'}
                                        </div>
                                    </div>
                                    <div className="cp-faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a
                            id="wa-btn-course-faq"
                            href={`https://wa.me/353894098150?text=${encodeURIComponent(t('contact.wa_message', 'en') || 'Hi! I have some questions and I would like to talk with someone from SkyDiveThru Ireland.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cp-faq-contact-btn"
                        >
                            {t('coursepage.faqs.contact')}
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cp-cta">
                <div className="cp-cta-container">
                    <div className="cp-cta-video-wrapper">
                        <video
                            src={ctaVideo}
                            className="cp-cta-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                        <div className="cp-cta-overlay"></div>
                    </div>
                    <div className="cp-cta-content">
                        <h2 dangerouslySetInnerHTML={{ __html: t('coursepage.cta.title') }} />
                        <a href="#cp-pricing" className="cp-cta-btn">
                            {t('coursepage.cta.button')}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};
