import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import placeholderImg from '../../assets/Banner03-2.jpg';

export const Video = () => {
    const { t } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const videoRef = useRef(null);
    const ctaRef = useRef(null);

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
                        if (videoRef.current) {
                            videoRef.current.classList.add('animate');
                        }
                        if (ctaRef.current) {
                            ctaRef.current.classList.add('animate');
                        }
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
        <section ref={sectionRef} className="video-section section-padding-lg" id="video">
            <div className="video-container">
                <div className="video-header">
                    <h2 ref={titleRef} dangerouslySetInnerHTML={{ __html: t('video.title') }} className="video-title" />
                    <p ref={subtitleRef} className="video-subtitle" dangerouslySetInnerHTML={{ __html: t('video.subtitle') }} />
                </div>

                <div ref={videoRef} className="video-wrapper">
                    <div className="video-player-container" onClick={() => setIsPlaying(true)}>
                        {!isPlaying ? (
                            <>
                                <img
                                    src={placeholderImg}
                                    alt="Skydiving Video Placeholder"
                                    className="video-placeholder"
                                />
                                <div className="video-play-button">
                                    <svg viewBox="0 0 512 512" fill="currentColor">
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
                                    </svg>
                                </div>
                            </>
                        ) : (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/GTjnfAMOw6g?si=1EIr7ueCodyoweAp&autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="youtube-iframe"
                            ></iframe>
                        )}
                    </div>
                    <div className="video-cta-wrapper">
                        <a href="#packages" ref={ctaRef} className="video-cta">
                            {t('video.cta')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
