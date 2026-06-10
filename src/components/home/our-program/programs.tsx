"use client";

import { useState } from "react";
import styles from "./programs.module.css";
import {
  Code2,
  Network,
  GraduationCap,
  ShieldCheck,
  Server,
  Cloud,
  PenTool,
  TrendingUp,
} from "lucide-react";

const PROGRAMS_DATA = [
  {
    id: 1,
    icon: <Code2 size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Software Engineering",
    description:
      "Master full-stack development with Java, Python, and modern web frameworks.",
  },
  {
    id: 2,
    icon: <Network size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Data & Emerging Tech",
    description:
      "Master Data Analytics, AI, and Machine Learning for modern business applications.",
  },
  {
    id: 3,
    icon: <ShieldCheck size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Cybersecurity",
    description:
      "Learn ethical hacking, network defense, and advanced security protocols.",
  },
  {
    id: 4,
    icon: <Server size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Computer Networking",
    description:
      "Design, implement, and manage secure enterprise network infrastructures.",
  },
  {
    id: 5,
    icon: <GraduationCap size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "National Innovation Diploma",
    description:
      "Accredited NID programs in Computer Hardware, Software, and Networking.",
  },
  {
    id: 6,
    icon: <Cloud size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Cloud Computing",
    description:
      "Build, deploy, and scale enterprise applications using AWS and Microsoft Azure.",
  },
  {
    id: 7,
    icon: <PenTool size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "UI/UX Design",
    description:
      "Design intuitive, beautiful user experiences using industry-standard tools like Figma.",
  },
  {
    id: 8,
    icon: <TrendingUp size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Digital Marketing",
    description:
      "Master SEO, social media strategy, and data-driven marketing to drive business growth.",
  },
];

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(PROGRAMS_DATA[0]);

  return (
    <section id="courses" className={styles.section}>
      <h2 className={styles.sectionTitle}>Our Programs</h2>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          {PROGRAMS_DATA.map((program) => (
            <button
              key={program.id}
              className={`${styles.menuItem} ${
                selectedProgram.id === program.id
                  ? styles.activeMenuItem
                  : ""
              }`}
              onClick={() => setSelectedProgram(program)}
            >
              {program.title}
            </button>
          ))}
        </aside>

        <div className={styles.displayCard}>
          <div className={styles.iconWrapper}>
            {selectedProgram.icon}
          </div>

          <h3>{selectedProgram.title}</h3>
          <p>{selectedProgram.description}</p>
        </div>
      </div>
    </section>
  );
}