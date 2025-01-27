"use client"

import styles from "./Header.module.css"
import NavBar from "../NavBar/Index"
import Language from "../Language/Index"
import SearchBar from "../SearchBar/Index"
import Login from "../Login/Index"

export default function Header() {
    return (
        <header className={styles.header}>
            <NavBar />
            <div className={styles.secondNave}>
                <Language />
                <SearchBar />
                <Login />
            </div>
        </header>
    );
}