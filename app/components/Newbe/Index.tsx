"use client"

import styles from "./newbe.module.css";
import Image from "next/image";
import newbeImage from "@/app/Images/Newbe/newbe.png"; // Adjust path as needed
import { useTranslation } from '@/app/hooks/useTranslation';

export default function Newbe() {
  const { t } = useTranslation();
  return <div className={styles.newbe}>
      <h1>{t('newbe.title')}</h1>
    
    <div className={`${styles.newbe_content} ${styles.noFlip}`}>
      <button className={styles.arrowButton}>
        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30.5" r="28.5" stroke="#E2E2E2" strokeWidth="3"/>
          <circle cx="30" cy="30.5" r="25" fill="#F7FBFD"/>
          <path d="M24.6849 29.3999L34.1134 19.9714C34.4563 19.6285 34.9706 19.6285 35.3134 19.9714C35.6563 20.3142 35.6563 20.8285 35.3134 21.1714L26.4849 29.9999L35.3134 38.8285C35.6563 39.1714 35.6563 39.6857 35.3134 40.0285C34.9706 40.3714 34.4563 40.3714 34.1134 40.0285L24.6849 30.5999C24.5134 30.4285 24.4277 30.2571 24.4277 29.9999C24.4277 29.7428 24.5134 29.5714 24.6849 29.3999Z" fill="#023047"/>
        </svg>
      </button>
      
      <div className={styles.imageContainer}>
        <Image 
          src={newbeImage}
          alt="Newbe"
          width={1344}
          height={397}
        />
      </div>

      <button className={styles.arrowButton}>
        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30.5" r="28.5" stroke="#E2E2E2" strokeWidth="3"/>
          <circle cx="30" cy="30.5" r="25" fill="#F7FBFD"/>
          <path d="M35.3151 30.6001L25.8866 40.0286C25.5437 40.3715 25.0294 40.3715 24.6866 40.0286C24.3437 39.6858 24.3437 39.1715 24.6866 38.8286L33.5151 30.0001L24.6866 21.1715C24.3437 20.8286 24.3437 20.3143 24.6866 19.9715C25.0294 19.6286 25.5437 19.6286 25.8866 19.9715L35.3151 29.4001C35.4866 29.5715 35.5723 29.7429 35.5723 30.0001C35.5723 30.2572 35.4866 30.4286 35.3151 30.6001Z" fill="#023047"/>
        </svg>
      </button>
    </div>
  </div>;
}


