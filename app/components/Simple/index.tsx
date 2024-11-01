import styles from './Simple.module.css';
import Image from 'next/image';

const crystals = [
  { 
    title: 'Entdecken Sie eine Welt funkelnder Juwelen', 
    image: '/images/Simple/crystal1.png', 
    description: 'Tauchen Sie ein in eine lebendige Welt der Kristalle, in der jeder Dreh eine faszinierende Vielfalt an farbenfrohen Edelsteinen enthüllt. Perfekt für eine kurze Auszeit oder eine längere Unterhaltungssession.' 
  },
  { 
    title: 'Betreten Sie eine glitzernde Edelsteinreise', 
    image: '/images/Simple/crystal2.png', 
    description: 'Erkunden Sie eine Vielzahl von funkelnden Edelsteinen, während sich die Walzen in einzigartigen Mustern ausrichten und eine aufregende, aber entspannende Atmosphäre für Spieler aller Stufen schaffen.' 
  },
  { 
    title: 'Entdecken Sie die Magie funkelnder Drehungen', 
    image: '/images/Simple/crystal3.png', 
    description: 'Perfekt für Anfänger und erfahrene Spieler, bietet Gems Slot ein einfaches, aber zufriedenstellendes Slot-Erlebnis ohne Druck. Lehnen Sie sich einfach zurück, entspannen Sie sich und lassen Sie die leuchtenden Edelsteine Ihrem Tag etwas Farbe verleihen.' 
  },
];

const CrystalSection = () => {
  return (
    <section className={styles.crystalSection}>
      <div className={styles.container}>
        {crystals.map((crystal, index) => (
          <div key={index} className={`${styles.crystalCard} ${styles[`crystalCard${index + 1}`]}`}>
            <Image
              src={crystal.image}
              alt={crystal.title}
              className={`${styles.crystalImage} ${styles[`crystalImage${index + 1}`]}`}
              width={300} 
              height={300}
            />
            <h2 className={styles.title}>{crystal.title}</h2>
            <p className={styles.description}>{crystal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CrystalSection;
