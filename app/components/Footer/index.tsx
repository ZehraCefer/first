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
              We are dedicated to offering a safe and enjoyable online platform where users can explore the exciting world
              of social casino games. Our primary focus is on providing a unique gaming experience centered around entertainment, education,
              and responsible play, without the risks associated with real-money gambling. Here, you can immerse yourself in social casino games
              designed purely for fun and learning, helping to cultivate an understanding of the games in a risk-free environment.
            </p>
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
          <h4>Commitment to Responsible Gaming</h4>
          <p>
            We are fully committed to promoting responsible gaming practices. It’s essential for players to maintain control
            over their gaming activities and to seek assistance if needed. If you ever feel that your gaming habits are becoming difficult to manage
            or are causing concern, help is available. For resources and support, we encourage you to visit: <br />
            <a href="https://www.gambleaware.org" target="_blank" rel="noopener noreferrer">www.gambleaware.org</a> or <br />
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer">www.gamcare.org.uk</a>. These organizations
            offer confidential help and treatment options to support safe and balanced gaming.
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
