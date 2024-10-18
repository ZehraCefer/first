"use client";
import { FaQuestionCircle, FaRegMoneyBillAlt, FaSmileBeam, FaShieldAlt } from "react-icons/fa";
import styles from "./Faq.module.css";

const faqData = [
  {
    icon: <FaQuestionCircle className={styles.faqIcon} />,
    title: "Understanding Social Casino Games",
    content:
      "Social casino games are designed to replicate the look and feel of traditional casino games, such as slot machines, poker, blackjack, and roulette, but with a key difference: they do not involve real-money wagers or payouts. Players use virtual currency, which is often provided in the form of free coins or tokens when you first join a game. As you play, you can earn more virtual currency or opt to buy additional coins through in-game purchases. These games are especially popular because they allow people to enjoy the excitement and challenge of gambling, without the financial risks. Many social casino games also offer leaderboards, achievements, and challenges that keep players engaged over time, making it a great way to have fun and compete with friends online.",
  },
  {
    icon: <FaRegMoneyBillAlt className={styles.faqIcon} />,
    title: "Playing Without Financial Risks",
    content:
      "One of the major draws of social casino games is the freedom to play without any real-money stakes. This means you can experiment with different game strategies, try out new games, and enjoy the rush of winning without worrying about losing money. Some games do offer the option to buy more virtual coins to extend your playtime or to access special features, but these purchases are entirely optional. This makes social casino games an appealing choice for those who want to experience the atmosphere of a casino without the potential downsides. It's a great way to learn the rules of various games and practice your skills, which can be especially useful if you ever decide to try your hand at real-money gambling. Overall, these games strike a balance between fun and relaxation, allowing players to enjoy a risk-free entertainment experience.",
  },
  {
    icon: <FaSmileBeam className={styles.faqIcon} />,
    title: "Why Players Love Social Casino Games",
    content:
      "Social casino games have become increasingly popular among players of all ages due to their vibrant and engaging nature. They provide a social aspect that allows players to connect with friends or meet new people from around the world. Many of these games feature live chat options, leaderboards, and multiplayer challenges, creating a sense of community among players. Additionally, the games often come with a variety of themes, such as adventure, fantasy, or classic casino environments, which add to the overall immersion. The ability to spin a slot, place a bet, or join a poker game in a matter of seconds makes social casino games an ideal choice for short bursts of fun or longer gaming sessions. The non-monetary rewards, such as virtual trophies, daily bonuses, and special in-game events, keep players coming back for more. Whether it’s the allure of winning a big virtual jackpot or simply the joy of playing a favorite game, these aspects make social casino games a highly appealing pastime.",
  },
  {
    icon: <FaShieldAlt className={styles.faqIcon} />,
    title: "Safety and Security in Social Casino Games",
    content:
      "Social casino games prioritize user safety by ensuring that no real-money gambling takes place on their platforms. The primary focus is on providing a secure and enjoyable experience where players can relax and have fun. While the core gameplay is based on virtual currency, some games offer optional purchases for those who wish to enhance their gaming experience. It’s important for players to stay mindful of their spending habits and to enjoy these games responsibly. Platforms offering social casino games often have strict security protocols in place, including encrypted data transfers and secure payment methods, to ensure that any transactions are safe. Additionally, social casino games are typically designed with built-in controls to prevent underage users from accessing them, maintaining a family-friendly environment. As with any online activity, it's always wise to monitor any account activity and ensure your privacy settings are configured correctly. Remember, the goal of social casino games is entertainment and relaxation, not financial gain, making them a safe choice for players looking to enjoy a casino-like experience.",
  },
];

const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
      <p className={styles.faqDescription}>
        Curious about social casino games? Here’s everything you need to know to make the most of your gaming experience.
        Dive deeper into what makes these games so enjoyable, how they differ from traditional gambling, and how to get
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
