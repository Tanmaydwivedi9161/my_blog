// src/pages/SystemConfigurationBlog.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SystemConfigurationBlog = () => {
  return (
    <>
      <Navbar />
      <div className="black pt-5 pb-5">
        <Helmet>
          <title>How to Check Your Windows System Configuration</title>
          <meta
            name="description"
            content="Learn how to easily check your Windows system specifications, including processor, RAM, and OS details."
          />
          <meta property="og:image" content="/images/system-configuration-thumbnail.png" />
          <meta property="og:title" content="Check Windows System Configuration" />
          <meta
            property="og:description"
            content="Step-by-step guide to view your system's specifications on Windows."
          />
        </Helmet>

        <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            🖥️ How to Check Your Windows System Configuration
          </h1>

          <img
            src="/images/system-configuration-thumbnail.png"
            alt="System Configuration"
            className="rounded-xl shadow-md mb-6 w-full"
          />

          <p className="text-lg mb-4">
            Need to know what hardware and software your PC is running? Here's a quick way to check your system configuration in Windows.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🔍 Steps:</h2>
          <ul className="list-disc list-inside text-lg space-y-2 mb-6">
            <li>Press <b>Windows + R</b> to open the Run dialog box.</li>
            <li>Type <code>msinfo32</code> and hit <b>Enter</b>.</li>
            <li>This opens the "System Information" window.</li>
            <li>Here you can see details like OS version, processor, RAM, BIOS version, and more.</li>
          </ul>

          <p className="text-lg mb-4">
            Alternatively, you can right-click on <b>My Computer</b> → <b>Properties</b> to view basic system information.
          </p>

          <p className="text-center font-semibold text-xl text-green-600">
            🖥️ Now you know how to quickly check your Windows system configuration!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SystemConfigurationBlog;
