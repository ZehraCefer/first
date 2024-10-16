import { FaCoins, FaPlay, FaCogs } from "react-icons/fa";
import React from "react";

const slotGameSteps = [
  {
    title: "Set Your Bet",
    description: "Choose your coin size and number of paylines. Adjust the amount to match your desired bet.",
    icon: FaCoins,
  },
  {
    title: "Spin the Reels",
    description: "Click the spin button to start the game. Watch the symbols as they spin and hope for a winning combination.",
    icon: FaPlay,
  },
  {
    title: "Understand the Payouts",
    description: "Check the paytable to see how much each symbol combination pays. Look out for special bonus features!",
    icon: FaCogs,
  },
];

const HowToPlaySlots = () => {
  return (
    <div className="mx-auto max-w-5xl pt-20 px-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="how-to-play-section">
      <h3 className="col-span-full text-3xl text-center font-bold text-white mb-10">How to Play Slot Games</h3>
      {slotGameSteps.map((step, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg rounded-2xl p-5 text-center transition duration-300 hover:shadow-2xl hover:scale-105"
        >
          <div className="text-white text-4xl mb-4">
            <step.icon />
          </div>
          <h4 className="text-2xl font-semibold text-white mb-2">{step.title}</h4>
          <p className="text-white text-sm">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HowToPlaySlots;
