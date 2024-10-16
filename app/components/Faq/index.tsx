"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface FaqData {
  heading: string;
  subheading: string;
}

const faqData: FaqData[] = [
  {
    heading: "1. What Are Social Casino Games?",
    subheading:
      "Social casino games are primarily free-to-play, designed to mimic the gambling experience without providing real money rewards. Players use virtual in-app currency exclusively to enjoy these games.",
  },
  {
    heading: "2. Do Social Casino Games Involve Real Money?",
    subheading:
      "Social casino games do not involve real money. They are free-to-play and offer virtual currency for in-game activities. Since players cannot win actual cash, these games are intended purely for entertainment and enjoyment.",
  },
  {
    heading: "3. What Motivates People to Play Social Casino Games?",
    subheading:
      "People play social casino games for a variety of reasons, such as entertainment, social interaction, and the excitement of simulated gambling without the financial risk. These games typically offer captivating graphics, diverse themes, and the chance to connect with friends, enhancing the overall gaming experience.",
  },
  {
    heading: "4. What Is the Safety Level of Social Casino Games?",
    subheading:
      'Social casino games are generally safe since they do not involve real money transactions. However, players should be cautious of in-app purchases for virtual currency, as these can accumulate if not closely monitored. It\'s essential to play responsibly and stay within personal spending limits.',
  },
];

const Faq = () => {
  return (
    <div className="my-20 px-6" id="faq-section">
      <h3 className="text-center text-4xl lg:text-5xl font-bold text-white mb-5">
        Frequently Asked Questions
      </h3>
      <p className="text-center lg:text-lg font-normal text-white mb-10">
        Find answers to the most common questions about social casino games.
        Whether you're new to these games or a seasoned player, we have the information you need!
      </p>

      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10">
          {/* FAQ Cards */}
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 hover:bg-gray-700 ${
                index % 2 === 0 ? "md:mr-4" : "md:ml-4"
              }`}
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center w-full text-lg font-medium text-white">
                      <span>{item.heading}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } h-6 w-6 text-blue-400`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-3 text-white text-base">
                      {item.subheading}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>

        {/* Illustration Section */}
        <div className="flex justify-center mt-10">
          <Image
            src="/images/Faq/faqillus.png"
            alt="FAQ Illustration"
            width={800}
            height={800}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
