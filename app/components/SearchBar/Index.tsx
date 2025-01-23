import styles from './SearchBar.module.css';
import { useTranslation } from '@/app/hooks/useTranslation';
import LensIcon from '../../Images/SearchBar/LensIcons';

export default function SearchBar() {
    const { t } = useTranslation();
    
    return (
        <div className={styles.searchBar}>
            <LensIcon />
            <input type="text" placeholder={t('search.search')} />
        </div>
    )
}
