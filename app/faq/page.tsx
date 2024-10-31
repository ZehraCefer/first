"use client";
import { GiGemPendant, GiCutDiamond, GiCrystalGrowth, GiLockedChest } from "react-icons/gi";
import styles from "./Faq.module.css";

const faqData = [
  {
    icon: <GiGemPendant className={styles.faqIcon} />,
    title: "What are Social Games?",
    content:
      "Social games are designed to mimic the experience of traditional games like slot-style games, poker, and blackjack, but they’re unique because they don't use real money. Players get virtual currency, often in the form of free coins or tokens upon signing up. As you play, you can earn more or, if you prefer, purchase additional coins within the game. These games are popular because they offer the thrill and challenge of playing without financial risk. Many also feature leaderboards, achievements, and challenges to keep the experience fun and engaging, providing a great way to enjoy gaming and connect with others online.",
  },
  {
    icon: <GiCutDiamond className={styles.faqIcon} />,
    title: "Enjoying Risk-Free Play",
    content:
      "A key benefit of social games is that they come without any real-money stakes. You’re free to try out new strategies, explore various games, and simply enjoy the gameplay without worrying about financial losses. Some games offer in-app purchases for virtual coins to extend playtime or access unique features, but these are entirely optional. Social games are ideal for those who want to experience the thrill of gaming without financial downsides, providing a great way to learn the basics, refine your skills, and focus on pure entertainment.",
  },
  {
    icon: <GiCrystalGrowth className={styles.faqIcon} />,
    title: "What Makes Social Games Appealing?",
    content:
      "Social games have gained popularity across all ages because of their engaging and dynamic nature. They let players connect with friends or meet new people globally. Features like live chat, leaderboards, and multiplayer challenges build a community feel among players. With diverse themes, from adventure to classic games, these experiences provide full immersion. Whether you want a quick game or an extended play session, social games suit both casual and dedicated players. They offer rewards such as virtual trophies, level progression, and special events, ensuring that there’s always something to keep players entertained.",
  },
  {
    icon: <GiLockedChest className={styles.faqIcon} />,
    title: "Safety and Security in Social Games",
    content:
      "Social games are built around player safety, ensuring no real-money gambling occurs. They’re focused on delivering a secure, relaxing experience where players can enjoy themselves responsibly. Though virtual currency is the core, optional purchases can enhance gameplay for those interested. Most platforms have strict security protocols, including data encryption and secure payment options, protecting transactions. Access controls also prevent underage use, making it a family-friendly space. To make the most of your experience, monitor account settings and customize privacy as needed. Social games are a safe, fun choice for anyone seeking enjoyment without financial risk.",
  },
];

const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
      <p className={styles.faqDescription}>
        Interested in social games? Here’s what you need to know to enjoy them fully.
        Discover what makes these games enjoyable, how they stand out from traditional games, and how to maximize your experience.
      </p>

      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <div className="flex items-center">
            {item.icon}
            <h4 className={styles.faqHeading}>{item.title}</h4>
          </div>
          <p className={styles.faqContent}>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
