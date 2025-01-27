"use client"
import styles from './courses.module.css';
import course from '@/app/Images/course/course.png';
import Image from 'next/image';
import { useTranslation } from '@/app/hooks/useTranslation';

interface Course {
    id: number;
    title: string;
    description: string;
    imageUrl?: any;
    price: number;
    instructor: string;
    totalLessons: number;

}

const getCourses = (t: any) => [
    {
        id: 1,
        title: t("courses.course1.title"),
        description: t("courses.course1.description"),
        imageUrl: course,
        price: 500,
        instructor: t("courses.course1.instructor"),
        totalLessons: 12
    },
    {
        id: 2,
        title: t("courses.course2.title"),
        description: t("courses.course2.description"),
        imageUrl: course,
        price: 500,
        instructor: t("courses.course2.instructor"),
        totalLessons: 15
    },
    {
        id: 3,
        title: t("courses.course3.title"),
        description: t("courses.course3.description"),
        imageUrl: course,
        price: 500,
        instructor: t("courses.course3.instructor"),
        totalLessons: 10
    }
];

export default function Index() {
    const { t } = useTranslation();
    const courses = getCourses(t);

    return (
        <div id="courses" className={styles.container}>
            <h1 className={styles.title}>{t("courses.mainTitle")}</h1>
            <div className={styles.courseGrid}>
                {courses.map((course) => (
                    <div key={course.id} className={styles.courseCard}>
                        <div className={styles.imageWrapper}>
                            <Image src={course.imageUrl} alt={course.title} fill className={styles.courseImage} />
                        </div>
                        <div className={styles.courseContent}>
                            <h2 className={styles.courseTitle}>{course.title}</h2>
                            <div className={styles.priceSection}>
                                {course.price} {t("courses.currency")}
                            </div>
                            <div className={styles.courseInfo}>
                                <span>{course.totalLessons} {t("courses.lessons")}</span>
                                <span>{course.instructor}</span>
                            </div>
                            <p className={styles.courseDescription}>{course.description}</p>
                            <div className={styles.buttonGroup}>
                                <button className={styles.addToCartBtn}>{t("courses.addToCart")}</button>
                                <button className={styles.viewDetailsBtn}>{t("courses.viewDetails")}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}