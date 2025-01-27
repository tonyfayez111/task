"use client"
import styles from './AboutUs.module.css';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.contentContainer}>
                <div>
                    <h1 className={styles.title}>{t("aboutUs.title")}</h1>
                    <h2 className={styles.header}>{t("aboutUs.header")}</h2>
                    <p className={styles.paragraph}>
                        {t("aboutUs.description")}
                    </p>
                    <button className={styles.learnMoreBtn}>{t("aboutUs.learnMore")}</button>
                </div>
            </div>
        </div>
    );
}