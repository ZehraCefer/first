import Image from 'next/image';
import Link from "next/link";
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/Banner/bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <Image
          src="/images/Banner/owl-character.png"
          alt="Owl Character"
          width={600}
          height={600}
          className={styles.owlCharacter}
        />
        <div className={styles.overlayContent}>
          <h1 className={styles.title}>Play the Ultimate Free Slot Game!
            <br />Enjoy unlimited spins with zero cost involved.
            100% free fun and excitement, available anytime, anywhere!</h1>
          <Link href="/game/index.html">
            <button className={styles.playButton}>Play Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
