import styles from "./Reviews.module.css";
import { Quote, User } from "lucide-react";

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Emeka Okoro",
    course: "Software Engineering",
    review:
      "The instructors at NIIT Warri are top-notch. The project-based approach helped me build a portfolio that landed me my first junior developer role before I even graduated!",
  },
  {
    id: 2,
    name: "Aisha Bello",
    course: "Data & Emerging Tech",
    review:
      "I transitioned from a non-tech background into Data Analytics seamlessly. The facilities are modern and the career support team is incredibly dedicated.",
  },
  {
    id: 3,
    name: "David Ogbemudia",
    course: "Cybersecurity",
    review:
      "The hands-on labs and real-world network defense scenarios gave me the practical confidence I needed to pass my professional certification exams on the first try.",
  },
];

export default function Reviews() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Student Success Stories</h2>

      <div className={styles.grid}>
        {REVIEWS_DATA.map((item) => (
          <div key={item.id} className={styles.reviewCard}>
            <div className={styles.quoteIconWrapper}>
              <Quote size={36} color="var(--color-primary-blue)" strokeWidth={2} />
            </div>
            <p className={styles.quote}>&quot;{item.review}&quot;</p>
            <div className={styles.studentInfo}>
              <div className={styles.avatar}>
                <User size={24} color="var(--color-primary-blue-dark)" />
              </div>
              <div className={styles.details}>
                <h4>{item.name}</h4>
                <span>{item.course}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
