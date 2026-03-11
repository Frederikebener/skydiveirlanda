import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Experience = () => {
    const { t } = useLanguage();
    const [isPlaying, setIsPlaying] = React.useState(false);
    const steps = t('experience.steps') || [];
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const rightTitleRef = useRef(null);
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
                        // Animate right title
                        if (rightTitleRef.current) {
                            rightTitleRef.current.classList.add('animate');
                        }
                        // Animate image and play video
                        if (imageRef.current) {
                            imageRef.current.classList.add('animate');
                            setIsPlaying(true);
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
            <div className="container experience-grid">
                <h2 ref={titleRef} className="experience-title" dangerouslySetInnerHTML={{ __html: t('video.title') }} />

                <div className="experience-left-col">
                    <div ref={imageRef} className="experience-video-wrapper">
                        <div className="video-player-container experience-video-container">
                            {isPlaying ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/GTjnfAMOw6g?si=1EIr7ueCodyoweAp&autoplay=1&mute=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="youtube-iframe"
                                ></iframe>
                            ) : null}
                        </div>
                    </div>
                </div>

                <h3 ref={rightTitleRef} className="experience-right-title" dangerouslySetInnerHTML={{ __html: t('experience.title') }} />

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
        </section>
    );
};
