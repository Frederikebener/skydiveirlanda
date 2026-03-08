import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';
import heroBg from '../../assets/Banner03-2.jpg';

import flagDe from '../../assets/flag-de.svg';
import flagEn from '../../assets/flag-en.png';
import flagEs from '../../assets/flag-es.png';
import flagFr from '../../assets/flag-fr.png';
import flagGa from '../../assets/flag-ga.png';
import flagIt from '../../assets/flag-it.svg';
import flagPt from '../../assets/flag-pt.png';

export const NotFound = () => {
    const { t, language, setLanguage } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const languages = [
        { code: 'ga', name: 'Gaeilge', flag: flagGa },
        { code: 'pt', name: 'Português', flag: flagPt },
        { code: 'en', name: 'English', flag: flagEn },
        { code: 'de', name: 'Deutsch', flag: flagDe },
        { code: 'es', name: 'Español', flag: flagEs },
        { code: 'fr', name: 'Français', flag: flagFr },
        { code: 'it', name: 'Italiano', flag: flagIt }
    ];

    const isSmallMobile = windowWidth <= 375;
    const isVerySmall = windowWidth <= 320;

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            padding: isVerySmall ? '10px' : '20px',
            textAlign: 'center',
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            fontFamily: "'Montserrat', sans-serif",
            zIndex: 9999,
            overflowY: 'auto'
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1
        },
        langSwitch: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(5px)',
            padding: isVerySmall ? '6px 12px' : '8px 24px',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            marginBottom: isVerySmall ? '1rem' : '2rem',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            zIndex: 10,
            maxWidth: '100%'
        },
        langBtn: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: isVerySmall ? '0 4px' : '0 8px',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.7
        },
        langBtnActive: {
            opacity: 1,
            transform: 'scale(1.1)'
        },
        langFlag: {
            width: isVerySmall ? '24px' : '28px',
            height: isVerySmall ? '16px' : '20px',
            objectFit: 'cover',
            borderRadius: '3px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        },
        langDivider: {
            color: 'rgba(255, 255, 255, 0.2)',
            fontSize: '14px',
            margin: '0 2px',
            fontWeight: '300'
        },
        card: {
            position: 'relative',
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            padding: isVerySmall ? '24px 16px' : isSmallMobile ? '30px 20px' : '40px',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            maxWidth: '500px',
            width: '100%',
            color: '#333'
        },
        iconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: isVerySmall ? '16px' : '24px'
        },
        iconCircle: {
            backgroundColor: '#fee2e2',
            padding: '16px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isVerySmall ? '60px' : '80px',
            height: isVerySmall ? '60px' : '80px'
        },
        title: {
            fontSize: isVerySmall ? '32px' : isSmallMobile ? '40px' : '48px',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '8px',
            lineHeight: 1.2,
            marginTop: 0
        },
        subtitle: {
            fontSize: isVerySmall ? '18px' : isSmallMobile ? '20px' : '24px',
            fontWeight: '600',
            color: '#4b5563',
            marginBottom: isVerySmall ? '16px' : '24px',
            marginTop: 0
        },
        description: {
            fontSize: isVerySmall ? '14px' : '16px',
            fontFamily: "'Open Sans', sans-serif",
            color: '#6b7280',
            marginBottom: isVerySmall ? '24px' : '32px',
            lineHeight: 1.6
        },
        button: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            backgroundColor: isHovered ? '#0056b3' : '#0082C9',
            color: 'white',
            fontWeight: 'bold',
            padding: isVerySmall ? '10px 24px' : '12px 32px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: isVerySmall ? '14px' : '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.2s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            cursor: 'pointer'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>

            <Helmet>
                <title>{t('404.title')} | SkyDiveThru</title>
                <meta name="description" content={t('404.description')} />
            </Helmet>

            <div style={styles.langSwitch}>
                {languages.map((lang, index) => (
                    <React.Fragment key={lang.code}>
                        <button
                            onClick={() => setLanguage(lang.code)}
                            style={{
                                ...styles.langBtn,
                                ...(language === lang.code ? styles.langBtnActive : {})
                            }}
                            title={lang.name}
                        >
                            <img src={lang.flag} alt={lang.name} style={styles.langFlag} />
                        </button>
                        {index < languages.length - 1 && <span style={styles.langDivider}>|</span>}
                    </React.Fragment>
                ))}
            </div>

            <div style={styles.card}>
                <div style={styles.iconWrapper}>
                    <div style={styles.iconCircle}>
                        <AlertCircle size={48} color="#ef4444" />
                    </div>
                </div>

                <h1 style={styles.title}>{t('404.title')}</h1>
                <h2 style={styles.subtitle}>{t('404.subtitle')}</h2>

                <p style={styles.description}>
                    {t('404.description')}
                </p>

                <Link
                    to="/"
                    style={styles.button}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Home size={20} />
                    {t('404.button')}
                </Link>
            </div>
        </div>
    );
};
