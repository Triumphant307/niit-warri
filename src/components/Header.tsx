import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          NIIT<span>Warri</span>
        </Link>
      </div>
      
      <nav className={styles.nav}>
        <Link href="/courses" className={styles.navLink}>Courses</Link>
        <Link href="/about" className={styles.navLink}>About Us</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
      </nav>

      <div>
        <Link href="/apply" className={styles.ctaButton}>
          Apply Now
        </Link>
      </div>
    </header>
  );
}
