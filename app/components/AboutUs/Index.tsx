import styles from './AboutUs.module.css';

export default function AboutUs() {
    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.contentContainer}>
                <div >
                    <h1 className={styles.title}> Want an easier access</h1>
                    <h2 className={styles.header}>Download our App</h2>
                    <p className={styles.paragraph}>
                    EDmax is an app that simply solves all the difficulties  that faces the educational system specially in Egypt. It is not only an app that provides e-learning services  but further beyond this.
It is not onl
y an e-learning app but it is a system over 
2 (website and application) platforms each one serves one of the educational system participants .

                    </p>
                    <button className={styles.learnMoreBtn}>Learn More</button>
                </div>
               
            </div>
        </div>
    );
}   