"use client";
import Link from "next/link";
import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerContainer} id="home-section">
      <div className={styles.contentOverlay}>
        <h1 className={styles.bannerTitle}>
          Have Fun with an <span className={styles.highlight}>Engaging Social Casino Game</span>
        </h1>
        <p className={styles.bannerSubtitle}>
          Our site offers a FREE social casino game. Play responsibly and enjoy endless entertainment with
          <span className={styles.highlight}> NO FINANCIAL RISKS</span>. This game is designed purely for fun and relaxation.
        </p>

        <Link href="/game/index.html">
          <button className={styles.playButton}>Start the Fun!</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
