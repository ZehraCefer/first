"use client";
import Image from "next/image";
import React from "react";

const Home = () => {
  const game = {
    imgSrc: "/game/icons/gameicon.png",
    heading: "Egypt Slot",
    subheading: "Join quirky characters on a fun cartoon quest!",
    hiddenPara:
      "Step into a vibrant realm where animated characters and exciting slot spins abound. Uncover special bonuses and go head-to-head with quirky villains scheming to snatch your fortune!",
  };

  return (
    <div className="relative flex flex-col items-center justify-start h-screen bg-black pt-16" id="games">
      {/* Background and Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

      {/* Main Heading */}
      <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-wider mb-6 animate-fade-in-down drop-shadow-lg text-center">
        Welcome to <span className="text-yellow-400">Your Gaming Hub</span>
      </h1>

      {/* Decorative Element */}
      <div className="w-full max-w-sm h-1.5 bg-yellow-400 rounded-full mb-4"></div>

      {/* Game Section */}
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto text-center animate-fade-in-up border-2 border-yellow-500">
        <Image
          width={350}
          height={350}
          src={game.imgSrc}
          alt={game.heading}
          className="mx-auto w-28 h-28 lg:w-32 lg:h-32 object-contain mb-3 rounded-full"
        />
        <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-1">
          {game.heading}
        </h2>
        <h3 className="text-xl lg:text-2xl text-white font-medium mb-3">
          {game.subheading}
        </h3>
        <p className="text-gray-300 text-base lg:text-lg font-light mb-3">
          {game.hiddenPara}
        </p>
      </div>
      <div className="w-full max-w-sm h-1.5 bg-yellow-400 rounded-full mt-4"></div>
    </div>
  );
};

export default Home;
