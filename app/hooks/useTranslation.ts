import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/translations';

export function useTranslation() {
    const { language } = useLanguage();
    
    const t = (key: string): string => {
        const keys = key.split('.');
        let value: any = translations[language as keyof typeof translations];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value as string || key;
    };

    return { t };
} 