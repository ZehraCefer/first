"use client";
import Image from "next/image";
import React from "react";
import styles from './Work.module.css';

const Home = () => {
  const game = {
    imgSrc: "/game/assets/logo.png",
    heading: "Spin for Fun: The Ultimate Slot Adventure",
    subheading: "Embark on a whimsical journey with hilarious characters!",
    hiddenPara:
      "Dive into a colorful world filled with animated friends and thrilling slot spins. Discover exciting surprises and challenge quirky foes in your adventure!",
  };

  return (
    <div className={styles.container} id="games">
      {/* Background and Overlay */}
      <div className={styles.background}></div>

      {/* Main Heading */}
      <h1 className={styles.heading}>
        Welcome to <span style={{ color: 'yellow' }}>Your Gaming Paradise</span>
      </h1>

      {/* Decorative Element */}
      <div className={styles.decorative}></div>

      {/* Game Section */}
      <div className={styles.gameSection}>
        <Image
          width={300} // Adjusted for responsiveness
          height={300} // Adjusted for responsiveness
          src={game.imgSrc}
          alt={game.heading}
          className={styles.gameImage}
        />
        <h2 className={styles.gameTitle}>{game.heading}</h2>
        <h3 className={styles.gameSubheading}>{game.subheading}</h3>
        <p className={styles.gameDescription}>{game.hiddenPara}</p>
      </div>
      
      {/* Footer */}
      <div className={styles.footer}></div>
    </div>
  );
};

export default Home;
