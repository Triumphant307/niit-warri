import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Shape Your Future with NIIT Warri</h1>
      <p>
        Join the global leader in skills and talent development. We offer
        industry-aligned training in Software Engineering, Data Science, and
        Professional Certifications to accelerate your career.
      </p>
      <div className={styles.ctaGroup}>
        <Link href="/courses" className={styles.primaryBtn}>
          Explore Programs
        </Link>
        <Link href="/contact" className={styles.secondaryBtn}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}
