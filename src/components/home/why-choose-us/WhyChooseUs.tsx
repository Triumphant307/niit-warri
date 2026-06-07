import styles from "./WhyChooseUs.module.css";
import { Globe2, Users, Lightbulb, Briefcase, Wrench, Monitor } from "lucide-react";

const REASONS_DATA = [
  {
    id: 1,
    icon: <Globe2 size={32} color="var(--color-primary-blue-light)" strokeWidth={1.5} />,
    title: "Global Recognition",
    description:
      "Earn certificates that are recognized and respected by top tech companies worldwide.",
  },
  {
    id: 2,
    icon: <Users size={32} color="var(--color-primary-blue-light)" strokeWidth={1.5} />,
    title: "Expert Instructors",
    description:
      "Learn directly from industry veterans who bring real-world experience into the classroom.",
  },
  {
    id: 3,
    icon: <Lightbulb size={32} color="var(--color-primary-blue-light)" strokeWidth={1.5} />,
    title: "Project-Based Learning",
    description:
      "Stop memorizing. Build actual applications, portfolios, and solutions while you learn.",
  },
  {
    id: 4,
    icon: <Briefcase size={32} color="var(--color-primary-blue-light)" strokeWidth={1.5} />,
    title: "Career Support",
    description: "Get direct assistance with resume building, interview prep, and job placements.",
  },
  {
    id: 5,
    icon: <Wrench size={32} color="var(--color-primary-blue-light)" strokeWidth={1.5} />,
    title: "Hands-on Projects",
    description:
      "Build real-world applications and gain practical experience to boost your tech portfolio.",
  },
  {
    id: 6,
    icon: <Monitor size={32} color="var(--color-primary-blue-light)" strokeWidth={1.5} />,
    title: "Modern Facilities",
    description:
      "Train in fully equipped, state-of-the-art computer labs with high-speed internet access.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Why Choose NIIT Warri?</h2>

      <div className={styles.grid}>
        {REASONS_DATA.map((reason) => (
          <div key={reason.id} className={styles.card}>
            <div className={styles.iconWrapper}>{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
