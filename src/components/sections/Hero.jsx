import React, { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { config } from '../../data/config';
import { Play, Pause } from 'lucide-react';
import audioFile from '../../assets/audio-skydive.mp3';

export const Hero = () => {
    const { language, setLanguage, t } = useLanguage();
    const { backgroundType, videoUrl, imageUrl, enableAudio } = config.hero;
    const [isPlayingTheme, setIsPlayingTheme] = useState(false);
    const audioRef = useRef(null);

    const toggleTheme = (e) => {
        e.preventDefault();
        if (audioRef.current) {
            if (isPlayingTheme) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlayingTheme(!isPlayingTheme);
        }
    };

    const sectionStyle = backgroundType === 'image' ? {
        backgroundImage: `url(${imageUrl})`
    } : {};

    return (
        <section
            id="hero"
            className={`hero ${backgroundType === 'video' ? 'has-video' : ''}`}
            style={sectionStyle}
        >
            {backgroundType === 'video' ? (
                <div className="video-background">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="hero-video"
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : null}

            {/* Hidden Audio Element */}
            {enableAudio && (
                <audio ref={audioRef} src={audioFile} loop />
            )}

            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <span className="hero-badge" dangerouslySetInnerHTML={{ __html: t('hero.badge') }}></span>
                <h1
                    className="hero-title"
                    dangerouslySetInnerHTML={{ __html: t('hero.title') }}
                ></h1>

                <p
                    className="hero-subtitle"
                    dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
                ></p>

                <div className="hero-cta-group">
                    <a
                        href="#packages"
                        className="btn btn-primary btn-lg"
                    >
                        {t('hero.cta')}
                    </a>

                    {enableAudio && (
                        <button
                            onClick={toggleTheme}
                            className="btn btn-outline hero-audio-btn"
                        >
                            {isPlayingTheme ? <Pause size={18} strokeWidth={1.5} className="audio-icon" /> : <Play size={18} strokeWidth={1.5} className="audio-icon" />}
                            {t('hero.audio_btn') || 'Play Official Theme'}
                            {isPlayingTheme && <span className="music-waves"></span>}
                        </button>
                    )}
                </div>
            </div>

            <div className="hero-clouds"></div>

        </section>
    );
};
