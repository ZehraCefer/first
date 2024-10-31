import styles from './Simple.module.css';

const crystals = [
  { 
    title: 'Discover a World of Sparkling Jewels', 
    image: '/images/Simple/crystal1.png', 
    description: 'Step into a vibrant world of crystals, where each spin unveils a mesmerizing array of colorful gems. Perfect for a quick escape or a longer session of pure entertainment.' 
  },
  { 
    title: 'Step into a Dazzling Gemstone Journey', 
    image: '/images/Simple/crystal2.png', 
    description: 'Explore an array of dazzling gemstones, as the reels align in unique patterns, creating an exciting yet relaxing environment for players of all levels.' 
  },
  { 
    title: 'Uncover the Magic of Sparkling Spins', 
    image: '/images/Simple/crystal3.png', 
    description: 'Perfect for both newcomers and seasoned players, Gems Slot offers a simple yet satisfying slot experience without any pressure. Just sit back, relax, and let the vibrant gems add a touch of color to your day.' 
  },
];

const CrystalSection = () => {
  return (
    <section className={styles.crystalSection}>
      <div className={styles.container}>
        {crystals.map((crystal, index) => (
          <div key={index} className={`${styles.crystalCard} ${styles[`crystalCard${index + 1}`]}`}>
            <img src={crystal.image} alt={crystal.title} className={`${styles.crystalImage} ${styles[`crystalImage${index + 1}`]}`} />
            <h2 className={styles.title}>{crystal.title}</h2>
            <p className={styles.description}>{crystal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CrystalSection;
