import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Shape Your Future with NIIT Warri</h1>
        <p>
          Join the global leader in skills and talent development. We offer industry-aligned
          training in Software Engineering, Data Science, and Professional Certifications to
          accelerate your career.
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

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Software Engineering</h3>
          <p>
            Master full-stack development, Java, Python, and modern web frameworks to become a
            highly sought-after developer.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h3>Data & Emerging Tech</h3>
          <p>
            Dive into Data Analytics, Artificial Intelligence, and Machine Learning to lead the
            digital transformation.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h3>National Innovation Diploma</h3>
          <p>
            Specialized NID programs in Computer Hardware, Software, and Networking designed
            specifically at our Warri center.
          </p>
        </div>
      </section>
    </main>
  );
}
