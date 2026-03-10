import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { CountdownBar } from '../layout/CountdownBar';
import { config } from '../../data/config';
import '../../style-privacy.css';

const sections = [
    { id: 'collect', title: 'Information We Collect' },
    { id: 'use', title: 'How We Use Your Information' },
    { id: 'legal', title: 'Legal Basis for Processing (GDPR)' },
    { id: 'retention', title: 'Data Retention' },
    { id: 'sharing', title: 'Data Sharing and Third Parties' },
    { id: 'cookies', title: 'Cookies and Tracking Technologies' },
    { id: 'analytics', title: 'Analytics and Marketing Tools' },
    { id: 'newsletter', title: 'Newsletter and Communications' },
    { id: 'payment', title: 'Payment Information' },
    { id: 'rights', title: 'User Rights Under GDPR' },
    { id: 'security', title: 'Data Security' },
    { id: 'children', title: "Children's Information" },
    { id: 'changes', title: 'Changes to This Privacy Policy' },
    { id: 'contact', title: 'Contact Information' },
];

export const PrivacyPolicy = () => {
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

    return (
        <>
            {config.hero.enableCountdown && <CountdownBar />}
            <Header />
            <div className="privacy-page">
                {/* Hero Section */}
                <section className="privacy-hero">
                    <div className="privacy-hero-container">
                        <h1>Privacy Policy</h1>
                        <p>
                            This page describes how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR).
                        </p>
                    </div>
                </section>

                {/* Breadcrumbs */}
                <nav className="privacy-breadcrumbs">
                    <div className="breadcrumbs-container">
                        <Link to="/">{t('footer.home') || 'Home'}</Link>
                        <span>&rsaquo;</span>
                        <span>Privacy Policy</span>
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
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="privacy-main-column">
                        <span className="privacy-last-updated">Last Updated: [Placeholder Date]</span>

                        <section className="privacy-section">
                            <p>
                                We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                            <div className="placeholder-text">
                                [Insert introductory legal text here regarding company identity, scope of policy, and general GDPR compliance statement.]
                            </div>
                            <p style={{ marginTop: '20px' }}>
                                For information on how we use cookies, please see our <Link to="/cookie-policy" className="cookie-btn-text">Cookie Policy</Link>.
                            </p>
                        </section>

                        {sections.map((section) => (
                            <section key={section.id} id={section.id} className="privacy-section">
                                <h2>{section.title}</h2>
                                <div className="placeholder-text">
                                    [Placeholder: Legal content for {section.title.toLowerCase()} will be inserted here. This section will detail the specific data practices, legal obligations, and user protections relevant to this topic.]
                                </div>
                                {section.id === 'contact' && (
                                    <p style={{ marginTop: '20px' }}>
                                        Email: <a href="mailto:contact@skydivethru.ie">contact@skydivethru.ie</a>
                                    </p>
                                )}
                            </section>
                        ))}
                    </main>
                </div>
                <Footer />
            </div>
        </>
    );
};
