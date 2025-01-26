'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './SearchBar.module.css';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function SearchBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const { language } = useLanguage();
    const { t } = useTranslation();
    const isRTL = language === 'ar';
    const searchWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSearch = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div 
            ref={searchWrapperRef}
            className={`${styles.searchWrapper} ${isExpanded ? styles.expanded : ''} ${isRTL ? styles.rtl : ''}`}
        >
            <div className={styles.searchBar}>
                <svg
                    className={styles.searchIcon}
                    onClick={toggleSearch}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <input
                    type="text"
                    placeholder={t('search.placeholder')}
                    className={styles.searchInput}
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
}
