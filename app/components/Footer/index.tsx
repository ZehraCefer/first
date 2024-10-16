"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thanks for providing your email!");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About Us Section */}
          <div className="bg-red-600 rounded-lg shadow-md p-6">
            <Image
              src="/images/Logo/logo.svg"
              alt="Crypto-Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-sm leading-relaxed">
              At yourgamedestination.org, we offer a safe, informative space
              where users can explore social casino games without the risks
              tied to real money gambling. Our aim is education and
              entertainment, not aggregation or affiliation.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              {["Home", "Games", "Features", "FAQ"].map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href="/" className="hover:text-lightblue transition duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <Image
                src="/images/Footer/email.svg"
                alt="Email Icon"
                width={20}
                height={20}
              />
              <span className="ml-2 text-sm">contact@yourgamedestination.com</span>
            </div>
            {/* Email Subscription Form */}
            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 mb-2 text-black rounded"
                required
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-lightblue text-white rounded hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Responsible Gaming Section */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Responsible Gaming</h3>
            <div className="flex flex-col gap-4">
              <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
                <Image src="/gamcare.svg" alt="GamCare" width={160} height={40} />
              </a>
              <a href="/">
                <Image
                  src="/18+disclaimer.svg"
                  alt="18+ Disclaimer"
                  width={80}
                  height={40}
                />
              </a>
              <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/gamblingaware.svg"
                  alt="Gamble Aware"
                  width={160}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-lightblue mt-12 pt-6">
          <p className="text-center text-sm">
            © 2024 - All Rights Reserved by{" "}
            <Link
              href="https://yourgamedestination.com/"
              target="_blank"
              className="underline hover:text-lightblue transition duration-200"
            >yourgamedestination.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
