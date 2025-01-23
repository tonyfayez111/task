import styles from './Login.module.css';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function Login() {
    const { t } = useTranslation();
    return (
        <div className={styles.loginButton}>
            <button>{t('login.login_signup')}</button>
        </div>
    )
}