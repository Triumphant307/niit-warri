import styles from "./page.module.css";
import Hero from "@/components/home/hero/Hero";
import Programs from "@/components/home/our-program/programs";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import Reviews from "@/components/home/reviews/Reviews";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Programs />
      <WhyChooseUs />
      <Reviews />
    </main>
  );
}
