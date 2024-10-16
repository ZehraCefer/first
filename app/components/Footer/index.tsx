"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for signing up!");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About Us Section */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <Image
              src="/images/Logo/gamezone.svg"
              alt="Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-sm leading-relaxed">
              yourgamedestination.org offers a secure space for users to explore social casino games without real-money risks. Our focus is on fun and education, not on aggregating or affiliating with casino sites.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              {["Home", "Games", "Features", "FAQ"].map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href="/" className="hover:text-yellow-400 transition duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center">
              <Image
                src="/images/Footer/email.svg"
                alt="Email Icon"
                width={20}
                height={20}
              />
              <a
                href="mailto:contact@gamezones.info"
                className="ml-2 text-sm text-gray-300 hover:text-yellow-400 transition duration-200"
              >
                contact@gamezones.info
              </a>
            </div>
          </div>

          {/* Email Subscription Form */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 text-black rounded outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-white text-black rounded hover:bg-yellow-500 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Responsible Gaming Section */}
        <div className="flex flex-col items-center mt-12 md:mt-16">
          <h4 className="text-lg font-semibold mb-4">Responsible Gaming</h4>
          <div className="flex items-center justify-center gap-10">
            <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
              <Image src="/gamcare.svg" alt="GamCare" width={110} height={30} className="h-8" />
            </a>
            <a href="/">
              <Image src="/18+disclaimer.svg" alt="18+ Disclaimer" width={100} height={900} />
            </a>
            <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              <Image src="/gamblingaware.svg" alt="Gamble Aware" width={150} height={50} className="h-8" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 mb-10">
          <p className="text-center text-sm">
            © 2024 - All Rights Reserved by{" "}
            <Link href="https://gamezones.info/" target="_blank" className="underline hover:text-yellow-400 transition duration-200">
              gamezones.info
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
