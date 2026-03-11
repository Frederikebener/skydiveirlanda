import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { config } from './data/config';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { Home } from './components/pages/Home';
import { Review } from './components/pages/Review';
import { CoursePage } from './components/pages/CoursePage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { CountdownBar } from './components/layout/CountdownBar';
import { Pressel } from './components/Pressel';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { CookiePolicy } from './components/pages/CookiePolicy';
import CookieConsent from './components/layout/CookieConsent';
import TrackingManager from './components/utilities/TrackingManager';
import { NotFound } from './components/pages/NotFound';
import ScrollToAnchor from './components/utilities/ScrollToAnchor';

function AppContent() {
    const location = useLocation();
    const isReviewPage = location.pathname.toLowerCase().includes('review');
    const isCoursePage = location.pathname === '/course';
    const isPrivacyPage = location.pathname === '/privacy';
    const isCookiePage = location.pathname === '/cookie-policy';
    const [showPressel, setShowPressel] = React.useState(false);
    const validPaths = ['/', '/reviews', '/course', '/privacy', '/cookie-policy'];
    const isNotFound = !validPaths.includes(location.pathname);

    useEffect(() => {
        if (config.hero.enableCountdown) {
            document.body.classList.add('has-countdown');
        } else {
            document.body.classList.remove('has-countdown');
        }
    }, []);

    useEffect(() => {
        const hasSeenPressel = sessionStorage.getItem('hasSeenPressel');
        if (config.showPressel && !hasSeenPressel && (location.pathname === '/' || location.pathname === '/course')) {
            setShowPressel(true);
        }
    }, [location.pathname]);

    const handlePresselEnter = () => {
        sessionStorage.setItem('hasSeenPressel', 'true');
        setShowPressel(false);
    };

    const [isHeaderHidden, setIsHeaderHidden] = React.useState(false);

    useEffect(() => {
        const isAllowedPath = location.pathname === '/' || location.pathname === '/course';
        const widgetId = '69b0bf430eb1990a70a38e1f';
        const scriptId = 'lc-widget-loader';

        if (isAllowedPath && !showPressel) {
            if (!document.getElementById(scriptId)) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.src = "https://widgets.leadconnectorhq.com/loader.js";
                script.setAttribute('data-resources-url', "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
                script.setAttribute('data-widget-id', widgetId);
                document.body.appendChild(script);
            }
        } else {
            // Remove script
            const script = document.getElementById(scriptId);
            if (script) script.remove();

            // Cleanup injected DOM elements
            const widgetElements = document.querySelectorAll('[id^="lc_text-widget"], [class^="lc_text-widget"], #chat-widget-container, .chat-widget-container, #lc-chat-widget');
            widgetElements.forEach(el => el.remove());

            // Remove global styles or objects if any (some widgets leave trace)
            if (window.lc_widget) delete window.lc_widget;
        }

        return () => {
            // Optional: clean up on unmount if needed, but the effect handles route changes
        };
    }, [location.pathname, showPressel]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {showPressel && <Pressel onEnter={handlePresselEnter} />}
            <div style={{ display: showPressel ? 'none' : 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                {!isReviewPage && !isNotFound && !isCoursePage && !isPrivacyPage && !isCookiePage && (
                    <>
                        <ScrollToAnchor />
                        {config.hero.enableCountdown && <CountdownBar isHidden={isHeaderHidden} />}
                        <Header isHidden={isHeaderHidden} />
                    </>
                )}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reviews" element={<Review />} />
                    <Route path="/course" element={<CoursePage />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {!isReviewPage && !isNotFound && !isCoursePage && !isPrivacyPage && !isCookiePage && <Footer />}
                <CookieConsent />
                <TrackingManager />
            </div>
        </div>
    );
}

function App() {
    return (
        <HelmetProvider>
            <LanguageProvider>
                <Router>
                    <AppContent />
                </Router>
            </LanguageProvider>
        </HelmetProvider>
    );
}

export default App;
