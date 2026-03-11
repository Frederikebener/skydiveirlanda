import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { CountdownBar } from '../layout/CountdownBar';
import { config } from '../../data/config';
import '../../style-privacy.css';

const sections = [
    { id: 'collect', title: 'How We Collect Your Information' },
    { id: 'use', title: 'How We Use Your Information' },
    { id: 'share', title: 'How We Share Your Information' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies Etc.' },
    { id: 'security', title: 'Security' },
    { id: 'grievance', title: 'Grievance / Data Protection Officer' },
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
            <Helmet>
                <title>{t('privacy.meta.title')}</title>
                <meta name="description" content={t('privacy.meta.description')} />
            </Helmet>
            {config.hero.enableCountdown && <CountdownBar />}
            <Header />
            <div className="privacy-page">
                {/* Hero Section */}
                <section className="privacy-hero">
                    <div className="privacy-hero-container">
                        <h1>Privacy Policy</h1>
                        <p>Skydive Thru Ireland Ltd</p>
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
                        <span className="privacy-last-updated">Last Updated On 10-Mar-2026<br />Effective Date 10-Mar-2026</span>

                        <section className="privacy-section">
                            <p>
                                This Privacy Policy describes the policies of SkydiveThru Ireland, Birr Airfield, Crinkill, Co. Offaly, R42 V380, Irlanda, Birr R42 V380, Ireland, email: info@skydivethru.ie, phone: +353894098150 on the collection, use and disclosure of your information that we collect when you use our website ( https://skydivethru.ie/ ) (the “Service”).
                            </p>
                            <p>
                                By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service.
                            </p>
                            <p>
                                We may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page.
                            </p>
                        </section>

                        <section id="collect" className="privacy-section">
                            <h2>How We Collect Your Information:</h2>
                            <p>We collect/receive information about you in the following manner:</p>
                            <ul>
                                <li>When a user fills up the registration form or otherwise submits personal information</li>
                                <li>Interacts with the website</li>
                                <li>From public sources</li>
                            </ul>
                        </section>

                        <section id="use" className="privacy-section">
                            <h2>How We Use Your Information:</h2>
                            <p>We will use the information that we collect about you for the following purposes:</p>
                            <ul>
                                <li>Marketing/ Promotional</li>
                                <li>Testimonials</li>
                                <li>Customer feedback collection</li>
                                <li>Targeted advertising</li>
                                <li>Manage customer order</li>
                            </ul>
                            <p>If we want to use your information for any other purpose, we will ask you for consent and will use your information only on receiving your consent and then, only for the purpose(s) for which grant consent unless we are required to do otherwise by law.</p>
                        </section>

                        <section id="share" className="privacy-section">
                            <h2>How We Share Your Information:</h2>
                            <p>We will not transfer your personal information to any third party without seeking your consent, except in limited circumstances as described below:</p>
                            <ul>
                                <li>Ad service</li>
                            </ul>
                            <p>We require such third party’s to use the personal information we transfer to them only for the purpose for which it was transferred and not to retain it for longer than is required for fulfilling the said purpose.</p>
                            <p>We may also disclose your personal information for the following: (1) to comply with applicable law, regulation, court order or other legal process; (2) to enforce your agreements with us, including this Privacy Policy; or (3) to respond to claims that your use of the Service violates any third-party rights. If the Service or our company is merged or acquired with another company, your information will be one of the assets that is transferred to the new owner.</p>
                        </section>

                        <section id="rights" className="privacy-section">
                            <h2>Your Rights:</h2>
                            <p>Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws.</p>
                            <p>To exercise these rights, you can write to us at info@skydivethru.ie. We will respond to your request in accordance with applicable law.</p>
                            <p>Do note that if you do not allow us to collect or process the required personal information or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought.</p>
                        </section>

                        <section id="cookies" className="privacy-section">
                            <h2>Cookies Etc.</h2>
                            <p>To learn more about how we use these and your choices in relation to these tracking technologies, please refer to our <Link to="/cookie-policy" className="cookie-btn-text">Cookie Policy</Link>.</p>
                        </section>

                        <section id="security" className="privacy-section">
                            <h2>Security:</h2>
                            <p>The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk.</p>
                        </section>

                        <section id="grievance" className="privacy-section">
                            <h2>Grievance / Data Protection Officer:</h2>
                            <p>If you have any queries or concerns about the processing of your information that is available with us, you may email our Grievance Officer at:</p>
                            <p>
                                <strong>SkydiveThru Ireland</strong><br />
                                Birr Airfield, Crinkill, Co. Offaly, R42 V380, Irlanda<br />
                                Email: <a href="mailto:info@skydivethru.ie">info@skydivethru.ie</a>
                            </p>
                            <p>We will address your concerns in accordance with applicable law.</p>
                        </section>

                        <p style={{ marginTop: '40px', fontSize: '12px', color: '#666' }}>Privacy Policy generated with CookieYes.</p>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
};
