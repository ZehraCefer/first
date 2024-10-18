"use client";
import Link from "next/link";
import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerContainer} id="home-section">
      <div className={styles.contentOverlay}>
        <h1 className={styles.bannerTitle}>
          Dive into the Excitement of <span className={styles.highlight}>Engaging Casino Games</span>
        </h1>
        <p className={styles.bannerSubtitle}>
          Visit <span className={styles.highlight}>gamezones.info</span> – your top spot for fun social casino games. 
          Check out our in-depth reviews to find the most popular games, including slots, poker, blackjack, and more.
          Enjoy the thrill of play with no risks, as all our games are designed solely for entertainment.
        </p>
        
        <Link href="/game/index.html">
          <button className={styles.playButton}>Start the Adventure!</button>
        </Link>
      </div>
    </div>
  );
};
export default Banner;
