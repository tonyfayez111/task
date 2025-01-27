'use client';

import HeroSection from "@/app/Images/HeroSection/HeroSection";
import LearnFaster from "../Learn_Faster/Index";
import styles from "./Hero.module.css"

export default function Hero() {
    return <div id="home" className={styles.heroContainer}>
        <LearnFaster />
        <div className={styles.heroImageContainer}>
            <HeroSection />
        </div>
    </div>;
}
