'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [showJapan, setShowJapan] = useState(false);
  const [showMalaysia, setShowMalaysia] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Folklore</h1>
      <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet" />
      <nav className={styles.nav}>
        <Link href="/home" className={styles.link}>Introduction</Link>

        <div className={styles.dropdownWrapper}>
          <Link
            href="#"
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              setShowJapan((prev) => !prev);
              setShowMalaysia(false);
            }}
          >
            Japan
          </Link>
          {showJapan && (
            <div className={styles.dropdown}>
              <Link href="/japan_Oiwa" className={styles.dropdownItem}>Oiwa-san</Link>
              <Link href="/japan_Kuchisake" className={styles.dropdownItem}>Kuchisake-onna</Link>
            </div>
          )}
        </div>

        <div className={styles.dropdownWrapper}>
          <Link
            href="#"
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              setShowMalaysia((prev) => !prev);
              setShowJapan(false);
            }}
          >
            Malaysia
          </Link>
          {showMalaysia && (
            <div className={styles.dropdown}>
              <Link href="/malaysia_Pontianak" className={styles.dropdownItem}>Pontianak</Link>
              <Link href="/malaysia_Pocong" className={styles.dropdownItem}>Pocong</Link>
            </div>
          )}
        </div>

        <Link href="/comparison" className={styles.link}>Comparison</Link>
        <Link href="/opinion" className={styles.link}>My Opinion</Link>
        <Link href="/aboutme" className={styles.link}>About me</Link>
        <Link href="/reference" className={styles.link}>Reference</Link>
      </nav>
    </header>
  );
}
