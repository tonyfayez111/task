"use client"
import styles from "./whoarewe.module.css";
import whoarewe from "@/app/Images/WhoAreWe/whoarewe.jpg";
import Image from "next/image";
import { useTranslation } from '@/app/hooks/useTranslation';

export default function WhoAreWe() {
    const { t } = useTranslation();
    return (
        <div id="whoarewe" className={styles.whoarewe_container}>
            <div className={styles.whoarewe_content_left}>
                <h1>{t("whoarewe.title")}</h1>
                <p>{t("whoarewe.description")}</p>
                <button>
                    {t("whoarewe.learnMore")}
                   
                </button>
            </div>
            <div className={styles.whoarewe_content_right}>
                <Image 
                    src={whoarewe} 
                    alt="whoarewe"
                    width={500}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    )
}