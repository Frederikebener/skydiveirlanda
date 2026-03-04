import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { CountdownBar } from '../layout/CountdownBar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { config } from '../../data/config';
import img1 from '../../assets/BIRR TRIO2- 1920X1080.png';
import img2 from '../../assets/BIRR TRIO3- 1920X1080.png';
import img3 from '../../assets/BIRR TRIO- 1920X1080.png';
import img4 from '../../assets/BIRR DUO- 1920X1080.png';
import img5 from '../../assets/BIRR UNIC1- 1920X1080.png';
import img6 from '../../assets/BIRR UNIC- 1920X1080.png';
import img7 from '../../assets/BIRR UNIC1- 1920X1080.png';
import img8 from '../../assets/BIRR UNIC- 1920X1080.png';
import img9 from '../../assets/Imagem (4).png';
import heroVideo from '../../assets/Video-2.mp4';
import ctaVideo from '../../assets/Takes-32.mp4';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../style-coursepage.css';

export const CoursePage = () => {
    const { t } = useLanguage();
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (index) => {
        if (faqOpen === index) {
            setFaqOpen(null);
        } else {
            setFaqOpen(index);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galleryImages = [img9, img1, img2, img3, img4, img5, img6];

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
                        <a href="#cp-contact" className="cp-btn-orange">
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

            {/* ── WHAT IS AFF ── */}
            <section className="cp-what cp-what-split">
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
                            <a href="#cp-contact" className="cp-btn-primary">
                                {t('coursepage.what.cta') || 'Start My Journey'}
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* PRICING JOURNEY SECTION */}
            <section className="cp-pricing">
                <div className="cp-pricing-header">
                    <h2 dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.title') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.subtitle') }} />
                </div>

                <div className="cp-pricing-cards">
                    {/* CARD 1 */}
                    <div className="cp-price-card cp-card-blue">
                        <div className="cp-card-img">
                            <img src={img7} alt="AFF Progressive" />
                        </div>
                        <div className="cp-card-content">
                            <h3 dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.card1.title') }} />
                            <p className="cp-card-subtitle" dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.card1.subtitle') }} />

                            <ul className="cp-card-features">
                                {(t('coursepage.pricing.card1.items') || []).map((item, i) => (
                                    <li key={i}>
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>

                            <p className="cp-card-desc" dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.card1.desc') }} />

                            <a href="#cp-contact" className="cp-btn-white">
                                {t('coursepage.pricing.card1.cta')}
                            </a>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="cp-price-card cp-card-white">
                        <div className="cp-card-img">
                            <img src={img8} alt="AFF Complete" />
                        </div>
                        <div className="cp-card-content">
                            <div className="cp-card-badge">
                                ⭐ {t('coursepage.pricing.card2.badge')} ⭐
                            </div>
                            <h3 dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.card2.title') }} />
                            <p className="cp-card-subtitle" dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.card2.subtitle') }} />

                            <ul className="cp-card-features">
                                {(t('coursepage.pricing.card2.items') || []).map((item, i) => (
                                    <li key={i}>
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>

                            <p className="cp-card-desc" dangerouslySetInnerHTML={{ __html: t('coursepage.pricing.card2.desc') }} />

                            <a href="#cp-contact" className="cp-btn-blue">
                                {t('coursepage.pricing.card2.cta')}
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
                            <a href="#cp-contact" className="cp-btn-primary">
                                {t('coursepage.safety.cta')}
                            </a>
                        </div>
                    </div>
                    <div className="cp-safety-media">
                        <img src={img3} alt="Safety in Skydiving" className="cp-safety-img" />
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
                        <a href="#cp-contact" className="cp-faq-contact-btn">
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
                        <a
                            href={`https://wa.me/353833446070?text=${encodeURIComponent(t('coursepage.cta.wa_message', { defaultValue: 'Hello' }))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cp-cta-btn"
                        >
                            {t('coursepage.cta.button')}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};
