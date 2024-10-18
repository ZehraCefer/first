"use client";
import { useState } from "react";
import Link from "next/link";
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
        <div className={styles.flexContainer}>

          {/* About Us Section */}
          <div className={styles.section}>
            <h2 className={styles.heading}>About Us</h2>
            <p className={styles.subheading}>
              We provide a secure space for users to explore social casino games, prioritizing fun and education over real-money risks.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul>
              {["Home", "Games", "Features", "FAQ"].map((link, index) => (
                <li key={index} style={{ margin: '5px 0' }}>
                  <Link href="/" className={styles.link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Combined Contact Us and Subscription Section */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Contact Us & Subscribe</h3>
            <p className={styles.subheading}>
              We would love to hear from you! For inquiries, please email us at:{" "}
              <a href="mailto:contact@gamezones.info" className={styles.link}>
                contact@gamezones.info
              </a>
            </p>
            <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to subscribe"
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
          <h4 style={{ fontSize: '1.2em' }}>Responsible Gaming</h4>
          <p style={{ fontSize: '0.9em' }}>
            We advocate responsible gaming. Please play within your limits.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>
            © 2024 - All Rights Reserved by{" "}
            <Link href="https://gamezones.info/" target="_blank" className={styles.link}>
              gamezones.info
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
