import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '../../context/LanguageContext';
import 'swiper/css';
import 'swiper/css/pagination';
import course1 from '../../assets/BIRR UNIC1- 1920X1080.png';
import course2 from '../../assets/BIRR UNIC- 1920X1080.png';
import course3 from '../../assets/BIRR TRIO1- 1920X1080.png';
import course4 from '../../assets/BIRR DUO8- 1920X1080.png';
import course5 from '../../assets/BIRR UNIC2- 1920X1080.png';
import course6 from '../../assets/BIRR TRIO- 1920X1080.png';


export const Dream = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const galleryRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (titleRef.current) titleRef.current.classList.add('animate');
                        if (descRef.current) descRef.current.classList.add('animate');
                        if (galleryRef.current) galleryRef.current.classList.add('animate');
                        if (ctaRef.current) ctaRef.current.classList.add('animate');
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

    const galleryImages = [
        course1,
        course2,
        course3,
        course4,
        course5,
        course6
    ];

    return (
        <section ref={sectionRef} className="dream-section section-padding-lg" id="dream">
            <div className="dream-container">
                <div className="dream-header">
                    <h2
                        ref={titleRef}
                        className="dream-title"
                        dangerouslySetInnerHTML={{ __html: t('dream.title') }}
                    ></h2>
                    <div ref={descRef} className="dream-description">
                        <p>{t('dream.desc1')}</p>
                        <p dangerouslySetInnerHTML={{ __html: t('dream.desc2') }} />
                    </div>
                </div>

                <div ref={galleryRef} className="dream-gallery-wrapper">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                centeredSlides: false,
                                spaceBetween: 0
                            },
                            1024: {
                                slidesPerView: 3,
                                centeredSlides: false,
                                spaceBetween: 0
                            }
                        }}
                        className="dream-swiper"
                    >
                        {galleryImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="dream-image-card">
                                    <img src={img} alt={`Skydiving Gallery ${index + 1}`} className="dream-gallery-img" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


            </div>
        </section>
    );
};
