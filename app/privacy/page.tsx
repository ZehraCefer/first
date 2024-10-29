"use client";
import React from 'react';
import { InformationCircleIcon, ShieldCheckIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-800 rounded-lg shadow-md mt-32 mb-32">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Privacy Policy</h1>
      <p className="text-white mb-6 text-lg">
        We are committed to respecting your privacy and safeguarding your personal information. This policy explains the types of data we gather, how we use it, and the measures we take to protect it.
      </p>

      <div className="space-y-8">
        {/* Information We Collect Section */}
        <div className="flex items-start">
          <InformationCircleIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Information We Collect</h2>
            <p className="text-white mb-4 text-base">
              We collect various personal details when you visit our website, create an account, or interact with us. This may include information like your name, email address, and details about your site usage.
            </p>
          </div>
        </div>

        {/* How We Use Your Data Section */}
        <div className="flex items-start">
          <ShieldCheckIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">How We Use Your Data</h2>
            <p className="text-white mb-4 text-base">
              The information we gather helps us enhance our services, maintain communication with you, and improve your overall experience on our site, ensuring a more personalized and engaging interaction.
            </p>
          </div>
        </div>

        {/* Cookies and Tracking Technologies Section */}
        <div className="flex items-start">
          <UserCircleIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Cookies and Tracking Technologies</h2>
            <p className="text-white mb-4 text-base">
              We use cookies and similar tools to improve user experience and analyze site traffic. These technologies help us understand how you interact with our website and services.
            </p>
          </div>
        </div>

        {/* Data Security Section */}
        <div className="flex items-start">
          <ShieldCheckIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Data Security</h2>
            <p className="text-white mb-4 text-base">
              We prioritize the security of your information, implementing strict measures to guard against unauthorized access, alteration, or loss. Your safety remains our top concern.
            </p>
          </div>
        </div>

        {/* Your Rights Section */}
        <div className="flex items-start">
          <InformationCircleIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Your Rights</h2>
            <p className="text-white mb-4 text-base">
              You have the right to request access to the personal information we hold about you, as well as request corrections or deletions. We are dedicated to honoring these rights in line with applicable laws.
            </p>
          </div>
        </div>

        {/* Changes to This Policy Section */}
        <div className="flex items-start">
          <UserCircleIcon className="h-8 w-8 text-yellow-400 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Updates to This Privacy Policy</h2>
            <p className="text-white mb-4 text-base">
              We may update this privacy policy from time to time. Any changes will be posted on this page, and we encourage you to review it regularly to stay informed about our practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
