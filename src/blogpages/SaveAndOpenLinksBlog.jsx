import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SaveAndOpenLinksBlog = () => {
  return (
    <>
      <Navbar />
      <div className="black pb-5 pt-5">
        <Helmet>
          <title>How to Save and Open Multiple Websites with Just One Click</title>
          <meta
            name="description"
            content="Learn how to open multiple websites with a single click using a simple .bat file method. Save time and boost your productivity with this tech trick!"
          />
          <meta
            name="keywords"
            content="open multiple websites, batch file to open websites, productivity tech trick, windows tips, automate website opening, .bat file for websites, browser automation, open links with one click, save websites shortcut, tech hacks"
          />
          <meta
            property="og:title"
            content="How to Save and Open Multiple Websites with Just One Click"
          />
          <meta
            property="og:description"
            content="Open multiple websites with one click using a batch file. A quick and easy method to automate your daily browsing routine."
          />
        </Helmet>

        <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            🌐 How to Save and Open Multiple Websites with Just One Click
          </h1>
          
          <img
          src="/images/one-click-open-multipal-websites.png"
          alt="Fix Python Not Recognized"
          className="rounded-xl shadow-md mb-6 w-full"
        />
          <p className="text-lg mb-4">
            Do you find yourself opening the same websites every day? Whether it's your email,
            favorite news site, or work tools — this quick tech trick will help you launch all
            your frequently used websites with just one click!
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🛠️ 1. Create a Batch File</h2>
          <p className="text-lg mb-4">
            A batch file (.bat) is a simple text file that can execute commands in Windows. We’ll
            use it to open multiple websites at once.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">✍️ 2. Write the Code</h2>
          <p className="text-lg mb-4">
            Open Notepad and paste the following code (replace the links with your own):
          </p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
            start https://www.google.com{"\n"}
            start https://www.youtube.com{"\n"}
            start https://mail.google.com
          </pre>
          <p className="text-lg mb-4">
            Each <code>start</code> command will open a new browser tab with the specified link.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">💾 3. Save the File</h2>
          <p className="text-lg mb-4">
            Now save this file with a <code>.bat</code> extension. For example:
            <code> open-websites.bat </code>. Be sure to select “All Files” when saving.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🚀 4. Run It</h2>
          <p className="text-lg mb-4">
            Double-click the file you just created, and all the websites will open instantly in
            your default browser!
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">💡 5. Bonus Tips</h2>
          <ul className="list-disc list-inside text-lg space-y-2 mb-4">
            <li>Pin the batch file to your taskbar for easy access.</li>
            <li>Create multiple files for different tasks (e.g., work, study, entertainment).</li>
            <li>You can even schedule this file using Task Scheduler in Windows.</li>
          </ul>

          <p className="text-center font-semibold text-xl text-green-600">
            🎉 That’s it! You’ve now automated your daily browsing with one simple click.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SaveAndOpenLinksBlog;
