import styles from "./page.module.css";
import Hero from "@/components/home/hero/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

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
