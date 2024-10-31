"use client";
import React from 'react';
import { InformationCircleIcon, ShieldCheckIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Privacy = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#121212] rounded-lg shadow-md mt-12 mb-32">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Privacy Policy</h1>
      <p className="text-white mb-6 text-lg text-center">
        Your privacy is important to us. This policy outlines the types of data we collect, how we use it, and the steps we take to ensure its security.
      </p>

      <div className="space-y-8">
        {/* Information We Collect Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <InformationCircleIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Information We Gather</h2>
            <p className="text-white text-base">
              We collect certain personal information when you use our website, create an account, or contact us. This may include your name, email, and details about your interactions on our site.
            </p>
          </div>
        </div>

        {/* How We Use Your Data Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <ShieldCheckIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Our Use of Your Data</h2>
            <p className="text-white text-base">
              We use the data we collect to improve our services, keep in touch with you, and make your experience more personalized and enjoyable on our platform.
            </p>
          </div>
        </div>

        {/* Cookies and Tracking Technologies Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <UserCircleIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Cookies and Tracking</h2>
            <p className="text-white text-base">
              We use cookies and similar tracking technologies to enhance your experience and analyze website traffic. These tools help us better understand your engagement with our site.
            </p>
          </div>
        </div>

        {/* Data Security Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <ShieldCheckIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Protecting Your Data</h2>
            <p className="text-white text-base">
              We prioritize your data security with strict measures against unauthorized access, alteration, or loss, ensuring that your personal information remains safe.
            </p>
          </div>
        </div>

        {/* Your Rights Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <InformationCircleIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Your Privacy Rights</h2>
            <p className="text-white text-base">
              You are entitled to request access to your personal information held by us, as well as request updates or deletions. We are dedicated to honoring these rights in compliance with relevant laws.
            </p>
          </div>
        </div>

        {/* Changes to This Policy Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <UserCircleIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Policy Updates</h2>
            <p className="text-white text-base">
              We may update this policy periodically. Any changes will be posted here, and we encourage you to review it from time to time to stay informed about our practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
