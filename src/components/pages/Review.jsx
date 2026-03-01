import React, { useState, useEffect } from 'react';
import { Star, Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { config } from '../../data/config';
import logo from '../../assets/logo1.webp';
import flagDe from '../../assets/flag-de.svg';
import flagEn from '../../assets/flag-en.png';
import flagEs from '../../assets/flag-es.png';
import flagFr from '../../assets/flag-fr.png';
import flagGa from '../../assets/flag-ga.png';
import flagIt from '../../assets/flag-it.svg';
import flagPt from '../../assets/flag-pt.png';

export const Review = () => {
    const { language, setLanguage, t } = useLanguage();
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [isFormLoading, setIsFormLoading] = useState(true);

    const handleRatingClick = (selectedRating) => {
        setRating(selectedRating);

        if (selectedRating >= 4) {
            // High rating: Redirect to Google Reviews
            window.location.href = config.evaluation.googleReviewUrl;
        } else {
            // Low rating: Show internal feedback form
            setShowForm(true);
        }
    };

    return (
        <div className="review-page-wrapper">
            {/* Image Background */}
            <div className="review-bg-container">
                <img
                    src={config.hero.imageUrl}
                    alt="Background"
                    className="review-bg-image"
                />
                <div className="review-overlay"></div>
            </div>

            <div className="review-content-inner">
                {/* Top Logo */}
                <div className="review-logo-animated">
                    <a href="/" className="logo-link">
                        <img
                            src={logo}
                            alt="SkyDiveThru"
                            className="review-logo-img"
                        />
                    </a>
                </div>

                {/* Main Card */}
                <div className="review-card-container">
                    {/* Header Section */}
                    <div className="review-card-header">
                        <h2 className="review-card-title">
                            {showForm ? t('review.subtitle') : t('review.title')}
                        </h2>
                        {showForm && (
                            <p className="review-card-subtitle">
                                {t('review.subtitle')}
                            </p>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="review-card-body">
                        {/* Stars Selection Section */}
                        {!showForm ? (
                            <div className="stars-selection-group">
                                <div className="stars-row">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            className="star-btn"
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            onClick={() => handleRatingClick(star)}
                                            aria-label={`Avaliar com ${star} estrela${star > 1 ? 's' : ''}`}
                                        >
                                            <Star
                                                className={`star-icon ${star <= (hoveredRating || rating)
                                                    ? "filled"
                                                    : ""
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                                <div className="stars-label">
                                    <span>{t('review.select_rating')}</span>
                                </div>
                            </div>
                        ) : (
                            /* Form Section */
                            <div className="iframe-form-wrapper">
                                {isFormLoading && (
                                    <div className="iframe-loader">
                                        <Loader2 className="spinner-icon" />
                                        <span>{t('review.loading')}</span>
                                    </div>
                                )}

                                <iframe
                                    src={config.evaluation.formUrl}
                                    className={`review-iframe ${isFormLoading ? 'loading' : 'loaded'}`}
                                    title="Formulário de Feedback"
                                    onLoad={() => setIsFormLoading(false)}
                                />

                                <div className="iframe-footer">
                                    <button
                                        onClick={() => setShowForm(false)}
                                        className="back-btn"
                                    >
                                        {t('review.back')}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Progress Bar Decoration */}
                    {!showForm && (
                        <div className="review-progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: rating > 0 ? `${(rating / 5) * 100}%` : '0%' }}
                            />
                        </div>
                    )}
                </div>

                {/* Language Selector */}
                <div className="review-lang-switch">
                    <button
                        onClick={() => setLanguage('de')}
                        className={`review-lang-btn ${language === 'de' ? 'active' : ''}`}
                        title="Deutsch"
                    >
                        <img src={flagDe} alt="Deutsch" className="review-flag-icon" />
                    </button>
                    <span className="review-divider">|</span>
                    <button
                        onClick={() => setLanguage('en')}
                        className={`review-lang-btn ${language === 'en' ? 'active' : ''}`}
                        title="English"
                    >
                        <img src={flagEn} alt="English" className="review-flag-icon" />
                    </button>
                    <span className="review-divider">|</span>
                    <button
                        onClick={() => setLanguage('es')}
                        className={`review-lang-btn ${language === 'es' ? 'active' : ''}`}
                        title="Español"
                    >
                        <img src={flagEs} alt="Español" className="review-flag-icon" />
                    </button>
                    <span className="review-divider">|</span>
                    <button
                        onClick={() => setLanguage('fr')}
                        className={`review-lang-btn ${language === 'fr' ? 'active' : ''}`}
                        title="Français"
                    >
                        <img src={flagFr} alt="Français" className="review-flag-icon" />
                    </button>
                    <span className="review-divider">|</span>
                    <button
                        onClick={() => setLanguage('ga')}
                        className={`review-lang-btn ${language === 'ga' ? 'active' : ''}`}
                        title="Gaeilge"
                    >
                        <img src={flagGa} alt="Gaeilge" className="review-flag-icon" />
                    </button>
                    <span className="review-divider">|</span>
                    <button
                        onClick={() => setLanguage('it')}
                        className={`review-lang-btn ${language === 'it' ? 'active' : ''}`}
                        title="Italiano"
                    >
                        <img src={flagIt} alt="Italiano" className="review-flag-icon" />
                    </button>
                    <span className="review-divider">|</span>
                    <button
                        onClick={() => setLanguage('pt')}
                        className={`review-lang-btn ${language === 'pt' ? 'active' : ''}`}
                        title="Português"
                    >
                        <img src={flagPt} alt="Português" className="review-flag-icon" />
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .review-page-wrapper {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100vw;
                    height: 100dvh; /* Dynamic viewport height to account for mobile browser UI */
                    z-index: 99999; /* Place above any stray headers */
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    font-family: 'Open Sans', sans-serif;
                    overflow: hidden; /* Prevent scrolling within wrapper */
                    background-color: #001529; /* Backup background */
                }

                .review-bg-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }

                .review-bg-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .review-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 21, 41, 0.85);
                    backdrop-filter: blur(4px);
                }

                .review-content-inner {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    max-width: 650px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .review-logo-animated {
                    margin-bottom: 40px;
                }

                .review-logo-img {
                    height: 100px;
                    width: auto;
                    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));
                    transition: transform 0.3s ease;
                }

                .review-logo-img:hover {
                    transform: scale(1.05);
                }

                .review-card-container {
                    width: 100%;
                    background: white;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }

                .review-card-header {
                    background: #007bff;
                    color: white;
                    padding: 40px 30px;
                    text-align: center;
                }

                .review-card-title {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 24px;
                    font-weight: 700;
                    margin: 0;
                    line-height: 1.3;
                }

                .review-card-subtitle {
                    margin-top: 15px;
                    font-size: 16px;
                    opacity: 0.9;
                }

                .review-card-body {
                    padding: 40px;
                }

                .stars-selection-group {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;
                }

                .stars-row {
                    display: flex;
                    gap: 15px;
                }

                .star-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    transition: transform 0.2s ease;
                }

                .star-btn:hover {
                    transform: scale(1.2);
                }

                .star-icon {
                    width: 50px;
                    height: 50px;
                    color: #e2e8f0;
                    transition: all 0.2s ease;
                }

                .star-icon.filled {
                    color: #FFA412;
                    fill: #FFA412;
                }

                .stars-label {
                    text-transform: uppercase;
                    font-weight: 800;
                    font-size: 12px;
                    color: #64748b;
                    letter-spacing: 0.05em;
                }

                .iframe-form-wrapper {
                    position: relative;
                    min-height: 500px;
                    display: flex;
                    flex-direction: column;
                }

                .iframe-loader {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: white;
                    z-index: 5;
                }

                .spinner-icon {
                    width: 40px;
                    height: 40px;
                    color: #007bff;
                    animation: spin 1s linear infinite;
                    margin-bottom: 15px;
                }

                .review-iframe {
                    width: 100%;
                    height: 500px;
                    border: none;
                    border-radius: 8px;
                    transition: opacity 0.3s ease;
                }

                .review-iframe.loading { opacity: 0; }
                .review-iframe.loaded { opacity: 1; }

                .iframe-footer {
                    margin-top: 25px;
                    display: flex;
                    justify-content: center;
                }

                .back-btn {
                    background: none;
                    border: none;
                    color: #007bff;
                    font-weight: 700;
                    font-size: 14px;
                    cursor: pointer;
                    transition: color 0.2s;
                }

                .back-btn:hover {
                    color: #0056b3;
                    text-decoration: underline;
                }

                .review-progress-bar {
                    height: 8px;
                    width: 100%;
                    background: #f1f5f9;
                }

                .progress-fill {
                    height: 100%;
                    background: #FFA412;
                    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Language Selector Styles */
                .review-lang-switch {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap; /* Ensure flags wrap if too wide */
                    margin-top: 30px;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 10px 20px;
                    border-radius: 50px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-sizing: border-box;
                    max-width: 100%;
                }

                .review-lang-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 8px;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .review-flag-icon {
                    width: 28px;
                    height: 18px;
                    object-fit: cover;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    opacity: 0.8;
                    display: block;
                }

                .review-lang-btn:hover .review-flag-icon,
                .review-lang-btn.active .review-flag-icon {
                    opacity: 1;
                    transform: scale(1.25);
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
                }

                .review-divider {
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 14px;
                    margin: 0 10px;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 768px) {
                    .review-page-wrapper {
                        padding: 0px 10px;
                        height: 100svh;
                        max-height: 100svh;
                        overflow: hidden; /* Force absolutely no scroll on wrapper */
                        justify-content: center;
                    }
                    .review-content-inner {
                        box-sizing: border-box;
                        width: 100%;
                        max-width: 100%; /* Use full width inside wrapper */
                    }
                    .review-logo-animated {
                        margin-bottom: 20px; 
                    }
                    .review-logo-img {
                        height: 100px; 
                    }
                    .review-card-container {
                        border-radius: 16px; 
                    }
                    .review-card-header { padding: 15px; }
                    .review-card-title { font-size: 20px; }
                    .review-card-subtitle { margin-top: 5px; font-size: 14px; }
                    
                    .review-card-body { padding: 25px 15px; box-sizing: border-box; }
                    .stars-selection-group { gap: 15px; }
                    .star-icon { width: 40px; height: 40px; }
                    .stars-row { gap: 10px; }
                    .stars-label { font-size: 14px; }
                    
                    .review-lang-switch { 
                        margin-top: 15px; 
                        padding: 6px;
                        gap: 2px;
                    }
                    .review-lang-btn {
                        padding: 3px;
                    }
                    .review-flag-icon {
                        width: 22px;
                        height: 14px;
                    }
                    .review-divider {
                        margin: 0 1px;
                    }
                }
            ` }} />
        </div>
    );
};
