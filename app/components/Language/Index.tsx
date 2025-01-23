'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import styles from './Language.module.css';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' }
];

export default function Language() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { language, setLanguage } = useLanguage();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (langCode: string) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    

    return (

        <div className={styles.languageContainer} ref={dropdownRef}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6875 12.5C15.6875 13.2371 15.6477 13.9477 15.5779 14.625H9.42207C9.34902 13.9477 9.3125 13.2371 9.3125 12.5C9.3125 11.7629 9.35234 11.0523 9.42207 10.375H15.5779C15.651 11.0523 15.6875 11.7629 15.6875 12.5ZM16.6437 10.375H20.7311C20.907 11.0557 21 11.7662 21 12.5C21 13.2338 20.907 13.9443 20.7311 14.625H16.6437C16.7135 13.941 16.75 13.2305 16.75 12.5C16.75 11.7695 16.7135 11.059 16.6437 10.375ZM20.3824 9.3125H16.5076C16.1756 7.19082 15.5182 5.41445 14.6715 4.27891C17.2713 4.96621 19.3863 6.85215 20.3791 9.3125H20.3824ZM15.4318 9.3125H9.56816C9.7707 8.10391 10.0828 7.03477 10.4646 6.16816C10.8133 5.38457 11.2018 4.8168 11.577 4.4582C11.9488 4.10625 12.2576 4 12.5 4C12.7424 4 13.0512 4.10625 13.423 4.4582C13.7982 4.8168 14.1867 5.38457 14.5354 6.16816C14.9205 7.03145 15.2293 8.10059 15.4318 9.3125ZM8.49238 9.3125H4.61758C5.61367 6.85215 7.72539 4.96621 10.3285 4.27891C9.48184 5.41445 8.82441 7.19082 8.49238 9.3125ZM4.26895 10.375H8.35625C8.28652 11.059 8.25 11.7695 8.25 12.5C8.25 13.2305 8.28652 13.941 8.35625 14.625H4.26895C4.09297 13.9443 4 13.2338 4 12.5C4 11.7662 4.09297 11.0557 4.26895 10.375ZM10.4646 18.8285C10.0795 17.9652 9.7707 16.8961 9.56816 15.6875H15.4318C15.2293 16.8961 14.9172 17.9652 14.5354 18.8285C14.1867 19.6121 13.7982 20.1799 13.423 20.5385C13.0512 20.8938 12.7424 21 12.5 21C12.2576 21 11.9488 20.8938 11.577 20.5418C11.2018 20.1832 10.8133 19.6154 10.4646 18.8318V18.8285ZM8.49238 15.6875C8.82441 17.8092 9.48184 19.5855 10.3285 20.7211C7.72539 20.0338 5.61367 18.1479 4.61758 15.6875H8.49238ZM20.3824 15.6875C19.3863 18.1479 17.2746 20.0338 14.6748 20.7211C15.5215 19.5855 16.1756 17.8092 16.5109 15.6875H20.3824Z" fill="#6C757D"/>
</svg>


            <div className={styles.languageSelector} onClick={toggleDropdown}>
                <span className={styles.languageText}>
                    {languages.find(lang => lang.code === language)?.label || 'English'}
                </span>
                <svg 
                    className={`${styles.arrow} ${isOpen ? styles.flipped : ''}`}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 15.375l-6-6 1.06-1.06L12 13.255l4.94-4.94 1.06 1.06z" fill="#6C757D"/>
                </svg>
            </div>
            {isOpen && (
                <div className={styles.dropdown}>
                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            className={`${styles.dropdownItem} ${language === lang.code ? styles.active : ''}`}
                            onClick={() => selectLanguage(lang.code)}
                        >
                            {lang.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}