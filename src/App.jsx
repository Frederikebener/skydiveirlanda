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
import { NotFound } from './components/pages/NotFound';
import ScrollToAnchor from './components/utilities/ScrollToAnchor';

function AppContent() {
    const location = useLocation();
    const isReviewPage = location.pathname === '/avaliar';
    const isCoursePage = location.pathname === '/course';
    const [showPressel, setShowPressel] = React.useState(false);
    const isNotFound = location.pathname !== '/' && location.pathname !== '/avaliar' && location.pathname !== '/course';

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
        const handleScroll = () => {
            const packagesSection = document.getElementById('packages');
            if (packagesSection) {
                const rect = packagesSection.getBoundingClientRect();
                // Hide if the top of the packages section is near the top of the viewport
                // Adjust threshold as needed (e.g., 100px)
                if (rect.top <= 100) {
                    setIsHeaderHidden(true);
                } else {
                    setIsHeaderHidden(false);
                }
            }

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
                {!isReviewPage && !isNotFound && !isCoursePage && (
                    <>
                        <ScrollToAnchor />
                        <CountdownBar isHidden={isHeaderHidden} />
                        <Header isHidden={isHeaderHidden} />
                    </>
                )}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/avaliar" element={<Review />} />
                    <Route path="/course" element={<CoursePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {!isReviewPage && !isNotFound && !isCoursePage && <Footer />}
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
