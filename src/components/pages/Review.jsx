import React, { useState, useEffect } from 'react';
import { Star, Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { config } from '../../data/config';
import logo from '../../assets/Sem nome (150 x 136 px) (320 x 320 px).png';
import flagDe from '../../assets/flag-de.svg';
import flagEn from '../../assets/flag-en.png';
import flagEs from '../../assets/flag-es.png';
import flagFr from '../../assets/flag-fr.png';
import flagGa from '../../assets/flag-ga.png';
import flagIt from '../../assets/flag-it.svg';
import flagPt from '../../assets/flag-pt.png';
import '../../reveiw.css';

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
                        onClick={() => setLanguage('ga')}
                        className={`review-lang-btn ${language === 'ga' ? 'active' : ''}`}
                        title="Gaeilge"
                    >
                        <img src={flagGa} alt="Gaeilge" className="review-flag-icon" />
                    </button>
                    <span className="review-divider">|</span>
                    <button
                        onClick={() => setLanguage('pt')}
                        className={`review-lang-btn ${language === 'pt' ? 'active' : ''}`}
                        title="Português"
                    >
                        <img src={flagPt} alt="Português" className="review-flag-icon" />
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
                        onClick={() => setLanguage('de')}
                        className={`review-lang-btn ${language === 'de' ? 'active' : ''}`}
                        title="Deutsch"
                    >
                        <img src={flagDe} alt="Deutsch" className="review-flag-icon" />
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
                        onClick={() => setLanguage('it')}
                        className={`review-lang-btn ${language === 'it' ? 'active' : ''}`}
                        title="Italiano"
                    >
                        <img src={flagIt} alt="Italiano" className="review-flag-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

