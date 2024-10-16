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
      "Social casino games are free-to-play and designed to simulate a gambling experience without real cash prizes. Players use only virtual currency for gameplay.",
  },
  {
    heading: "2. Do Social Casino Games Use Real Money?",
    subheading:
      "These games are free-to-play with virtual currency. Since there's no real cash involved, they’re meant purely for fun and entertainment.",
  },
  {
    heading: "3. Why Do People Play Social Casino Games?",
    subheading:
      "People play these games for enjoyment, social connections, and the thrill of simulated gambling without financial risk. They often feature engaging visuals, themes, and options to interact with friends.",
  },
  {
    heading: "4. Are Social Casino Games Safe?",
    subheading:
      'Social casino games are generally safe as they avoid real money transactions. However, players should be mindful of optional in-app purchases. It\'s best to play responsibly and keep track of spending.',
  },
];

const Faq = () => {
  return (
    <div className="my-20 px-6" id="faq-section">
      <h3 className="text-center text-5xl lg:text-6xl font-bold text-gray-50 mb-5">
        Common Questions
      </h3>
      <p className="text-center lg:text-xl font-normal text-gray-300 mb-10">
        Get quick answers to popular questions about social casino games. Whether you are just starting or a regular player, we’ve got you covered!
      </p>

      <div className="flex justify-center mb-12">
        <Image
          src="/images/Faq/faqillus.png"
          alt="FAQ Illustration"
          width={400}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center w-full text-xl font-medium text-white">
                      <span>{item.heading}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } h-6 w-6 text-blue-500 transition-transform`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-4 text-gray-200 text-lg">
                      {item.subheading}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
