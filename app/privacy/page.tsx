"use client";
import React from 'react';
import { InformationCircleIcon, ShieldCheckIcon, UserCircleIcon } from '@heroicons/react/24/solid'; // Ensure you have these icons installed

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-800 rounded-lg shadow-md mt-32 mb-32">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Privacy Policy</h1>
      <p className="text-white mb-6 text-lg">
        We value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, utilize, and safeguard your data.
      </p>

      <div className="space-y-8">
        {/* Information We Collect Section */}
        <div className="flex items-start">
          <InformationCircleIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Information We Gather</h2>
            <p className="text-white mb-4 text-base">
              We collect various types of personal information when you visit our site, register for an account, or interact with us through different means. This may include your name, email address, and usage data.
            </p>
          </div>
        </div>

        {/* How We Use Your Information Section */}
        <div className="flex items-start">
          <ShieldCheckIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Usage of Your Information</h2>
            <p className="text-white mb-4 text-base">
              The data we collect is utilized to improve our services, facilitate communication with you, and customize your experience on our website, ensuring a more engaging interaction.
            </p>
          </div>
        </div>

        {/* Cookies and Tracking Technologies Section */}
        <div className="flex items-start">
          <UserCircleIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Cookies and Tracking Technologies</h2>
            <p className="text-white mb-4 text-base">
              We utilize cookies and similar tracking technologies to enhance user experience and analyze site traffic. These technologies help us understand how users interact with our services.
            </p>
          </div>
        </div>

        {/* Data Security Section */}
        <div className="flex items-start">
          <ShieldCheckIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Protecting Your Data</h2>
            <p className="text-white mb-4 text-base">
              We implement robust security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. Your safety is our priority.
            </p>
          </div>
        </div>

        {/* Your Rights Section */}
        <div className="flex items-start">
          <InformationCircleIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Your Rights</h2>
            <p className="text-white mb-4 text-base">
              You have the right to request access to your personal information, as well as request corrections or deletions. We are committed to honoring these rights in accordance with applicable laws.
            </p>
          </div>
        </div>

        {/* Changes to This Policy Section */}
        <div className="flex items-start">
          <UserCircleIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Updates to This Privacy Policy</h2>
            <p className="text-white mb-4 text-base">
              We may revise this privacy policy periodically. Any changes will be posted on this page, and we encourage you to review it regularly to stay informed about our practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
