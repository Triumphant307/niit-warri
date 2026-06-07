"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          NIIT<span>Warri</span>
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isOpen ? styles.open : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.open : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.open : ""}`}></span>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <Link href="/courses" className={styles.navLink} onClick={toggleMenu}>
          Courses
        </Link>
        <Link href="/about" className={styles.navLink} onClick={toggleMenu}>
          About Us
        </Link>
        <Link href="/contact" className={styles.navLink} onClick={toggleMenu}>
          Contact
        </Link>

        <Link
          href="/apply"
          className={`${styles.ctaButton} ${styles.mobileCta}`}
          onClick={toggleMenu}
        >
          Apply Now
        </Link>
      </nav>

      <div className={styles.desktopCta}>
        <Link href="/apply" className={styles.ctaButton}>
          Apply Now
        </Link>
      </div>
    </header>
  );
}
