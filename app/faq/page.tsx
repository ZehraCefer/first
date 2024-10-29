"use client";
import { FaQuestionCircle, FaSmileBeam, FaShieldAlt } from "react-icons/fa";
import styles from "./Faq.module.css";

const faqData = [
  {
    icon: <FaQuestionCircle className={styles.faqIcon} />,
    title: "Understanding Social Games",
    content:
      "Social games are designed to replicate the look and feel of traditional games, such as slot-style games, poker, and blackjack, but with an important distinction: they do not involve real-money wagers or payouts. Players use virtual currency, which is often provided in the form of free coins or tokens when you first join. As you play, you can earn more virtual currency or opt to purchase additional coins through in-game purchases. These games are especially popular because they allow people to enjoy the excitement and challenge of playing, without any financial risks. Many social games also offer leaderboards, achievements, and challenges to keep players engaged, making it a great way to have fun and connect with friends online.",
  },
  {
    icon: <FaSmileBeam className={styles.faqIcon} />,
    title: "Playing Without Financial Risks",
    content:
      "One of the major benefits of social games is that you can play without any real-world stakes. This means you can experiment with different strategies, try out new games, and enjoy the fun of playing without worrying about financial loss. Some games offer the option to buy virtual coins to extend your playtime or access special features, but these purchases are entirely optional. Social games are a perfect choice for anyone looking to experience the excitement of games without the financial downsides. It's a great way to learn the rules and improve your skills, allowing players to enjoy an entertainment-focused experience.",
  },
  {
    icon: <FaSmileBeam className={styles.faqIcon} />,
    title: "Why Players Love Social Games",
    content:
      "Social games have become increasingly popular among players of all ages due to their vibrant and engaging nature. They provide a social aspect that allows players to connect with friends or meet new people from around the world. Many of these games feature live chat options, leaderboards, and multiplayer challenges, creating a sense of community among players. Additionally, these games often come with a variety of themes, such as adventure, fantasy, or classic environments, adding to the overall immersion. The ability to quickly join a game and enjoy a quick session or longer playtime makes social games ideal for both casual and dedicated players. With non-monetary rewards like virtual trophies, progress through levels, and special in-game events, these games are a fun way to stay entertained.",
  },
  {
    icon: <FaShieldAlt className={styles.faqIcon} />,
    title: "Safety and Security in Social Games",
    content:
      "Social games prioritize user safety by ensuring that no real-money gambling takes place on their platforms. The focus is on providing a secure and enjoyable experience where players can relax and have fun. While the core gameplay revolves around virtual currency, optional purchases are available for those who wish to enhance their gaming experience. It’s important for players to play responsibly and enjoy these games within their limits. Platforms offering social games often implement strict security protocols, including encrypted data transfers and secure payment methods, ensuring safe transactions. Additionally, social games are designed with controls to prevent underage users from accessing them, maintaining a family-friendly environment. As with any online activity, it’s always a good idea to monitor your account and adjust privacy settings to suit your needs. Remember, the goal of social games is entertainment and relaxation, making them a safe and enjoyable choice for anyone looking for fun without financial risks.",
  },
];

const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
      <p className={styles.faqDescription}>
        Curious about social games? Here’s everything you need to know to make the most of your experience.
        Dive deeper into what makes these games so enjoyable, how they differ from traditional games, and how to get
        the best out of your time spent playing.
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
