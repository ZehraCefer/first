"use client";
import { GiGemPendant, GiCutDiamond, GiCrystalGrowth, GiLockedChest } from "react-icons/gi";
import styles from "./Faq.module.css";

const faqData = [
  {
    icon: <GiGemPendant className={styles.faqIcon} />,
    title: "Was sind Social Games?",
    content:
      "Social Games sind so gestaltet, dass sie das Erlebnis traditioneller Spiele wie Slot-Spiele, Poker und Blackjack nachahmen, jedoch ohne den Einsatz von echtem Geld. Spieler erhalten virtuelles Guthaben, oft in Form von kostenlosen Münzen oder Tokens bei der Anmeldung. Während des Spiels können Sie mehr verdienen oder, falls gewünscht, zusätzliche Münzen im Spiel kaufen. Diese Spiele sind beliebt, da sie den Nervenkitzel und die Herausforderung des Spielens ohne finanzielles Risiko bieten. Viele enthalten auch Bestenlisten, Erfolge und Herausforderungen, die das Erlebnis unterhaltsam und spannend machen und eine großartige Möglichkeit bieten, Spiele zu genießen und sich online mit anderen zu verbinden.",
  },
  {
    icon: <GiCutDiamond className={styles.faqIcon} />,
    title: "Genuss ohne Risiko",
    content:
      "Ein wesentlicher Vorteil von Social Games ist, dass sie ohne echtes Geld auskommen. Sie können neue Strategien ausprobieren, verschiedene Spiele erkunden und einfach das Spiel genießen, ohne sich um finanzielle Verluste zu sorgen. Einige Spiele bieten In-App-Käufe für virtuelle Münzen, um die Spielzeit zu verlängern oder einzigartige Funktionen freizuschalten, aber diese sind vollkommen optional. Social Games sind ideal für diejenigen, die den Nervenkitzel des Spielens ohne finanzielle Nachteile erleben möchten. Sie bieten eine großartige Möglichkeit, die Grundlagen zu lernen, Fähigkeiten zu verfeinern und sich auf reines Entertainment zu konzentrieren.",
  },
  {
    icon: <GiCrystalGrowth className={styles.faqIcon} />,
    title: "Was macht Social Games attraktiv?",
    content:
      "Social Games haben über alle Altersgruppen hinweg an Popularität gewonnen, da sie fesselnd und dynamisch sind. Sie ermöglichen es Spielern, sich mit Freunden zu verbinden oder weltweit neue Leute kennenzulernen. Funktionen wie Live-Chat, Bestenlisten und Multiplayer-Herausforderungen schaffen ein Gemeinschaftsgefühl unter den Spielern. Mit verschiedenen Themen, von Abenteuern bis hin zu klassischen Spielen, bieten diese Erlebnisse eine vollständige Immersion. Ob Sie ein kurzes Spiel oder eine längere Spielsitzung bevorzugen, Social Games eignen sich sowohl für Gelegenheits- als auch für engagierte Spieler. Sie bieten Belohnungen wie virtuelle Trophäen, Levelaufstiege und besondere Events, sodass stets etwas zur Unterhaltung beiträgt.",
  },
  {
    icon: <GiLockedChest className={styles.faqIcon} />,
    title: "Sicherheit und Schutz in Social Games",
    content:
      "Social Games sind auf die Sicherheit der Spieler ausgerichtet und gewährleisten, dass kein Glücksspiel mit echtem Geld stattfindet. Sie bieten ein sicheres und entspanntes Erlebnis, bei dem Spieler sich verantwortungsbewusst vergnügen können. Virtuelle Währung steht im Mittelpunkt, aber optionale Käufe können das Spielerlebnis für Interessierte verbessern. Die meisten Plattformen verfügen über strenge Sicherheitsprotokolle, einschließlich Datenverschlüsselung und sicherer Zahlungsmethoden, um Transaktionen zu schützen. Zugangskontrollen verhindern auch die Nutzung durch Minderjährige und machen es zu einem familienfreundlichen Raum. Um das Beste aus Ihrem Erlebnis herauszuholen, überwachen Sie die Kontoeinstellungen und passen Sie die Privatsphäre bei Bedarf an. Social Games sind eine sichere, unterhaltsame Wahl für alle, die Spaß ohne finanzielles Risiko suchen.",
  },
];

const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      <h3 className={styles.faqTitle}>Häufig gestellte Fragen</h3>
      <p className={styles.faqDescription}>
        Interessiert an Social Games? Hier erfahren Sie alles, was Sie wissen müssen, um sie in vollen Zügen zu genießen.
        Entdecken Sie, was diese Spiele so unterhaltsam macht, wie sie sich von traditionellen Spielen unterscheiden und wie Sie das Beste aus Ihrem Erlebnis machen können.
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
