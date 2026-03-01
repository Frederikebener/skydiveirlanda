import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const CountdownBar = ({ isHidden }) => {
    const { t } = useLanguage();
    const targetDate = new Date('2026-05-26T09:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            const now = Date.now();
            const difference = targetDate - now;

            if (difference <= 0) {
                setTimeLeft(0);
                clearInterval(timer);
            } else {
                setTimeLeft(difference);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate, timeLeft]);

    if (timeLeft <= 0) return null;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div className={`countdown-bar ${isHidden ? 'countdown-hidden' : ''}`}>
            <div className="countdown-container">
                <span className="countdown-label">{t('countdown.label')}</span>
                <div className="countdown-timer">
                    <div className="countdown-unit">
                        <span className="unit-value">{days}</span>
                        <span className="unit-label">{t('countdown.days')}</span>
                    </div>
                    <div className="countdown-unit">
                        <span className="unit-value">{hours}</span>
                        <span className="unit-label">{t('countdown.hours')}</span>
                    </div>
                    <div className="countdown-unit">
                        <span className="unit-value">{minutes}</span>
                        <span className="unit-label">{t('countdown.minutes')}</span>
                    </div>
                    <div className="countdown-unit">
                        <span className="unit-value">{seconds}</span>
                        <span className="unit-label">{t('countdown.seconds')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

