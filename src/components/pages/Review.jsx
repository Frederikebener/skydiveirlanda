import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { config } from '../../data/config';
import logo from '../../assets/skydive-ireland-icon.webp';
import flagDe from '../../assets/flag-de.svg';
import flagEn from '../../assets/flag-english.webp';
import flagEs from '../../assets/flag-spanish.webp';
import flagFr from '../../assets/flag-french.webp';
import flagGa from '../../assets/flag-irish.webp';
import flagIt from '../../assets/flag-it.svg';
import flagPt from '../../assets/flag-portuguese.webp';
import '../../review.css';

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
            <Helmet>
                <title>{t('review.meta.title')}</title>
                <meta name="description" content={t('review.meta.description')} />
            </Helmet>
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
                    </div>

                    {/* Content Section */}
                    <div className="review-card-body">
                        {/* Stars Selection Section */}
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
                    </div>

                    {/* Progress Bar Decoration */}
                    <div className="review-progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: rating > 0 ? `${(rating / 5) * 100}%` : '0%' }}
                        />
                    </div>
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

            {/* Modal Popup for the Form */}
            {showForm && (
                <div className="review-modal-overlay">
                    <div className="review-modal-content">
                        <button
                            className="review-modal-close"
                            onClick={() => setShowForm(false)}
                            aria-label="Close"
                        >
                            &times;
                        </button>

                        <div className="iframe-form-wrapper">
                            {isFormLoading && (
                                <div className="iframe-loader">
                                    <Loader2 className="spinner-icon" />
                                    <span>{t('review.loading')}</span>
                                </div>
                            )}

                            <iframe
                                src="https://link.15dmarketingdigital.com.br/widget/form/8FCz9ZMazpwyCu5h8Fo3"
                                style={{
                                    backgroundColor: '#FFFFFFFF',
                                    border: '1px solid #FFFFFF00',
                                    borderRadius: '3px',
                                    maxWidth: '650px',
                                    width: '100%',
                                    borderColor: '#FFFFFF00',
                                    paddingTop: '20px',
                                    boxShadow: '0px 4px 4px 0px #57647E00',
                                    height: '100%' // Retain height to prevent collapse
                                }}
                                id="inline-8FCz9ZMazpwyCu5h8Fo3"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Form 8"
                                data-height="undefined"
                                data-layout-iframe-id="inline-8FCz9ZMazpwyCu5h8Fo3"
                                data-form-id="8FCz9ZMazpwyCu5h8Fo3"
                                title="Formulário de Feedback"
                                className={`review-iframe ${isFormLoading ? 'loading' : 'loaded'}`}
                                onLoad={() => setIsFormLoading(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

