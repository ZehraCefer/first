"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Danke für Ihre Anmeldung!");
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>

          {/* About Us Section */}
          <div className={styles.section}>
            <h2 className={styles.heading}>Über uns</h2>
            <p className={styles.subheading}>
              Wir bieten eine sichere und angenehme Online-Plattform, auf der Benutzer die aufregende Welt der sozialen Casino-Spiele erkunden können.
              Unser Hauptfokus liegt auf einem einzigartigen Spielerlebnis, das Unterhaltung, Bildung und verantwortungsbewusstes Spielen in den Vordergrund stellt,
              ohne die Risiken des Glücksspiels mit echtem Geld. Hier können Sie sich in soziale Casino-Spiele vertiefen, die ausschließlich für Spaß und Lernen entwickelt wurden,
              und so ein Verständnis für die Spiele in einer risikofreien Umgebung entwickeln.
            </p>
          </div>
          {/* Contact Us & Subscribe Section */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Kontaktieren Sie uns</h3>
            <p className={styles.subheading}>
              Schreiben Sie uns eine E-Mail an:{" "}
              <a href="mailto:contact@socialcasinodestination.com" className={styles.link}>
                contact@socialcasinodestination
              </a>
            </p>
            <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Abonnieren Sie mit Ihrer E-Mail"
                className={styles.input}
                required
              />
              <button
                type="submit"
                className={styles.button}
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>

        {/* Responsible Gaming Section */}
        <div className={styles.responsibleGaming}>
          <h4>Engagement für verantwortungsbewusstes Spielen</h4>
          <p>
            Wir sind voll und ganz dem verantwortungsbewussten Spielen verpflichtet. Es ist wichtig, dass Spieler die Kontrolle über ihre
            Spielaktivitäten behalten und bei Bedarf Unterstützung suchen. Wenn Sie das Gefühl haben, dass Ihre Spielgewohnheiten schwer zu kontrollieren sind oder Anlass zur Sorge geben,
            steht Hilfe zur Verfügung. Für Ressourcen und Unterstützung empfehlen wir Ihnen, folgende Websites zu besuchen: <br />
            <a href="https://www.gambleaware.org" target="_blank" rel="noopener noreferrer">www.gambleaware.org</a> oder <br />
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer">www.gamcare.org.uk</a>. Diese Organisationen
            bieten vertrauliche Hilfe und Behandlungsmöglichkeiten für ein sicheres und ausgeglichenes Spielerlebnis.
          </p>

          {/* SVG Logos */}
          <div className={styles.logoContainer}>
            <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
              <Image src="/gamcare.svg" alt="GamCare" width={120} height={30} />
            </a>
            <a href="/">
              <Image src="/18+disclaimer.svg" alt="18+ Hinweis" width={60} height={30} />
            </a>
            <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              <Image src="/gamblingaware.svg" alt="Gamble Aware" width={120} height={30} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>
            © 2024 - Alle Rechte vorbehalten von{" "}
            <Link href="http://socialcasinodestination.com/" target="_blank" className={styles.link}>
            socialcasinodestination.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
