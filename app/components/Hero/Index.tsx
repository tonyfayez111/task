'use client';

import HeroSection from "@/app/Images/HeroSection/HeroSection";
import LearnFaster from "../Learn_Faster/Index";
import styles from "./Hero.module.css"

export default function Hero() {
    return <div className={styles.heroContainer}>
        <LearnFaster />
       <span style={{ display : "flex" , flexDirection : "column" , padding:"40px 0 0 0" }}><HeroSection  /></span> 
    </div>;
}
