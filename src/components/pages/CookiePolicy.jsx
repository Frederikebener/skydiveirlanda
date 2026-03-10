import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { CountdownBar } from '../layout/CountdownBar';
import { config } from '../../data/config';
import '../../style-privacy.css'; // Reusing base layout styles

const sections = [
    { id: 'intro', title: 'Introduction to Cookies' },
    { id: 'what', title: 'What Cookies Are' },
    { id: 'types', title: 'Types of Cookies We Use' },
    { id: 'necessary', title: 'Necessary Cookies' },
    { id: 'analytics', title: 'Analytics Cookies' },
    { id: 'marketing', title: 'Marketing and Advertising Cookies' },
    { id: 'third-party', title: 'Third-Party Cookies' },
    { id: 'control', title: 'How Users Can Control Cookies' },
    { id: 'changes', title: 'Changes to This Cookie Policy' },
    { id: 'contact', title: 'Contact Information' },
];

export const CookiePolicy = () => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const openCookieSettings = (e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('openCookieSettings'));
    };

    return (
        <>
            {config.hero.enableCountdown && <CountdownBar />}
            <Header />
            <div className="privacy-page">
                {/* Hero Section */}
                <section className="privacy-hero">
                    <div className="privacy-hero-container">
                        <h1>Cookie Policy</h1>
                        <p>
                            This page explains how we use cookies and similar technologies to recognize you when you visit our website.
                        </p>
                    </div>
                </section>

                {/* Breadcrumbs */}
                <nav className="privacy-breadcrumbs">
                    <div className="breadcrumbs-container">
                        <Link to="/">{t('footer.home') || 'Home'}</Link>
                        <span>&rsaquo;</span>
                        <span>Cookie Policy</span>
                    </div>
                </nav>

                <div className="privacy-content-layout">
                    {/* Sidebar Navigation */}
                    <aside className="privacy-sidebar">
                        <div className="privacy-sidebar-nav">
                            <h3>Contents</h3>
                            <ul>
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <a
                                            href={`#${section.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(section.id);
                                            }}
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '20px', paddingTOp: '20px', borderTop: '1px solid #eee' }}>
                                <button onClick={openCookieSettings} className="cookie-btn-text" style={{ fontSize: '0.9rem' }}>
                                    Manage Cookie Preferences
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="privacy-main-column">
                        <span className="privacy-last-updated">Last Updated: [Placeholder Date]</span>

                        <section className="privacy-section">
                            <p>
                                We believe in being clear and open about how we collect and use data related to you. In the spirit of transparency, this policy provides detailed information about how and when we use cookies on our Website.
                            </p>
                            <div className="placeholder-text">
                                [Insert introductory legal text here explaining that this Cookie Policy applies to any product or service that posts this policy or links to it.]
                            </div>
                        </section>

                        {sections.map((section) => (
                            <section key={section.id} id={section.id} className="privacy-section">
                                <h2>{section.title}</h2>
                                <div className="placeholder-text">
                                    [Placeholder: Legal content for {section.title.toLowerCase()} will be inserted here. This section will detail the specific technical and legal details of cookie usage for this category.]
                                </div>
                                {section.id === 'control' && (
                                    <p style={{ marginTop: '20px' }}>
                                        You can also manage your settings directly by clicking here: <button onClick={openCookieSettings} className="cookie-btn-text">Manage Preferences</button>
                                    </p>
                                )}
                                {section.id === 'contact' && (
                                    <p style={{ marginTop: '20px' }}>
                                        Email: <a href="mailto:contact@skydivethru.ie">contact@skydivethru.ie</a>
                                    </p>
                                )}
                            </section>
                        ))}
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
};
