"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center h-[75vh] sm:h-screen bg-black" id="home-section">
      <Image
        width={900}
        height={900}
        src="/game/images/bg_game-sheet0.webp"
        alt="Casino Environment"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-tight tracking-wider animate-fade-in-down drop-shadow-lg mb-8 sm:mb-10 mt-16 sm:mt-20 lg:mt-32 lg:mb-16">
          Explore the <span className="text-yellow-400">Best Social Casino Games</span>
        </h1>
        <p className="text-gray-300 text-md sm:text-lg lg:text-xl font-light max-w-2xl mx-auto animate-fade-in-up tracking-normal drop-shadow-md mb-8 sm:mb-10 lg:mb-16">
          Welcome to <span className="text-yellow-400">gamezones.info</span> – your go-to guide for social casino games. Check out our reviews to find the top games in slots, poker, blackjack, and more. Enjoy the thrill of gaming with zero risks, as our featured games are designed purely for fun.
        </p>

        {/* Play Now Button */}
        <Link href="/game/index.html">
          <button className="bg-white hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-2xl transition duration-500 ease-in-out shadow-lg animate-fade-in-up hover:scale-105">
            Play Now
          </button>
        </Link>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    </div>
  );
};

export default Banner;
