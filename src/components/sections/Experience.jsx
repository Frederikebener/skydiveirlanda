import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import experienceImg from '../../assets/BIRR DUPLO6 - 1024 x 768.png';

export const Experience = () => {
    const { t } = useLanguage();
    const steps = t('experience.steps') || [];
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const stepRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate title
                        if (titleRef.current) {
                            titleRef.current.classList.add('animate');
                        }
                        // Animate image
                        if (imageRef.current) {
                            imageRef.current.classList.add('animate');
                        }
                        // Animate steps
                        stepRefs.current.forEach((step) => {
                            if (step) {
                                step.classList.add('animate');
                            }
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
        <section ref={sectionRef} className="experience-section section-padding-lg" id="experience">
            <div className="container">
                <h2 ref={titleRef} className="experience-title" dangerouslySetInnerHTML={{ __html: t('experience.title') }} />
                <div className="experience-content-wrapper">
                    <div className="experience-left-col">
                        <div className="experience-image-wrapper">
                            <img
                                ref={imageRef}
                                src={experienceImg}
                                alt="Experience Skydive"
                                className="experience-main-image"
                            />
                        </div>
                    </div>
                    <div className="experience-right-col">
                        <div className="experience-timeline">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (stepRefs.current[index] = el)}
                                    className="experience-step-item"
                                >
                                    <div className="experience-step-icon">
                                        <div className="custom-step-icon"></div>
                                        <div className="step-connector"></div>
                                    </div>
                                    <div className="experience-step-content">
                                        <p dangerouslySetInnerHTML={{ __html: step }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
