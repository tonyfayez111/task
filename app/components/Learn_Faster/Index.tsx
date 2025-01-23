'use client';

import styles from "./Learn.module.css";
import { useTranslation } from '@/app/hooks/useTranslation';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function LearnFaster() {
    const { t } = useTranslation();
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    
    return (
        <div className={styles.learnContainer}>
            <div className={styles.content}>
                <h1>{t('learnfaster.title')} <span style={{ color: '#FFB703' }}>ED max</span>!</h1>
                <h2>{t('learnfaster.description')}</h2>
                <p>{t('learnfaster.paragraph')}</p>
                <button>
                    {t('learnfaster.button')}
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}
                    >
                        <path d="M14.0001 5L21.0001 12M21.0001 12L14.0001 19M21.0001 12L3.00012 12" 
                            stroke="#FEFEFE" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

