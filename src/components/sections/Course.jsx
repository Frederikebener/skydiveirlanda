import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import course1 from '../../assets/BIRR TRIO3- 1920X1080.png';
import course2 from '../../assets/BIRR TRIO- 1920X1080.png';
import course3 from '../../assets/BIRR DUO- 1920X1080.png';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const Course = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const ctaRef = useRef(null);
    const imageColRef = useRef(null);
    const badgeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (badgeRef.current) {
                            badgeRef.current.classList.add('animate');
                        }
                        if (titleRef.current) {
                            titleRef.current.classList.add('animate');
                        }
                        if (descriptionRef.current) {
                            descriptionRef.current.classList.add('animate');
                        }
                        if (ctaRef.current) {
                            ctaRef.current.classList.add('animate');
                        }
                        if (imageColRef.current) {
                            imageColRef.current.classList.add('animate');
                        }
                    }
                });
            },
            { threshold: 0.1 }
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

    const courseImages = [
        course1,
        course2,
        course3,
    ];


    return (
        <section ref={sectionRef} className="course-section section-padding-lg" id="course">
            <div className="course-container">
                <div className="course-content-wrapper">
                    <div className="course-text-col">
                        <span ref={badgeRef} className="course-badge">
                            {t('course.badge')}
                        </span>
                        <h2 ref={titleRef} className="course-title" dangerouslySetInnerHTML={{ __html: t('course.title') }} />
                        <div ref={descriptionRef} className="course-description">
                            <p dangerouslySetInnerHTML={{ __html: t('course.description') }} />
                        </div>
                        <div className="course-cta-wrapper">
                            <button ref={ctaRef} className="course-cta" onClick={() => navigate('/course')}>
                                {t('course.cta')}
                            </button>
                        </div>
                    </div>
                    <div ref={imageColRef} className="course-image-col">
                        <div className="course-slider-wrapper">
                            <Swiper
                                modules={[Pagination, Autoplay, EffectFade]}
                                effect="fade"
                                spaceBetween={0}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                loop={true}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                className="course-swiper"
                            >
                                {courseImages.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="course-image-card">
                                            <img src={img} alt="" className="course-slider-img" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
