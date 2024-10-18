import React, { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./Navbar.module.css";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <main
      className={`${styles.drawer} ${
        isOpen ? styles.drawerOpen : styles.drawerClosed
      }`}
    >
      {/* Close Button */}
      <div className={styles.closeButton}>
        <XMarkIcon className="h-10 w-10" onClick={() => setIsOpen(false)} />
      </div>

      {/* Drawer Content */}
      <section className={styles.drawerContent}>
        {children}
      </section>
    </main>
  );
};

export default Drawer;
