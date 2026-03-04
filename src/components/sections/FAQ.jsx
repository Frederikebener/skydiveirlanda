import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../style-coursepage.css';

export const FAQ = () => {
    const { t } = useLanguage();
    const [faqOpen, setFaqOpen] = useState(null);

    const questions = t('faq.questions', { returnObjects: true }) || [];

    const toggleFaq = (index) => {
        if (faqOpen === index) {
            setFaqOpen(null);
        } else {
            setFaqOpen(index);
        }
    };

    return (
        <section className="cp-faq" id="faq">
            <div className="cp-faq-container">
                <div className="cp-faq-header">
                    <span className="cp-faq-badge">{t('faq.badge')}</span>
                    <h2 dangerouslySetInnerHTML={{ __html: t('faq.title') }} />
                    <p style={{ marginTop: '30px', fontSize: '16px', color: '#444', lineHeight: '1.6' }}>
                        {t('faq.description') || 'Separamos as principais dúvidas de nossos clientes para ajudar você a entender como podemos transformar sua experiência.'}
                    </p>
                </div>
                <div className="cp-faq-content">
                    <div className="cp-faq-list">
                        {questions.map((faq, index) => (
                            <div
                                key={index}
                                className={`cp-faq-item ${faqOpen === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="cp-faq-question">
                                    <h3>{faq.question}</h3>
                                    <div className="cp-faq-toggle">
                                        {faqOpen === index ? '-' : '+'}
                                    </div>
                                </div>
                                <div className="cp-faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
