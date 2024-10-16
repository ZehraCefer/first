import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md mt-32 mb-32">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Privacy Policy</h1>
      <p className="text-white mb-6 text-lg">
        Your privacy is important to us. This privacy policy explains how we collect,
        use, and protect your information.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Information We Collect</h2>
          <p className="text-white mb-4 text-base">
            We may collect personal information from you when you visit our site, register on
            the site, or interact with us in other ways.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">How We Use Your Information</h2>
          <p className="text-white mb-4 text-base">
            We use the information we collect to improve our services, communicate with you,
            and personalize your experience on our site.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Cookies and Tracking Technologies</h2>
          <p className="text-white mb-4 text-base">
            We may use cookies and similar tracking technologies to enhance your experience
            and analyze site traffic.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Data Security</h2>
          <p className="text-white mb-4 text-base">
            We take appropriate security measures to protect your information from unauthorized
            access, alteration, disclosure, or destruction.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Your Rights</h2>
          <p className="text-white mb-4 text-base">
            You have the right to request access to the personal information we hold about you
            and to request corrections or deletions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white border-b-4 border-gray-300 pb-2">Changes to This Policy</h2>
          <p className="text-white mb-4 text-base">
            We may update this privacy policy from time to time. Any changes will be posted
            on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
