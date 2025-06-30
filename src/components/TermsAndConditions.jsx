import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>

      <p className="text-lg mb-4">
        By using <strong>Tech With Tanmay</strong>, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use the website.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Use of Website</h2>
      <p className="text-lg mb-4">
        The content on this site is for informational and educational purposes only. You may not reproduce, distribute, or use our content for commercial purposes without prior written permission.
      </p>

      <h2 className="text-xl font-semibold mt-6">2. User Conduct</h2>
      <p className="text-lg mb-4">
        You agree not to use the website in any way that may damage, disable, or impair the site. You also agree not to post or share any harmful, offensive, or illegal content through our contact form or elsewhere on the site.
      </p>

      <h2 className="text-xl font-semibold mt-6">3. Intellectual Property</h2>
      <p className="text-lg mb-4">
        All content, branding, and design elements on Tech With Tanmay are the property of the website owner and protected by copyright laws.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Limitation of Liability</h2>
      <p className="text-lg mb-4">
        We do our best to provide accurate and up-to-date information, but we do not guarantee the accuracy or completeness of any content. We are not liable for any losses or damages that may occur from the use of this site.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Changes to Terms</h2>
      <p className="text-lg mb-4">
        We may update these terms and conditions from time to time. Continued use of the site after any changes constitutes your acceptance of the new terms.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Contact</h2>
      <p className="text-lg mb-4">
        If you have any questions about these Terms and Conditions, feel free to <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.
      </p>

      <p className="text-lg text-gray-400 mt-8">
        Last updated: April 2025
      </p>
    </div>
  );
};

export default TermsAndConditions;
