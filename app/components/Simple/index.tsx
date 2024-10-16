const CombinedComponent = () => {
  return (
    <div className="relative mx-auto max-w-7xl py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-red-700 mb-4">
          Explore Top Social Casino Games!
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Your go-to resource for exciting casino games, available anytime.
        </p>
      </div>

      {/* Simple Section */}
      <div className="bg-red-700 rounded-lg shadow-lg text-center text-white p-8 mb-12">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
          Discover and Play the Best Social Casino Games!
        </h3>
        <p className="text-lg lg:text-xl font-normal leading-relaxed mb-4">
          Dive into endless fun with our detailed reviews of top social casino games.
        </p>
        <p className="text-lg lg:text-xl font-normal leading-relaxed mb-4">
          From new releases to timeless classics, find hidden gems that keep you entertained—all for free.
        </p>
        <p className="text-lg lg:text-xl font-normal leading-relaxed">
          Explore our reviews to uncover your next game obsession!
        </p>
      </div>

      {/* Divider */}
      <div className="border-t-4 border-yellow-500 mb-12" />

      {/* Trade Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg text-center text-white p-8 mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Play Anytime, Anywhere!
        </h1>
        <p className="text-lg lg:text-xl font-normal leading-relaxed mb-4">
          Find top social casino games wherever you go.
        </p>
        <p className="text-lg lg:text-xl font-normal leading-relaxed mb-4">
          Easily locate and enjoy highly-rated games for endless fun anytime, anywhere.
        </p>
        <p className="text-lg lg:text-xl font-normal leading-relaxed">
          Browse our recommendations to quickly discover the best games for you.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="bg-yellow-500 rounded-lg shadow-lg text-center text-gray-800 p-8">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Dive In?
        </h2>
        <p className="text-lg lg:text-xl font-normal mb-4">
          Join our community and explore a vast selection of social casino games for everyone!
        </p>
      </div>
    </div>
  );
};

export default CombinedComponent;
