"use client";
import React from "react";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black" id="home-section">
      {/* Full-Width Background Image */}
      <img
        src="/images/Banner/banneridk.png"
        alt="Casino Environment"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-12 max-w-4xl mx-auto">
        <h1 className="text-6xl lg:text-8xl font-extrabold text-white leading-tight tracking-wider animate-fade-in-down drop-shadow-lg mb-10 mt-20 lg:mt-32 lg:mb-16">
          Discover the <span className="text-yellow-400">Top Social Casino Games</span>
        </h1>
        <p className="text-gray-300 text-md lg:text-xl mt-4 font-light max-w-2xl mx-auto animate-fade-in-up tracking-normal drop-shadow-md mb-20 lg:mb-28">
          Welcome to <span className="text-yellow-400">yourgamedestination.org</span> – your ultimate guide to social casino games. Explore our reviews and find the best games for slots, poker, blackjack, and more. Enjoy the thrill of gaming without the risks, as all our featured games are designed purely for entertainment.
        </p>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    </div>
  );
};

export default Banner;
