"use client"
import styles from './Instructors.module.css';
import instructor from '@/app/Images/Instructor/instructor.png';
import Image from 'next/image';
import coursesicon from '@/app/Images/InstructorIcons/coursesicon.png';
import centersicon from '@/app/Images/InstructorIcons/centersicon.png';
import studentsicon from '@/app/Images/InstructorIcons/studentsicon.png';
import viewsicon from '@/app/Images/InstructorIcons/viewsicon.png';
import { useTranslation } from '@/app/hooks/useTranslation';

interface InstructorData {
    id: number;
    name: string;
    category: string;
    image: any;
    courses: number;
    students: number;
    views: number;
    centers: number;
}

const instructors: InstructorData[] = [
    {
        id: 1,
        name: "Mohammed Salem",
        category: "Marketing",
        image: instructor,
        courses: 50,
        students: 120,
        views: 120,
        centers: 120
    },
    {
        id: 2,
        name: "Mohammed Salem",
        category: "Marketing",
        image: instructor,
        courses: 50,
        students: 120,
        views: 120,
        centers: 120
    },
    {
        id: 3,
        name: "Mohammed Salem",
        category: "Marketing",
        image: instructor,
        courses: 50,
        students: 120,
        views: 120,
        centers: 120
    },
    // Add more instructors as needed
];

export default function Instructors() {
    const { t } = useTranslation();

    return (
        <div id="instructors" className={styles.instructorsSection} >
            <h1 className={styles.title}>{t('instructors.title')}</h1>
            <div className={styles.instructorsGrid}>
                {instructors.map((instructor) => (
                    <div key={instructor.id} className={styles.instructorCard}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={instructor.image}
                                alt={instructor.name}
                                className={styles.instructorImage}
                                width={200}
                                height={200}
                            />
                        </div>
                        <h2 className={styles.instructorName}>{instructor.name}</h2>
                        <p className={styles.category}>{instructor.category}</p>
                        
                        <div className={styles.statsContainer}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>{instructor.courses}</span>
                                <span className={styles.statIcon}>
                                    <Image src={coursesicon} alt={t('instructors.stats.courses')} width={24} height={24} />
                                </span>
                                <span className={styles.statLabel}>{t('instructors.stats.courses')}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>{instructor.students}</span>
                                <span className={styles.statIcon}>
                                    <Image src={studentsicon} alt={t('instructors.stats.students')} width={24} height={24} />
                                </span>
                                <span className={styles.statLabel}>{t('instructors.stats.students')}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>{instructor.views}</span>
                                <span className={styles.statIcon}>
                                    <Image src={viewsicon} alt={t('instructors.stats.views')} width={24} height={24} />
                                </span>
                                <span className={styles.statLabel}>{t('instructors.stats.views')}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>{instructor.centers}</span>
                                <span className={styles.statIcon}>
                                    <Image src={centersicon} alt={t('instructors.stats.centers')} width={24} height={24} />
                                </span>
                                <span className={styles.statLabel}>{t('instructors.stats.centers')}</span>
                            </div>
                            
                        </div>
                        <button className={styles.seeMoreBtn}>{t('instructors.seeMore')}</button>
                        
                    </div>

                ))}
            </div>
        </div>
    );
}