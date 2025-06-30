import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AutoShutdownBlog = () => {
  return (
    <>
      <Navbar />
      <div className="black pt-5 pb-5">
        <Helmet>
          <title>How to Set Auto Shutdown Timer in Windows</title>
          <meta
            name="description"
            content="Learn how to set an auto shutdown timer in Windows using simple commands and tools. Never worry about leaving your PC running for too long."
          />
          <meta property="og:image" content="/images/auto-shutdown.jpg" />
          <meta property="og:title" content="Auto Shutdown Timer in Windows" />
          <meta
            property="og:description"
            content="Set an auto shutdown timer in Windows using built-in commands for better power management."
          />
        </Helmet>

        <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            ⏰ How to Set Auto Shutdown Timer in Windows
          </h1>

          <img
            src="/images/auto-shutdown-thumbnail.png"
            alt="Auto Shutdown Timer in Windows"
            className="rounded-xl shadow-md mb-6 w-full"
          />

          <p className="text-lg mb-4">
            Setting an auto shutdown timer can help you manage your system better, save power, and avoid leaving your PC running overnight. Here's how you can do it:
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🛠️ Steps to Set Auto Shutdown Timer:</h2>
          <ol className="list-decimal list-inside text-lg space-y-2 mb-4">
            <li>Press <strong>Windows + R</strong> to open the Run dialog box.</li>
            <li>Type <strong>cmd</strong> and press Enter to open the Command Prompt.</li>
            <li>Type the following command to set the timer:
              <code className="bg-gray-100 px-2 py-1 rounded ml-2">shutdown -s -t 3600</code>
            </li>
            <li>This will set your computer to shut down after 1 hour (3600 seconds).</li>
          </ol>

          <p className="text-lg mb-4">
            You can change the time by adjusting the number after the `-t` option. For example, for 30 minutes, use `shutdown -s -t 1800`.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">💡 Additional Tips:</h2>
          <ul className="list-disc list-inside text-lg space-y-2 mb-6">
            <li>To cancel a scheduled shutdown, type the following command in Command Prompt: 
              <code className="bg-gray-100 px-2 py-1 rounded ml-2">shutdown -a</code>
            </li>
            <li>You can also create a shortcut with this command to make it more accessible.</li>
          </ul>

          <p className="text-center font-semibold text-xl text-green-600">
            🎉 Your system will now automatically shut down after the specified time!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AutoShutdownBlog;
