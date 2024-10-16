import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 shadow-lg z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center text-white text-2xl font-bold">
          <Link href="/">Brand</Link>
        </div>

        {/* Centered Nav Links */}
        <div className="hidden md:flex space-x-10 text-white text-lg">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="#games" className="hover:text-yellow-400 transition">Games</Link>
          <Link href="#features" className="hover:text-yellow-400 transition">Features</Link>
          <Link href="#faq" className="hover:text-yellow-400 transition">FAQ</Link>
          <Link href="/privacy" className="hover:text-yellow-400 transition">Privacy</Link>
        </div>

        {/* "Play" Button */}
        <Link
          href="/game/index.html"
          className="hidden md:block bg-yellow-400 text-white rounded-full px-8 py-2 text-lg font-semibold hover:bg-yellow-500 transition"
        >
          Play Now
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <Bars3Icon className="h-8 w-8 cursor-pointer" onClick={() => setIsOpen(true)} />
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
