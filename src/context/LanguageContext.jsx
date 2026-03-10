import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const t = (key, forcedLang) => {
        const targetLang = forcedLang || language;
        // Try requested language, then fallback to English if not found
        return (translations[targetLang] && translations[targetLang][key]) || (translations['en'] && translations['en'][key]) || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
