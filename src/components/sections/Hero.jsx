import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { config } from '../../data/config';
import logo from '../../assets/LOGO 2 SKYDIVE THRU IRELAND.svg';

export const Hero = () => {
    const { language, setLanguage, t } = useLanguage();
    const { backgroundType, videoUrl, imageUrl } = config.hero;

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

            <div className="hero-overlay"></div>

            <div className="container hero-content">
                {/* Logo for mobile - shows above badge */}
                <img src={logo} alt="SkyDiveThru" className="hero-logo-mobile" />

                <span className="hero-badge" dangerouslySetInnerHTML={{ __html: t('hero.badge') }}></span>
                <h1
                    className="hero-title"
                    dangerouslySetInnerHTML={{ __html: t('hero.title') }}
                ></h1>

                <p
                    className="hero-subtitle"
                    dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
                ></p>

                <a
                    href="#packages"
                    className="btn btn-primary btn-lg"
                >
                    {t('hero.cta')}
                </a>
            </div>

            <div className="hero-clouds"></div>

        </section>
    );
};
