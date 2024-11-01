import Image from 'next/image';
import Link from "next/link";
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/Banner/bg.png"
          alt="Hintergrund"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <Image
          src="/images/Banner/owl-character.png"
          alt="Eulencharakter"
          width={600}
          height={600}
          className={styles.owlCharacter}
        />
        <div className={styles.overlayContent}>
          <h1 className={styles.title}>
            Spielen Sie das ultimative kostenlose Slot-Spiel!
            <br />Genießen Sie unbegrenzte Drehungen ohne Kosten.
            100% kostenloser Spaß und Spannung, jederzeit und überall verfügbar!
          </h1>
          <Link href="/game/index.html">
            <button className={styles.playButton}>Jetzt spielen</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
