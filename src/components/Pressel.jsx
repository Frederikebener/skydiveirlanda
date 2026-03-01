import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import '../style-pressel.css';
import bgImage from '../assets/Banner03-2.jpg';

import flagDe from '../assets/flag-de.svg';
import flagEn from '../assets/flag-en.png';
import flagEs from '../assets/flag-es.png';
import flagFr from '../assets/flag-fr.png';
import flagGa from '../assets/flag-ga.png';
import flagIt from '../assets/flag-it.svg';
import flagPt from '../assets/flag-pt.png';

export const Pressel = ({ onEnter }) => {
    const { language, setLanguage } = useLanguage();
    const t = translations[language];
    const [isLangOpen, setIsLangOpen] = useState(false);

    const languages = [
        { code: 'de', name: 'Deutsch', flag: flagDe },
        { code: 'en', name: 'English', flag: flagEn },
        { code: 'es', name: 'Español', flag: flagEs },
        { code: 'fr', name: 'Français', flag: flagFr },
        { code: 'ga', name: 'Gaeilge', flag: flagGa },
        { code: 'it', name: 'Italiano', flag: flagIt },
        { code: 'pt', name: 'Português', flag: flagPt }
    ];

    const currentLang = languages.find(l => l.code === language) || languages[0];

    const calculateTimeLeft = () => {
        const difference = +new Date("2026-05-26T09:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    useEffect(() => {
        // Prevent background scrolling while Presell is open
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        return () => {
            // Restore scroll when unmounted
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, []);

    const formatNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    return (
        <div className="pressel-container" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="pressel-overlay"></div>
            <div className="pressel-content">
                <h1 className="pressel-title">{t['pressel.title']}</h1>
                <h2 className="pressel-date">{t['pressel.date']}</h2>

                <div className="pressel-lang-switch">
                    {languages.map((lang, index) => (
                        <React.Fragment key={lang.code}>
                            <button
                                onClick={() => setLanguage(lang.code)}
                                className={`pressel-lang-btn ${language === lang.code ? 'active' : ''}`}
                                title={lang.name}
                            >
                                <img src={lang.flag} alt={lang.name} className="pressel-flag-icon" />
                            </button>
                            {index < languages.length - 1 && <span className="pressel-divider">|</span>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="pressel-countdown-container">
                    <p className="pressel-countdown-prefix">{t['pressel.countdown.prefix']}</p>
                    <div className="pressel-timer">
                        <div className="timer-item">
                            <span className="timer-value">{formatNumber(timeLeft.days || 0)}</span>
                            <span className="timer-label">{t['pressel.countdown.days']}</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="timer-item">
                            <span className="timer-value">{formatNumber(timeLeft.hours || 0)}</span>
                            <span className="timer-label">{t['pressel.countdown.hours']}</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="timer-item">
                            <span className="timer-value">{formatNumber(timeLeft.minutes || 0)}</span>
                            <span className="timer-label">{t['pressel.countdown.minutes']}</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="timer-item">
                            <span className="timer-value">{formatNumber(timeLeft.seconds || 0)}</span>
                            <span className="timer-label">{t['pressel.countdown.seconds']}</span>
                        </div>
                    </div>
                    <p className="pressel-countdown-suffix">{t['pressel.countdown.suffix']}</p>
                </div>

                <div className="pressel-cta-container">
                    <p className="pressel-cta-text">{t['pressel.cta']}</p>
                    <button className="pressel-button" onClick={onEnter}>
                        {t['pressel.button']}
                    </button>
                </div>
            </div>
        </div>
    );
};
