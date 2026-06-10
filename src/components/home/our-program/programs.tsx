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
      "Develop industry-ready skills in software design, programming, and application development. Learn modern technologies including Java, Python, JavaScript, React, and database management while building real-world projects.",
    duration: "6 - 12 Months",
    certificate: "Professional Certificate",
    careerPaths:
      "Software Developer, Full-Stack Developer, Backend Engineer, QA Engineer",
  },
  {
    id: 2,
    icon: <Network size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Data & Emerging Tech",
    description:
      "Gain expertise in Data Analytics, Artificial Intelligence, and Machine Learning. Learn how to analyze data, create predictive models, and leverage emerging technologies to solve business problems.",
    duration: "6 Months",
    certificate: "Professional Certificate",
    careerPaths:
      "Data Analyst, AI Specialist, Machine Learning Engineer, BI Analyst",
  },
  {
    id: 3,
    icon: <ShieldCheck size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Cybersecurity",
    description:
      "Build the skills needed to protect organizations against cyber threats through ethical hacking, penetration testing, digital forensics, and network security.",
    duration: "6 Months",
    certificate: "Professional Certificate",
    careerPaths:
      "Cybersecurity Analyst, Penetration Tester, Security Consultant, SOC Analyst",
  },
  {
    id: 4,
    icon: <Server size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Computer Networking",
    description:
      "Master routing, switching, network troubleshooting, wireless technologies, and enterprise networking to support modern IT infrastructures.",
    duration: "6 Months",
    certificate: "Professional Certificate",
    careerPaths:
      "Network Administrator, Network Engineer, Systems Administrator",
  },
  {
    id: 5,
    icon: <GraduationCap size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "National Innovation Diploma",
    description:
      "Earn an accredited National Innovation Diploma while gaining practical skills in Software Engineering, Networking, and Computer Hardware.",
    duration: "2 Years",
    certificate: "National Innovation Diploma (NID)",
    careerPaths:
      "IT Support Specialist, Network Technician, Software Developer",
  },
  {
    id: 6,
    icon: <Cloud size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Cloud Computing",
    description:
      "Learn how to build, deploy, and manage cloud-based solutions using AWS and Microsoft Azure while exploring virtualization and DevOps practices.",
    duration: "6 Months",
    certificate: "Professional Certificate",
    careerPaths:
      "Cloud Engineer, DevOps Engineer, Cloud Administrator, Solutions Architect",
  },
  {
    id: 7,
    icon: <PenTool size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "UI/UX Design",
    description:
      "Create user-centered digital experiences through research, wireframing, prototyping, and interface design using tools such as Figma.",
    duration: "4 - 6 Months",
    certificate: "Professional Certificate",
    careerPaths:
      "UI Designer, UX Designer, Product Designer, Interaction Designer",
  },
  {
    id: 8,
    icon: <TrendingUp size={36} color="var(--color-primary-blue)" strokeWidth={1.5} />,
    title: "Digital Marketing",
    description:
      "Master SEO, social media marketing, content strategy, paid advertising, and analytics to create effective digital campaigns.",
    duration: "4 - 6 Months",
    certificate: "Professional Certificate",
    careerPaths:
      "Digital Marketer, SEO Specialist, Social Media Manager, Content Strategist",
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

          <div className={styles.programDetails}>
            <p>
              <strong>Duration:</strong> {selectedProgram.duration}
            </p>

            <p>
              <strong>Certificate:</strong> {selectedProgram.certificate}
            </p>

            <p>
             <strong>Career Paths:</strong> {selectedProgram.careerPaths}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}