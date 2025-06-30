// src/pages/PasswordProtectBrowserBlog.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PasswordProtectBrowserBlog = () => {
  return (
    <>
      <Navbar />
      <div className="black pt-5 pb-5">
        <Helmet>
          <title>How to Password Protect Your Browser Profile</title>
          <meta
            name="description"
            content="Learn how to secure your browser profile with a password to protect your browsing history, bookmarks, and settings."
          />
          <meta property="og:image" content="/images/password-protect-browser-thumbnail.png" />
          <meta property="og:title" content="Password Protect Your Browser" />
          <meta
            property="og:description"
            content="Secure your Google Chrome or other browser profiles by setting up a password easily."
          />
        </Helmet>

        <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            🔒 How to Password Protect Your Browser Profile
          </h1>

          <img
            src="/images/password-protect-browser-thumbnail.png"
            alt="Password Protect Browser"
            className="rounded-xl shadow-md mb-6 w-full"
          />

          <p className="text-lg mb-4">
            Worried about others accessing your browser data? Here's how you can add a password to your browser profile to stay secure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🛡️ Steps for Google Chrome:</h2>
          <ul className="list-disc list-inside text-lg space-y-2 mb-6">
            <li>Open <b>Chrome</b> and click on your profile icon.</li>
            <li>Click on <b>Manage Profiles</b>.</li>
            <li>Add a <b>New Profile</b> and set a password for it.</li>
            <li>Use extensions like <b>LockPW</b> if needed for better security.</li>
          </ul>

          <p className="text-lg mb-4">
            Not only Chrome, but browsers like Edge and Firefox also offer similar profile management options.
          </p>

          <p className="text-center font-semibold text-xl text-green-600">
            🔒 Stay protected by locking your browser profiles with a password!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PasswordProtectBrowserBlog;
