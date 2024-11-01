import { FaShieldAlt, FaInfoCircle, FaUserFriends } from "react-icons/fa";
import React from "react";
import styles from './Features.module.css';

interface Feature {
  icon: React.ReactElement;
  heading: string;
  subheading: string;
}

const features: Feature[] = [
  {
    icon: <FaShieldAlt className={styles.icon} />,
    heading: "Enhanced Security",
    subheading:
      "We implement industry-leading encryption and cutting-edge security measures to safeguard your personal information. Our platform is designed to provide a secure environment where you can explore social casino games with peace of mind, knowing that your privacy is our top priority. Whether you’re reading reviews or browsing game features, your data remains fully protected against unauthorized access.",
  },
  {
    icon: <FaInfoCircle className={styles.icon} />,
    heading: "Comprehensive Insights",
    subheading:
      "Our platform is dedicated to providing you with a wealth of information on social casino games, covering everything from gameplay mechanics to special features. Discover detailed reviews, in-depth guides, and up-to-date information on the latest trends in the world of social casino gaming. With our resources, you can explore various game options with no need for purchases, helping you make informed decisions and find the best games to suit your interests.",
  },
  {
    icon: <FaUserFriends className={styles.icon} />,
    heading: "Easy-to-Use Interface",
    subheading:
      "We believe that accessing information should be effortless, which is why our platform is designed with simplicity and user comfort in mind. Our intuitive interface allows you to navigate through reviews, game guides, and insights without any hassle. Whether you are new to social casino games or an experienced player, you’ll find our site easy to explore, ensuring a seamless experience every time you visit. Enjoy a smooth browsing experience that puts you in control of your journey through the world of social gaming.",
  },
];

const Features = () => {
  return (
    <section className={styles.container} id="features-section">
      <div className={styles.intro}>
        <h3 className={styles.subtitle}>OUR FEATURES</h3>
        <h2 className={styles.title}>
          Your Go-To Resource for Social Casino Insights
        </h2>
        <p className={styles.description}>
          At socialcasinodestination.com, we are committed to delivering the highest standards of security and user experience. Our mission is to provide you with reliable information about social casino games while ensuring your data remains safe. With a focus on user education and transparency, we aim to be your trusted partner in exploring the vibrant world of social gaming.
        </p>
      </div>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={`${styles.feature} ${index % 2 === 0 ? styles.reverse : ''}`}>
            <div className={styles.iconContainer}>
              {feature.icon}
            </div>
            <div className={styles.textContainer}>
              <h5 className={styles.featureTitle}>{feature.heading}</h5>
              <p className={styles.featureDescription}>{feature.subheading}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
