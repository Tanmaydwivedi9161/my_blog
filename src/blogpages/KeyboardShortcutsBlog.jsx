import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const KeyboardShortcutsBlog = () => {
  return (
    <>
      <Navbar />
      <div className="black pt-5 pb-5">
        <Helmet>
          <title>Top 10 Keyboard Shortcuts to Save Time While Working on Windows</title>
          <meta
            name="description"
            content="Boost your productivity with these top 10 essential Windows keyboard shortcuts. Learn quick ways to navigate, manage tasks, and multitask efficiently."
          />
          <meta property="og:image" content="/images/keyboard-shortcuts-thumbnail.png" />
          <meta property="og:title" content="Top 10 Windows Keyboard Shortcuts" />
          <meta
            property="og:description"
            content="Save time with these must-know keyboard shortcuts on Windows. Master multitasking, navigation, and system control in no time."
          />
        </Helmet>

        <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            ⌨️ Top 10 Keyboard Shortcuts to Save Time While Working on Windows
          </h1>

          <img
            src="/images/keyboard-shortcuts-thumbnail.png"
            alt="Windows Keyboard Shortcuts"
            className="rounded-xl shadow-md mb-6 w-full"
          />

          <p className="text-lg mb-4">
            Keyboard shortcuts are a game-changer when it comes to speeding up your workflow. Here are the top 10 Windows shortcuts you must know to work smarter, not harder:
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🚀 Must-Know Shortcuts:</h2>
          <ol className="list-decimal list-inside text-lg space-y-2 mb-4">
            <li><strong>Windows + D</strong> - Show desktop instantly.</li>
            <li><strong>Alt + Tab</strong> - Quickly switch between open applications.</li>
            <li><strong>Ctrl + Shift + Esc</strong> - Open Task Manager directly.</li>
            <li><strong>Windows + L</strong> - Lock your computer quickly.</li>
            <li><strong>Ctrl + C / Ctrl + V</strong> - Copy and paste selected items.</li>
            <li><strong>Windows + E</strong> - Open File Explorer.</li>
            <li><strong>Alt + F4</strong> - Close the current application.</li>
            <li><strong>Windows + S</strong> - Open search bar immediately.</li>
            <li><strong>Ctrl + Z</strong> - Undo the last action.</li>
            <li><strong>Ctrl + Shift + T</strong> - Reopen the last closed browser tab.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🎯 Why Use Keyboard Shortcuts?</h2>
          <ul className="list-disc list-inside text-lg space-y-2 mb-6">
            <li>Significantly faster than using the mouse.</li>
            <li>Enhances multitasking and efficiency.</li>
            <li>Reduces repetitive strain on hands and wrists.</li>
          </ul>

          <p className="text-center font-semibold text-xl text-green-600">
            💻 Master these shortcuts and work like a true pro!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KeyboardShortcutsBlog;
