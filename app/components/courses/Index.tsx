import styles from './courses.module.css';
import course from '@/app/Images/course/course.png';
import Image from 'next/image';

interface Course {
    id: number;
    title: string;
    description: string;
    imageUrl?: any;
    price: number;
    instructor: string;
    totalLessons: number;

}

const courses: Course[] = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
        imageUrl: course,
        price: 500,
        instructor: "Remon",
        totalLessons: 12
    },
    {
        id: 2,
        title: "Python Programming",
        description: "Master Python programming from basics to advanced concepts.",
        imageUrl: course,
        price: 500,
        instructor: "Remon",
        totalLessons: 15
    },
    {
        id: 3,
        title: "Data Science Essentials",
        description: "Introduction to data analysis, visualization, and machine learning.",
        imageUrl: course,
        price: 500,
        instructor: "Remon",
        totalLessons: 10
    }
];

export default function Index() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Courses</h1>
            <div className={styles.courseGrid}>
                {courses.map((course) => (
                    <div key={course.id} className={styles.courseCard}>
                        <div className={styles.imageWrapper}>
                            <Image src={course.imageUrl} alt={course.title} fill className={styles.courseImage} />
                        </div>
                        <div className={styles.courseContent}>
                            <h2 className={styles.courseTitle}>{course.title}</h2>
                            <div className={styles.priceSection}>
                                {course.price} LE
                            </div>
                            <div className={styles.courseInfo}>
                                <span>{course.totalLessons} Lessons</span>
                                <span>{course.instructor}</span>
                            </div>
                            <p className={styles.courseDescription}>{course.description}</p>
                            <div className={styles.buttonGroup}>
                                <button className={styles.addToCartBtn}>Add to cart</button>
                                <button className={styles.viewDetailsBtn}>View details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}