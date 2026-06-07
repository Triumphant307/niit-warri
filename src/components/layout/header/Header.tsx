"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import logoImg from "@/assets/understanding-web-development-frameworks-og-image.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image src={logoImg} alt="NIIT Warri Logo" height={50} priority />
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
