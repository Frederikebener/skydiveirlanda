import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import '../../style-cookies.css';

const CookieConsent = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
        functional: false
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setIsVisible(true);
        } else {
            setPreferences(JSON.parse(consent));
        }

        // Listen for custom event to reopen preferences
        const handleOpenSettings = () => setShowModal(true);
        window.addEventListener('openCookieSettings', handleOpenSettings);
        return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
    }, []);

    const saveConsent = (prefs) => {
        localStorage.setItem('cookie_consent', JSON.stringify(prefs));
        setPreferences(prefs);
        setIsVisible(false);
        setShowModal(false);
        window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: prefs }));
    };

    const handleAcceptAll = () => {
        saveConsent({ necessary: true, analytics: true, marketing: true, functional: true });
    };

    const handleRejectAll = () => {
        saveConsent({ necessary: true, analytics: false, marketing: false, functional: false });
    };

    // Closing the banner counts as accepting consent
    const handleCloseBanner = () => {
        handleAcceptAll();
    };

    if (!isVisible && !showModal) return null;

    return (
        <>
            {/* Cookie Banner */}
            {isVisible && !showModal && (
                <div className="cookie-banner">
                    <button
                        onClick={handleCloseBanner}
                        className="cookie-banner-close"
                        aria-label={t('cookie.close')}
                    >
                        <X size={18} />
                    </button>
                    <div className="cookie-content">
                        <h4>{t('cookie.banner.title')}</h4>
                        <p>
                            {t('cookie.banner.desc')}
                            {' '}<a href="/cookie-policy" className="cookie-btn-text">{t('cookie.banner.policy_link')}</a>{' '}
                            {t('cookie.banner.desc_suffix')}
                        </p>
                    </div>
                    <div className="cookie-actions">
                        <button onClick={() => setShowModal(true)} className="cookie-btn cookie-btn-secondary">
                            {t('cookie.banner.manage')}
                        </button>
                        <button onClick={handleRejectAll} className="cookie-btn cookie-btn-secondary">
                            {t('cookie.banner.reject')}
                        </button>
                        <button onClick={handleAcceptAll} className="cookie-btn cookie-btn-primary">
                            {t('cookie.banner.accept')}
                        </button>
                    </div>
                </div>
            )}

            {/* Preferences Modal */}
            {showModal && (
                <div className="cookie-modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="cookie-modal" onClick={e => e.stopPropagation()}>
                        <div className="cookie-modal-header">
                            <h3>{t('cookie.modal.title')}</h3>
                            <button onClick={() => setShowModal(false)} className="cookie-modal-close" aria-label={t('cookie.close')}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="cookie-modal-body">
                            <p>{t('cookie.modal.desc')}</p>

                            {/* Necessary */}
                            <div className="cookie-category">
                                <div className="category-header">
                                    <h5>{t('cookie.necessary.title')}</h5>
                                    <span className="category-status">{t('cookie.always_active')}</span>
                                </div>
                                <p className="category-description">{t('cookie.necessary.desc')}</p>
                            </div>

                            {/* Functional */}
                            <div className="cookie-category">
                                <div className="category-header">
                                    <h5>{t('cookie.functional.title')}</h5>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.functional}
                                            onChange={e => setPreferences({ ...preferences, functional: e.target.checked })}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <p className="category-description">{t('cookie.functional.desc')}</p>
                            </div>

                            {/* Analytics */}
                            <div className="cookie-category">
                                <div className="category-header">
                                    <h5>{t('cookie.analytics.title')}</h5>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.analytics}
                                            onChange={e => setPreferences({ ...preferences, analytics: e.target.checked })}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <p className="category-description">{t('cookie.analytics.desc')}</p>
                            </div>

                            {/* Marketing */}
                            <div className="cookie-category">
                                <div className="category-header">
                                    <h5>{t('cookie.marketing.title')}</h5>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.marketing}
                                            onChange={e => setPreferences({ ...preferences, marketing: e.target.checked })}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <p className="category-description">{t('cookie.marketing.desc')}</p>
                            </div>
                        </div>

                        <div className="cookie-modal-footer">
                            <button onClick={handleRejectAll} className="cookie-btn cookie-btn-secondary">
                                {t('cookie.modal.reject')}
                            </button>
                            <button onClick={() => saveConsent(preferences)} className="cookie-btn cookie-btn-primary">
                                {t('cookie.modal.save')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsent;
