import styles from "./whoarewe.module.css";
import whoarewe from "@/app/Images/WhoAreWe/whoarewe.jpg";
import Image from "next/image";

export default function WhoAreWe() {
    return (
        <div className={styles.whoarewe_container}>
            <div className={styles.whoarewe_content_left}>
                <h1>Who Are We</h1>
                <p>EDmax is an app that simply solves all the difficulties that faces the educational system specially in Egypt. It is not only an app that provides e-learning services but further beyond this.
                It is not only an e-learning app but it is a system over 2 (website and application) platforms each one serves one of the educational system participants.</p>
                <button>
                    Learn More
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0001 5.5L21.0001 12.5M21.0001 12.5L14.0001 19.5M21.0001 12.5L3.00012 12.5" 
                            stroke="#FEFEFE" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
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