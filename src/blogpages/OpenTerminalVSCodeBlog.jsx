import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OpenTerminalVSCodeBlog = () => {
  return (
    <>
      <Navbar />
      <div className="black pt-5 pb-5">
        <Helmet>
          <title>How to Open the Terminal in Visual Studio Code</title>
          <meta
            name="description"
            content="Learn how to quickly open and use the terminal in Visual Studio Code. Simple steps for beginners to boost productivity."
          />
          <meta property="og:image" content="/images/vscode-terminal.jpg" />
          <meta property="og:title" content="Open Terminal in VS Code" />
          <meta
            property="og:description"
            content="Boost productivity by learning to use the terminal inside VS Code."
          />
        </Helmet>

        <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            🖥️ How to Open the Terminal in Visual Studio Code
          </h1>

          <img
            src="/images/vscode-terminal-thumbnail.png"
            alt="Open Terminal in VS Code"
            className="rounded-xl shadow-md mb-6 w-full"
          />

          <p className="text-lg mb-4">
            Visual Studio Code comes with an integrated terminal that helps you run
            commands without leaving the editor. Here’s how you can open it:
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🛠️ Steps:</h2>
          <ol className="list-decimal list-inside text-lg space-y-2 mb-4">
            <li>Open Visual Studio Code.</li>
            <li>Go to the top menu and click on <strong>Terminal</strong>.</li>
            <li>Then select <strong>New Terminal</strong>.</li>
            <li>
              Alternatively, you can use the shortcut:
              <code className="bg-gray-100 px-2 py-1 rounded ml-2">Ctrl + `</code>
            </li>
          </ol>

          <p className="text-lg mb-4">
            This will open the terminal at the bottom of your VS Code window. You can learn more from the
            <a
              href="https://code.visualstudio.com/docs/editor/integrated-terminal"
              className="text-blue-600 underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              official VS Code terminal documentation
            </a>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">💡 Tips:</h2>
          <ul className="list-disc list-inside text-lg space-y-2 mb-6">
            <li>You can open multiple terminals using the + icon in the terminal panel.</li>
            <li>You can switch between bash, PowerShell, or CMD depending on your OS.</li>
          </ul>

          <p className="text-center font-semibold text-xl text-green-600">
            🎉 Now you can run commands without ever leaving VS Code!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpenTerminalVSCodeBlog;
