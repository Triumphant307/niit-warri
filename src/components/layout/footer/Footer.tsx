import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logoImg from "@/assets/understanding-web-development-frameworks-og-image.jpg";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Branding & Socials */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image src={logoImg} alt="NIIT Warri Logo" height={47} />
            </Link>
          </div>
          <p className={styles.description}>
            Empowering the next generation of tech leaders through industry-aligned training,
            project-based learning, and global certifications.
          </p>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialIcon} aria-label="Facebook">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className={styles.socialIcon} aria-label="Twitter">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul className={styles.linksList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/courses">All Courses</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Top Programs */}
        <div className={styles.column}>
          <h3>Top Programs</h3>
          <ul className={styles.linksList}>
            <li>
              <Link href="/courses#software">Software Engineering</Link>
            </li>
            <li>
              <Link href="/courses#data">Data Analytics & AI</Link>
            </li>
            <li>
              <Link href="/courses#cyber">Cybersecurity</Link>
            </li>
            <li>
              <Link href="/courses#nid">National Innovation Diploma</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={18} className={styles.contactIcon} />
              <span>123 Tech Avenue, Effurun, Warri, Delta State</span>
            </li>
            <li>
              <Phone size={18} className={styles.contactIcon} />
              <span>+234 800 NIIT WARRI</span>
            </li>
            <li>
              <Mail size={18} className={styles.contactIcon} />
              <span>info@niitwarri.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} NIIT Warri. All rights reserved.</p>
      </div>
    </footer>
  );
}
