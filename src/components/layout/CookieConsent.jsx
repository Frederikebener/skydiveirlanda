import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import '../../style-cookies.css';

const CookieConsent = () => {
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
        // Trigger site-wide event if needed to enable/disable scripts
        window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: prefs }));
    };

    const handleAcceptAll = () => {
        const allPrefs = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true
        };
        saveConsent(allPrefs);
    };

    const handleRejectAll = () => {
        const essentialPrefs = {
            necessary: true,
            analytics: false,
            marketing: false,
            functional: false
        };
        saveConsent(essentialPrefs);
    };

    if (!isVisible && !showModal) return null;

    return (
        <>
            {/* Cookie Banner */}
            {isVisible && !showModal && (
                <div className="cookie-banner">
                    <div className="cookie-content">
                        <h4>Cookie Consent</h4>
                        <p>
                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please choose your preferences below.
                            See our <a href="/cookie-policy" className="cookie-btn-text">Cookie Policy</a> for more information.
                        </p>
                    </div>
                    <div className="cookie-actions">
                        <button onClick={() => setShowModal(true)} className="cookie-btn cookie-btn-secondary">
                            Manage Preferences
                        </button>
                        <button onClick={handleRejectAll} className="cookie-btn cookie-btn-secondary">
                            Reject Non-Essential
                        </button>
                        <button onClick={handleAcceptAll} className="cookie-btn cookie-btn-primary">
                            Accept All
                        </button>
                    </div>
                </div>
            )}

            {/* Preferences Modal */}
            {showModal && (
                <div className="cookie-modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="cookie-modal" onClick={e => e.stopPropagation()}>
                        <div className="cookie-modal-header">
                            <h3>Cookie Settings</h3>
                            <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="cookie-modal-body">
                            <p>
                                Manage your cookie preferences here. You can change these settings at any time.
                            </p>

                            {/* Necessary */}
                            <div className="cookie-category">
                                <div className="category-header">
                                    <h5>Necessary Cookies</h5>
                                    <span className="category-status">Always Active</span>
                                </div>
                                <p className="category-description">
                                    These cookies are essential for the website to function properly and cannot be disabled in our systems.
                                </p>
                            </div>

                            {/* Functional */}
                            <div className="cookie-category">
                                <div className="category-header">
                                    <h5>Functional Cookies</h5>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.functional}
                                            onChange={e => setPreferences({ ...preferences, functional: e.target.checked })}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <p className="category-description">
                                    These cookies allow the website to provide enhanced functionality and personalization based on your interactions.
                                </p>
                            </div>

                            {/* Analytics */}
                            <div className="cookie-category">
                                <div className="category-header">
                                    <h5>Analytics Cookies</h5>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.analytics}
                                            onChange={e => setPreferences({ ...preferences, analytics: e.target.checked })}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <p className="category-description">
                                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                                </p>
                            </div>

                            {/* Marketing */}
                            <div className="cookie-category">
                                <div className="category-header">
                                    <h5>Marketing Cookies</h5>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.marketing}
                                            onChange={e => setPreferences({ ...preferences, marketing: e.target.checked })}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <p className="category-description">
                                    These cookies are used to track visitors across websites to enable publishers to display relevant and engaging advertisements.
                                </p>
                            </div>
                        </div>

                        <div className="cookie-modal-footer">
                            <button onClick={handleRejectAll} className="cookie-btn cookie-btn-secondary">
                                Reject All Optional
                            </button>
                            <button onClick={() => saveConsent(preferences)} className="cookie-btn cookie-btn-primary">
                                Save Preferences
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsent;
