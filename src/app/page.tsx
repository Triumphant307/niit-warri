import styles from "./page.module.css";
import Hero from "@/components/home/hero/Hero";
import Programs from "@/components/home/our-program/programs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Programs />
    </main>
  );
}
