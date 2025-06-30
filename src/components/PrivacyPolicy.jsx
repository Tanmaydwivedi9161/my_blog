import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      
      <p className="text-lg mb-4">
        At Tech With Tanmay, we value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and share your personal data when you use our website.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
      <p className="text-lg mb-4">
        We collect information from you when you fill out our contact form, such as your name and email address. This information is used solely for communication purposes and will not be shared with third parties without your consent.
      </p>

      <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
      <p className="text-lg mb-4">
        The information we collect from you may be used to:
        <ul className="list-disc list-inside mt-2">
          <li>Respond to your inquiries or requests.</li>
          <li>Improve the quality of our content and services.</li>
          <li>Send you updates or relevant information if you've opted in to receive them.</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-6">3. Data Protection</h2>
      <p className="text-lg mb-4">
        We take appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction. However, please be aware that no data transmission over the internet is entirely secure.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Third-Party Links</h2>
      <p className="text-lg mb-4">
        Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites. We encourage you to read their privacy policies before providing any personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Changes to This Privacy Policy</h2>
      <p className="text-lg mb-4">
        We reserve the right to update or modify this privacy policy at any time. Any changes will be posted on this page with an updated revision date.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions or concerns about this privacy policy or how we handle your personal information, please <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
