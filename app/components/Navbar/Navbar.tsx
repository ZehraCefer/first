import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Logo/gamezone.svg"
            alt="Logo"
            width={150}
            height={100}
            className={styles.logo}
          />
        </Link>

        {/* Centered Nav Links */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="#games" className={styles.navLink}>Games</Link>
          <Link href="/features" className={styles.navLink}>Features</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
        </div>

        {/* "Play" Button */}
        <Link
          href="/game/index.html"
          className={styles.playButton}
        >
          Play Now
        </Link>

        {/* Mobile Menu Icon */}
        <div className={styles.mobileMenuIcon}>
          <Bars3Icon className="h-8 w-8" onClick={() => setIsOpen(true)} />
        </div>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Drawerdata />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
