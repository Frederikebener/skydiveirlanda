import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HelpCircle } from 'lucide-react';

export const FAQ = () => {
    const { t } = useLanguage();
    const [openIndexes, setOpenIndexes] = useState([0]);

    const questions = t('faq.questions') || [];

    const toggleAccordion = (index) => {
        setOpenIndexes(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const leftColumn = questions.filter((_, index) => index % 2 === 0);
    const rightColumn = questions.filter((_, index) => index % 2 !== 0);

    const renderFaqItem = (item, index, globalIndex) => (
        <div
            key={globalIndex}
            className={`faq-card ${openIndexes.includes(globalIndex) ? 'active' : ''}`}
            onClick={() => toggleAccordion(globalIndex)}
        >
            <div className="faq-card-header">
                <h3 className="faq-question">{item.question}</h3>
                <div className="faq-icon-circle">
                    {openIndexes.includes(globalIndex) ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    )}
                </div>
            </div>
            <div className="faq-answer-wrapper">
                <p className="faq-answer">{item.answer}</p>
            </div>
        </div>
    );

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="faq-header">
                    <div className="faq-title-icon">
                        <HelpCircle size={48} strokeWidth={1.5} />
                    </div>
                    <h2 className="faq-title-main" dangerouslySetInnerHTML={{ __html: t('faq.title') }}></h2>
                    <p className="faq-description">{t('faq.description') || 'Separamos as principais dúvidas de nossos clientes para ajudar você a entender como podemos transformar sua experiência.'}</p>
                    <div className="faq-title-bar"></div>
                </div>

                <div className="faq-grid">
                    <div className="faq-column">
                        {leftColumn.map((item, i) => renderFaqItem(item, i, i * 2))}
                    </div>
                    <div className="faq-column">
                        {rightColumn.map((item, i) => renderFaqItem(item, i, (i * 2) + 1))}
                    </div>
                </div>
            </div>
        </section>
    );
};
