import { FaShieldAlt, FaInfoCircle, FaUserFriends } from "react-icons/fa";

interface Feature {
  icon: React.ReactElement;
  heading: string;
  subheading: string;
}

const features: Feature[] = [
  {
    icon: <FaShieldAlt className="text-yellow-400 text-6xl mb-4" />,
    heading: "Security",
    subheading:
      "Your personal information is safeguarded by advanced encryption and security protocols, providing you with a secure and worry-free browsing experience.",
  },
  {
    icon: <FaInfoCircle className="text-yellow-400 text-6xl mb-4" />,
    heading: "Informative",
    subheading:
      "Explore social casino games and discover the most popular options, all without any financial obligation.",
  },
  {
    icon: <FaUserFriends className="text-yellow-400 text-6xl mb-4" />,
    heading: "User-Friendly",
    subheading:
      "Our platform is built to be user-friendly and easy to navigate, allowing visitors to quickly find and read reviews with ease.",
  },
];

const Features = () => {
  return (
    <section
      className="mx-auto max-w-6xl py-20 px-6 text-center"
      id="features-section"
    >
      <div className="mb-12">
        <h3 className="feature-font text-lg font-semibold mb-4">
          FEATURES
        </h3>
        <h2 className="text-offwhite text-4xl font-semibold leading-tight mb-6">
          The Most Reliable Source for Social Casino Information
        </h2>
        <p className="lg:text-lg font-normal text-bluish max-w-2xl mx-auto">
          At yourgamedestination.org, your safety and trust are our highest
          priorities. We do not offer any casino games ourselves; our mission is
          to educate users about social casino games and showcase the most
          popular options. With advanced security measures in place, we ensure
          that your data remains protected at all times.
        </p>
      </div>

      <div className="space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 p-4 flex justify-center">
              {feature.icon}
            </div>
            <div className="md:w-1/2 p-4 text-left">
              <h5 className="text-offwhite text-2xl font-bold mb-2">
                {feature.heading}
              </h5>
              <p className="text-lightblue text-base font-normal mb-4">
                {feature.subheading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
