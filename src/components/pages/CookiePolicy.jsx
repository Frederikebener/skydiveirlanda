import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { CountdownBar } from '../layout/CountdownBar';
import { config } from '../../data/config';
import '../../style-privacy.css'; // Reusing base layout styles

const sections = [
    { id: 'legal', title: '1. Legal Basis and Regulatory Compliance' },
    { id: 'what', title: '2. What Are Cookies' },
    { id: 'purpose', title: '3. Purpose of Using Cookies' },
    { id: 'categories', title: '4. Categories of Cookies Used' },
    { id: 'third-party', title: '5. Third-Party Cookies' },
    { id: 'consent', title: '6. User Consent' },
    { id: 'management', title: '7. Cookie Management' },
    { id: 'retention', title: '8. Retention Period' },
    { id: 'rights', title: '9. User Rights' },
    { id: 'security', title: '10. Data Security' },
    { id: 'changes', title: '11. Changes to This Policy' },
    { id: 'contact', title: '12. Contact' },
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
            <Helmet>
                <title>{t('cookie.meta.title')}</title>
                <meta name="description" content={t('cookie.meta.description')} />
            </Helmet>
            {config.hero.enableCountdown && <CountdownBar />}
            <Header />
            <div className="privacy-page">
                {/* Hero Section */}
                <section className="privacy-hero">
                    <div className="privacy-hero-container">
                        <h1>Cookie Policys</h1>
                        <p>Skydive Thru Ireland Ltd</p>
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
                            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
                                <button onClick={openCookieSettings} className="cookie-btn-text" style={{ fontSize: '0.9rem' }}>
                                    Manage Cookie Preferences
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="privacy-main-column">
                        <span className="privacy-last-updated">Last Updated: March 2026</span>

                        <section className="privacy-section">
                            <p>
                                This Cookie Policy explains how Skydive Thru Ireland Ltd (“Skydive Thru Ireland”, “we”, “our” or “the company”) uses cookies and similar technologies when you access or use our website.
                            </p>
                            <p>
                                This policy should be read together with our Privacy Policy, which describes how we collect, use, and protect personal data.
                            </p>
                        </section>

                        <section id="legal" className="privacy-section">
                            <h2>1. Legal Basis and Regulatory Compliance</h2>
                            <p>The use of cookies and similar technologies on this website complies with:</p>
                            <ul>
                                <li>General Data Protection Regulation (GDPR – Regulation (EU) 2016/679)</li>
                                <li>ePrivacy Directive (Directive 2002/58/EC)</li>
                                <li>Irish ePrivacy Regulations</li>
                                <li>Guidance from the Irish Data Protection Commission (DPC)</li>
                                <li>Guidance from the European Data Protection Board (EDPB)</li>
                            </ul>
                            <p>Cookies that are not strictly necessary for the operation of the website are used only with the user’s prior consent, obtained through our cookie consent management system.</p>
                        </section>

                        <section id="what" className="privacy-section">
                            <h2>2. What Are Cookies</h2>
                            <p>Cookies are small text files stored on a user’s device when they visit a website. These files allow the website to recognize the user’s device and store certain information related to browsing activity.</p>
                            <p>Cookies may be classified as:</p>
                            <ul>
                                <li><strong>Session Cookies:</strong> Temporary cookies that are automatically deleted when the browser is closed.</li>
                                <li><strong>Persistent Cookies:</strong> Remain stored on the device for a defined period or until deleted by the user.</li>
                            </ul>
                            <p>Cookies may also be classified as:</p>
                            <ul>
                                <li><strong>First-Party Cookies:</strong> Cookies set directly by our website.</li>
                                <li><strong>Third-Party Cookies:</strong> Cookies set by external services integrated into the website.</li>
                            </ul>
                        </section>

                        <section id="purpose" className="privacy-section">
                            <h2>3. Purpose of Using Cookies</h2>
                            <p>We use cookies and similar technologies for the following legitimate purposes:</p>
                            <ul>
                                <li>ensuring the secure and proper functioning of the website</li>
                                <li>enabling essential website functionalities</li>
                                <li>improving the user browsing experience</li>
                                <li>understanding how visitors use the website</li>
                                <li>analyzing website performance and traffic</li>
                                <li>optimizing content, marketing, and digital communication</li>
                            </ul>
                            <p>Data collected through cookies is processed according to the principles of data minimization, purpose limitation, security of processing, and storage limitation, as provided for in Article 5 of the GDPR.</p>
                        </section>

                        <section id="categories" className="privacy-section">
                            <h2>4. Categories of Cookies Used</h2>
                            <h3>4.1 Strictly Necessary Cookies</h3>
                            <p>These cookies are essential for the operation of the website and cannot be disabled in our systems. They enable:</p>
                            <ul>
                                <li>secure website navigation</li>
                                <li>operation of forms and booking systems</li>
                                <li>protection against fraud or cyber-attacks</li>
                                <li>management of user sessions</li>
                            </ul>
                            <p>The legal basis for the use of these cookies is the legitimate interest of the company in operating a secure and functional website, in accordance with Article 6(1)(f) of the GDPR.</p>

                            <h3 style={{ marginTop: '25px' }}>4.2 Performance and Analytics Cookies</h3>
                            <p>These cookies allow us to analyze how visitors use the website, including:</p>
                            <ul>
                                <li>most visited pages</li>
                                <li>time spent on the website</li>
                                <li>browsing behavior</li>
                                <li>technical performance</li>
                            </ul>
                            <p>This data is aggregated and used exclusively to improve the user experience. The legal basis for the use of these cookies is user consent, in accordance with Article 6(1)(a) of the GDPR. Tools used may include services such as web traffic analytics platforms.</p>

                            <h3 style={{ marginTop: '25px' }}>4.3 Functional Cookies</h3>
                            <p>These cookies allow the website to remember user preferences, such as language, region, and customized settings. These cookies improve the user experience and are used only with user consent.</p>

                            <h3 style={{ marginTop: '25px' }}>4.4 Marketing and Advertising Cookies</h3>
                            <p>These cookies may be used to present relevant advertisements to users, measure the effectiveness of marketing campaigns, limit the repetition of advertisements, and create interest profiles based on browsing behavior. These cookies may be set by advertising partners or social media platforms. The legal basis for their use is explicit user consent, in accordance with Article 6(1)(a) of the GDPR.</p>
                        </section>

                        <section id="third-party" className="privacy-section">
                            <h2>5. Third-Party Cookies</h2>
                            <p>Our website may integrate third-party services that set their own cookies, including but not limited to:</p>
                            <ul>
                                <li>traffic analytics tools</li>
                                <li>embedded video platforms</li>
                                <li>online booking systems</li>
                                <li>social media services</li>
                                <li>digital marketing tools</li>
                            </ul>
                            <p>These providers act as independent data controllers and are responsible for processing data collected through their cookies. We recommend that users review the respective privacy policies of these services.</p>
                        </section>

                        <section id="consent" className="privacy-section">
                            <h2>6. User Consent</h2>
                            <p>In accordance with European data protection regulations, consent for the use of cookies must be freely given, specific, informed, and unambiguous and may be withdrawn at any time.</p>
                            <p>When you access our website for the first time, a cookie consent banner will be displayed allowing you to:</p>
                            <ul>
                                <li>accept all cookies</li>
                                <li>reject non-essential cookies</li>
                                <li>configure cookie preferences</li>
                            </ul>
                            <p>Non-essential cookies will not be activated before valid consent is obtained.</p>
                        </section>

                        <section id="management" className="privacy-section">
                            <h2>7. Cookie Management</h2>
                            <p>Users may manage or delete cookies at any time through their browser settings or by using the cookie management options available in the website’s cookie banner. Disabling certain cookies may affect the functionality of the website.</p>
                            <p style={{ marginTop: '20px' }}>
                                Manage your settings directly by clicking here: <button onClick={openCookieSettings} className="cookie-btn-text">Manage Preferences</button>
                            </p>
                        </section>

                        <section id="retention" className="privacy-section">
                            <h2>8. Retention Period</h2>
                            <p>Cookies are stored only for the time necessary to fulfill their purposes. Depending on the type of cookie, the retention period may vary between the duration of the browser session and up to a maximum of 24 months, unless a different legal requirement applies.</p>
                        </section>

                        <section id="rights" className="privacy-section">
                            <h2>9. User Rights</h2>
                            <p>Where cookies collect personal data, users have rights guaranteed under the GDPR, including the right of access, rectification, erasure, restriction of processing, objection, and data portability.</p>
                            <p>Users also have the right to lodge a complaint with the competent supervisory authority. In Ireland, the responsible authority is the <strong>Data Protection Commission (DPC)</strong>.</p>
                        </section>

                        <section id="security" className="privacy-section">
                            <h2>10. Data Security</h2>
                            <p>We implement appropriate technical and organizational measures to protect data collected through the website against unauthorized access, loss, alteration, or improper disclosure. These measures are periodically reviewed to ensure compliance with legal obligations.</p>
                        </section>

                        <section id="changes" className="privacy-section">
                            <h2>11. Changes to This Policy</h2>
                            <p>We may update this Cookie Policy periodically to reflect legal, regulatory, or operational changes. The most recent version will always be available on this page, indicating the date of the last update.</p>
                        </section>

                        <section id="contact" className="privacy-section">
                            <h2>12. Contact</h2>
                            <p>For questions regarding this Cookie Policy or the processing of personal data, please contact:</p>
                            <p><strong>Skydive Thru Ireland Ltd</strong></p>
                            <p>Through the contact address available on our website or via email: <a href="mailto:contact@skydivethru.ie">contact@skydivethru.ie</a></p>
                        </section>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
};
