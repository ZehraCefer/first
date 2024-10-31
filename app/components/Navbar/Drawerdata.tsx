import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

// Define the type for navigation items
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: false },
  // { name: "Games", href: "#games", current: false },
  { name: "Terms", href: "/terms", current: false },
  { name: "FAQ", href: "/faq", current: false },
  { name: "Privacy", href: "/privacy", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Drawerdata = () => {
  return (
    <div className={styles.drawerContainer}>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? styles.navLinkActive : styles.navLink
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
      <Link
        href="/game/index.html"
        className={styles.playButton}
      >
        Play Now
      </Link>
    </div>
  );
};

export default Drawerdata;
