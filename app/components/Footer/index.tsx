'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
        <svg width="244" height="60" viewBox="0 0 244 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M131.848 57.2687V59.3017C131.848 59.6875 131.532 59.9898 131.154 59.9898H113.834C113.445 59.9898 113.14 59.677 113.14 59.3017V25.6162L97.2718 41.3486L81.4033 25.6162V59.3121C81.4033 59.6979 81.0878 60.0002 80.7093 60.0002H63.3791C62.99 60.0002 62.6851 59.6875 62.6851 59.3121V0.698767C62.6851 0.323441 63.0005 0.0106699 63.3791 0.0106699H81.7503C81.9291 0.0106699 82.1184 0.0940756 82.2446 0.219184L97.2718 15.1175L112.299 0.208758C112.425 0.0732242 112.604 0.000244141 112.793 0.000244141H131.154C131.543 0.000244141 131.848 0.313016 131.848 0.688341V2.67965C129.766 3.96202 127.82 5.48417 126.054 7.25654C119.513 13.7413 116.074 22.7179 116.6 31.8821C117.22 42.558 123.193 51.8786 131.848 57.2583V57.2687Z" fill="#FAFAFA"/>
<path d="M165.562 46.666C164.436 45.5609 164.436 43.7468 165.562 42.6312L178.307 29.9953L165.562 17.3593C165.015 16.8276 164.72 16.1082 164.72 15.3471C164.72 14.5861 165.015 13.8667 165.562 13.335L177.813 1.18902C178.202 0.803268 178.685 0.563477 179.201 0.45922C179.106 0.198577 178.854 0.000488281 178.559 0.000488281H161.229C160.84 0.000488281 160.535 0.31326 160.535 0.688586V2.22117L159.073 1.71031C155.845 0.573903 152.459 0.000488281 148.989 0.000488281C143.657 0.000488281 138.536 1.36626 134.035 3.91013C133.667 4.11865 133.299 4.33759 132.941 4.56695C132.573 4.78589 132.205 5.02568 131.848 5.2759C130.333 6.30805 128.914 7.48615 127.589 8.79979C121.49 14.8467 118.272 23.2186 118.776 31.7781C119.323 41.2655 124.402 49.5852 131.848 54.6834C132.205 54.9336 132.563 55.1734 132.941 55.4027C133.299 55.6217 133.656 55.8406 134.035 56.0387C138.273 58.4575 143.142 59.8754 148.305 59.9901C152.017 60.0735 155.645 59.5 159.073 58.2907L160.535 57.7798V59.302C160.535 59.6877 160.85 59.9901 161.229 59.9901H178.559C178.854 59.9901 179.117 59.8024 179.201 59.5417C178.685 59.4375 178.202 59.1768 177.813 58.812L165.562 46.666ZM157.149 38.0856C154.972 40.2437 152.07 41.4323 148.999 41.4323C142.637 41.4323 137.463 36.3028 137.463 29.9953C137.463 26.9405 138.662 24.063 140.839 21.9049C143.016 19.7468 145.907 18.5583 148.999 18.5583C152.091 18.5583 154.972 19.7468 157.149 21.9049C159.326 24.063 160.535 26.9405 160.535 29.9953C160.535 33.05 159.326 35.9275 157.159 38.0856H157.149Z" fill="#FAFAFA"/>
<path d="M222.137 44.1633C222.411 44.4343 222.411 44.8722 222.137 45.1329L209.886 57.2788C209.623 57.5499 209.171 57.5499 208.908 57.2788L194.628 43.1207L181.441 56.1945L180.347 57.2788C180.074 57.5499 179.621 57.5499 179.359 57.2788L167.108 45.1329C166.834 44.8618 166.834 44.4239 167.108 44.1633L179.253 32.1111L181.388 29.9947L167.108 15.8366C166.981 15.7115 166.908 15.5342 166.908 15.3466C166.908 15.1589 166.981 14.9921 167.108 14.867L179.253 2.81488L179.359 2.71062C179.621 2.44998 180.074 2.44998 180.347 2.71062L181.441 3.79489L194.628 16.8792L208.908 2.71062C209.171 2.44998 209.623 2.44998 209.897 2.71062L222.148 14.8566C222.421 15.1276 222.421 15.5655 222.148 15.8262L207.867 29.9843L222.148 44.1528L222.137 44.1633Z" fill="#FFB703"/>
<path d="M58.7206 0H1.7877C0.809722 0 0 0.792355 0 1.77237V13.4909L26.5105 8.85143V22.0295L0 26.669V30.1303L19.854 26.6586V39.8471L0 43.3084V46.7906L35.1756 40.6394C38.6143 40.0348 41.422 36.6777 41.422 33.1538V25.7932C41.422 22.2693 38.6143 19.9027 35.1756 20.497L29.2026 21.5395V8.36143L39.729 6.5265C47.7736 5.11903 54.3145 10.6551 54.3145 18.8914V35.5517C54.3145 43.7672 47.7736 51.6073 39.729 53.0148L0.999008 59.8019C1.24087 59.927 1.49325 60 1.7877 60H58.7206C59.7091 60 60.5083 59.2076 60.5083 58.2276V1.77237C60.5083 0.792355 59.7091 0 58.7206 0ZM37.0264 29.8384C37.2893 29.9322 37.2893 30.318 37.0264 30.4952L25.5956 38.3354C25.3538 38.5022 25.0804 38.3666 25.0804 38.0956V26.4188C25.0804 26.1477 25.3538 25.9183 25.5956 26.0017L37.0264 29.8384Z" fill="#FAFAFA"/>
<path d="M37.0267 30.4952L25.596 38.3354C25.3541 38.5022 25.0807 38.3667 25.0807 38.0956V26.4188C25.0807 26.1477 25.3541 25.9184 25.596 26.0018L37.0267 29.8384C37.2896 29.9323 37.2896 30.318 37.0267 30.4952Z" fill="#FFB703"/>
</svg>

        </div>
        
        <div className={styles.linksContainer}>
          <div className={styles.column}>
            <h3>{t.home.title}</h3>
            <ul>
              {t.home.links.map((link, index) => (
                <li key={index}><Link href="/">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>{t.about.title}</h3>
            <ul>
              {t.about.links.map((link, index) => (
                <li key={index}><Link href="/">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>{t.courses.title}</h3>
            <ul>
              {t.courses.links.map((link, index) => (
                <li key={index}><Link href="/">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>{t.instructors.title}</h3>
            <ul>
              {t.instructors.links.map((link, index) => (
                <li key={index}><Link href="/">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>{t.account.title}</h3>
            <ul>
              {t.account.links.map((link, index) => (
                <li key={index}><Link href="/">{link}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;