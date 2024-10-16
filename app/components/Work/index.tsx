"use client";
import React from "react";

const Home = () => {
  const game = {
    imgSrc: "/game/icons/icon-512.png",
    heading: "Slot Toons",
    subheading: "Join quirky characters on a cartoon adventure!",
    hiddenPara:
      "Dive into a colorful world where animated characters and thrilling slot spins await. Unlock special features and face off against comical villains aiming to steal your riches!",
  };

  return (
    <div className="relative flex flex-col items-center justify-start h-screen bg-black pt-20" id="home-section">
      {/* Background and Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

      {/* Main Heading */}
      <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-wider mb-10 animate-fade-in-down drop-shadow-lg">
        Welcome to <span className="text-yellow-400">Your Gaming Hub</span>
      </h1>

      {/* Decorative Element */}
      <div className="w-full max-w-md h-2 bg-yellow-400 rounded-full mb-6"></div>

      {/* Game Section */}
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto text-center animate-fade-in-up border-2 border-yellow-500">
        <img
          src={game.imgSrc}
          alt={game.heading}
          className="mx-auto w-32 h-32 lg:w-36 lg:h-36 object-contain mb-4 rounded-full"  // Added border-radius here
        />
        <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
          {game.heading}
        </h2>
        <h3 className="text-2xl lg:text-3xl text-white font-medium mb-4">
          {game.subheading}
        </h3>
        <p className="text-gray-300 text-lg lg:text-xl font-light mb-4">
          {game.hiddenPara}
        </p>
      </div>

      {/* Additional Decorative Element */}
      <div className="w-full max-w-md h-2 bg-yellow-400 rounded-full mt-6"></div>
    </div>
  );
};

export default Home;
