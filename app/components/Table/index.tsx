import { FaMoneyBillWave, FaSyncAlt, FaClipboardList } from "react-icons/fa";
import React from "react";
import styles from './Table.module.css';

const slotGameSteps = [
  {
    title: "Set Your Spin",
    description: "Select your play level and the number of paylines. Adjust your total to set your play preference.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Spin the Reels",
    description: "Press the spin button to initiate the game. Observe the symbols as they spin, aiming for a fun combination",
    icon: FaSyncAlt,
  },
  {
    title: "Know the Rules",
    description: "Explore the table to understand the rules for different symbol combinations. Enjoy playing for fun without any financial risks!",
    icon: FaClipboardList,

  },
];

const HowToPlaySlots = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        How to Play Slot Games
      </h3>
      <div className={styles.steps}>
        {slotGameSteps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.icon}>
              <step.icon />
            </div>
            <h4 className={styles.stepTitle}>{step.title}</h4>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToPlaySlots;
