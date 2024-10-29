import React from "react";
import { FaGamepad, FaMobileAlt, FaStar } from "react-icons/fa";
import styles from './Simple.module.css';

const CombinedComponent = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Explore Top Social Casino Games!
        </h1>
        <p className={styles.headerText}>
          Your ultimate destination for the most thrilling social casino games, accessible anytime, anywhere.
        </p>
      </div>

      {/* Simple Section */}
      <div className={styles.simpleSection}>
        <FaGamepad className={styles.icon} />
        <h3 className={styles.sectionTitle}>
        Explore and enjoy exciting social casino games!
        </h3>
        <p className={styles.sectionText}>
          Dive into an endless world of entertainment with our comprehensive reviews of leading social casino games.
        </p>
        <p className={styles.sectionText}>
          From the latest hits to classic favorites, find games that promise hours of fun—all completely free.
        </p>
        <p className={styles.sectionText}>
          Browse our curated reviews to find your next favorite game! 
        </p>
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Trade Section */}
      <div className={styles.tradeSection}>
        <FaMobileAlt className={styles.icon} />
        <h1 className={styles.sectionTitle}>
          Play Anytime, Anywhere!
        </h1>
        <p className={styles.sectionText}>
          Access the best social casino games no matter where you are.
        </p>
        <p className={styles.sectionText}>
          Quickly find and enjoy highly-rated games for endless entertainment on the go.
        </p>
        <p className={styles.sectionText}>
          Use our expert recommendations to discover the perfect game for your next gaming session.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className={styles.ctaSection}>
        <FaStar className={styles.icon} />
        <h2 className={styles.ctaTitle}>
          Ready to Get Started?
        </h2>
        <p className={styles.ctaText}>
          Join our vibrant community and explore an extensive range of social casino games that cater to every taste!
        </p>
      </div>
    </div>
  );
};

export default CombinedComponent;
