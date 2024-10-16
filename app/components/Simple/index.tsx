const CombinedComponent = () => {
  return (
    <div className="relative mx-auto max-w-7xl py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-red-700 mb-4">
          Discover the Best Social Casino Games!
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Your ultimate guide to thrilling casino games—anytime, anywhere.
        </p>
      </div>

      {/* Simple Section */}
      <div className="bg-red-700 rounded-lg shadow-lg text-center text-white p-8 mb-12">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
          Uncover and Experience the Top Social Casino Games!
        </h3>
        <p className="text-lg lg:text-xl font-normal leading-relaxed mb-4">
          Immerse yourself in a world of excitement and endless entertainment with our in-depth reviews of top-rated social casino games.
        </p>
        <p className="text-lg lg:text-xl font-normal leading-relaxed mb-4">
          Our platform features the newest releases, timeless classics, and hidden treasures that will keep you engaged for hours—all without costing you a cent.
        </p>
        <p className="text-lg lg:text-xl font-normal leading-relaxed">
          Check out our reviews to discover your next favorite game!
        </p>
      </div>

      {/* Divider */}
      <div className="border-t-4 border-yellow-500 mb-12" />

      {/* Trade Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg text-center text-white p-8 mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Enjoy Your Favorite Games Anytime, Anywhere!
        </h1>
        <p className="text-lg lg:text-xl font-normal leading-relaxed mb-4">
          Discover and enjoy the top social casino games no matter where you are.
        </p>
        <p className="text-lg lg:text-xl font-normal leading-relaxed mb-4">
          Our platform makes it simple to find highly rated games, so you can jump into your favorites and have endless fun anytime, anywhere.
        </p>
        <p className="text-lg lg:text-xl font-normal leading-relaxed">
          Browse our reviews and recommendations to easily find and enjoy the best games.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="bg-yellow-500 rounded-lg shadow-lg text-center text-gray-800 p-8">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Playing?
        </h2>
        <p className="text-lg lg:text-xl font-normal mb-4">
          Join our community and explore a wide variety of social casino games designed for everyone!
        </p>
      </div>
    </div>
  );
};

export default CombinedComponent;
