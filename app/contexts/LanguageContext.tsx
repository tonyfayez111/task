'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
    dir: string;
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
    dir: 'ltr'
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState('en');
    const [dir, setDir] = useState('ltr');

    useEffect(() => {
        // Update direction based on language
        setDir(language === 'ar' ? 'rtl' : 'ltr');
        // Update document direction
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, dir }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext); 