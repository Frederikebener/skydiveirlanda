import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import teamImg from '../../assets/about-team.jpg';

export const About = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const imageColRef = useRef(null);
    const titleRef = useRef(null);
    const pRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (imageColRef.current) {
                            imageColRef.current.classList.add('animate');
                        }
                        if (titleRef.current) {
                            titleRef.current.classList.add('animate');
                        }
                        pRefs.current.forEach((p) => {
                            if (p) p.classList.add('animate');
                        });
                    }
                });
            },
            { threshold: 0.2 }
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
        <section ref={sectionRef} className="about-section section-padding-lg" id="about">
            <div className="about-container">
                <div className="about-content-wrapper">
                    <div ref={imageColRef} className="about-image-col">
                        <div className="about-image-wrapper">
                            <img
                                src={teamImg}
                                alt="Our Team"
                                className="about-main-image"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="about-text-col">
                        <h2 ref={titleRef} className="about-title" dangerouslySetInnerHTML={{ __html: t('about.title') }} />
                        <div className="about-description">
                            <p
                                ref={(el) => (pRefs.current[0] = el)}
                                dangerouslySetInnerHTML={{ __html: t('about.p1') }}
                            />
                            <p
                                ref={(el) => (pRefs.current[1] = el)}
                                dangerouslySetInnerHTML={{ __html: t('about.p2') }}
                            />
                            <p
                                ref={(el) => (pRefs.current[2] = el)}
                                dangerouslySetInnerHTML={{ __html: t('about.p3') }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
