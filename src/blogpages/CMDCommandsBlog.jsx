import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CMDCommandsBlog = () => {
  return (
    <>
      <Navbar />
      <div className="black pb-5 pt-5">
        <Helmet>
          <title>15 Useful CMD Commands You Should Know – Boost Your Windows Productivity</title>
          <meta
            name="description"
            content="Discover 15 powerful Windows CMD commands that every user should know to troubleshoot, automate tasks, and improve productivity."
          />
          <meta property="og:image" content="/images/useful-cmd-commands-thumbnail.png" />
          <meta property="og:title" content="15 Useful CMD Commands You Should Know" />
          <meta
            property="og:description"
            content="Learn 15 essential CMD commands for Windows. Ideal for beginners and pros to handle tasks quickly via Command Prompt."
          />
        </Helmet>

        <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            ⚡ 15 Useful CMD Commands You Should Know – Boost Your Windows Productivity
          </h1>

          <img
            src="/images/useful-cmd-commands-thumbnail.png"
            alt="Useful CMD Commands"
            className="rounded-xl shadow-md mb-6 w-full"
          />

          <p className="text-lg mb-4">
            Windows Command Prompt (CMD) is a powerful tool that lets you perform various system tasks with just a few commands. Here’s a detailed list of the most useful CMD commands that can make your life easier.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🛠️ 1. Check IP Configuration</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">ipconfig</pre>
          <p className="text-lg mb-4">Displays your system's IP address, subnet mask, and default gateway.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🌐 2. Flush DNS Cache</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">ipconfig /flushdns</pre>
          <p className="text-lg mb-4">Fixes DNS-related issues by clearing cached DNS entries.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🔍 3. View Active Network Connections</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">netstat -an</pre>
          <p className="text-lg mb-4">Lists all active connections and listening ports.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🧹 4. Clear Screen</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">cls</pre>
          <p className="text-lg mb-4">Clears the CMD screen for a cleaner workspace.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">💻 5. List Directory Files</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">dir</pre>
          <p className="text-lg mb-4">Shows all files and folders in the current directory.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🚀 6. Open Any Application</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">start notepad</pre>
          <p className="text-lg mb-4">Replaces 'notepad' with any program name to launch it from CMD.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🔐 7. Create a Password-Protected Folder (Batch Method)</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">attrib +h +s foldername</pre>
          <p className="text-lg mb-4">Hides and secures folders using attribute commands.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">💾 8. Check Disk Health</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">chkdsk</pre>
          <p className="text-lg mb-4">Scans your disk for errors and repairs them if possible.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">📦 9. System File Checker</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">sfc /scannow</pre>
          <p className="text-lg mb-4">Scans and restores corrupted Windows system files.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🔒 10. Manage User Accounts</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">net user</pre>
          <p className="text-lg mb-4">Displays all user accounts on your system.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">⚡ 11. Shutdown Timer</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">shutdown -s -t 60</pre>
          <p className="text-lg mb-4">Shuts down your PC after 60 seconds.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🔁 12. Restart Immediately</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">shutdown -r -t 0</pre>
          <p className="text-lg mb-4">Restarts your PC instantly.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🧠 13. View System Information</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">systeminfo</pre>
          <p className="text-lg mb-4">Displays complete system information including OS, memory, updates, and more.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🖼️ 14. Task Manager via CMD</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">taskmgr</pre>
          <p className="text-lg mb-4">Opens the Task Manager directly.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">📂 15. Create Directory</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">mkdir foldername</pre>
          <p className="text-lg mb-4">Creates a new folder in the current directory.</p>

          <p className="text-center font-semibold text-xl text-green-600">
            🎉 Now you're a CMD power user! Start using these commands to control your PC like a pro.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CMDCommandsBlog;
