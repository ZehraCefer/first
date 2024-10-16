import React, { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <main
      className={`fixed inset-0 z-40 bg-black bg-opacity-90 transform ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      } transition-all duration-500 ease-in-out`}
    >
      {/* Close Button */}
      <div className="absolute top-5 right-5 text-white">
        <XMarkIcon className="h-10 w-10 cursor-pointer" onClick={() => setIsOpen(false)} />
      </div>

      {/* Drawer Content */}
      <section className="flex flex-col justify-center items-center h-full text-white text-2xl space-y-8">
        {children}
      </section>
    </main>
  );
};

export default Drawer;
