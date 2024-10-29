"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for signing up!");
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>

          {/* About Us Section */}
          <div className={styles.section}>
            <h2 className={styles.heading}>About Us</h2>
            <p className={styles.subheading}>
              We provide a secure platform for users to explore social casino games, emphasizing fun and education.
              No real money play is possible on this site.

            </p>
          </div>

          {/* Quick Links Section */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.linksList}>
              {["Home", "Games", "Features", "FAQ"].map((link, index) => (
                <li key={index}>
                  <Link href="/" className={styles.link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us & Subscribe Section */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Contact Us</h3>
            <p className={styles.subheading}>
              Email us at:{" "}
              <a href="mailto:contact@onnicasino.com" className={styles.link}>
                contact@onnicasino
              </a>
            </p>
            <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subscribe with your email"
                className={styles.input}
                required
              />
              <button
                type="submit"
                className={styles.button}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Responsible Gaming Section */}
        <div className={styles.responsibleGaming}>
          <h4>Responsible Gaming</h4>
          <p>
            You are solely responsible for controlling your gambling behaviour and seeking help. If you feel that your gambling habits are becoming problematic or addictive, please visit  <br></br>
             <a href="https://www.gambleaware.org" target="_blank" rel="noopener noreferrer">www.gambleaware.org</a> or <br></br>
             <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer">www.gamcare.org.uk</a> for treatment options.
          </p>


          {/* SVG Logos */}
          <div className={styles.logoContainer}>
            <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
              <Image src="/gamcare.svg" alt="GamCare" width={120} height={30} />
            </a>
            <a href="/">
              <Image src="/18+disclaimer.svg" alt="18+ Disclaimer" width={60} height={30} />
            </a>
            <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              <Image src="/gamblingaware.svg" alt="Gamble Aware" width={120} height={30} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>
            © 2024 - All Rights Reserved by{" "}
            <Link href="https://onnicasino.com/" target="_blank" className={styles.link}>
              onnicasino.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
