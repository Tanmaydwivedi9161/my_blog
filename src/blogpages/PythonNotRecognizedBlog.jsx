import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PythonNotRecognizedBlog = () => {
  return (
    <>
    <Navbar/>
      <div className="black pb-5 pt-5">
      <Helmet>
        <title>Fix Python Not Recognized Error – How to Set PATH Variable in Windows</title>
        <meta
          name="description"
          content="Learn how to fix the 'Python not recognized' error by setting the PATH variable in Windows step-by-step."
        />
        <meta property="og:image" content="/images/python-not-recognized-thumbnail.png" />
        <meta property="og:title" content="Fix Python Not Recognized Error" />
        <meta
          property="og:description"
          content="Fix Python PATH errors in Windows. A simple guide to set the environment variable and get Python working."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          ⚡ Fix Python Not Recognized Error – How to Set PATH Variable in Windows
        </h1>

        <img
          src="/images/python-not-recognized-thumbnail.png"
          alt="Fix Python Not Recognized"
          className="rounded-xl shadow-md mb-6 w-full"
        />

        <p className="text-lg mb-4">
          Are you encountering the "Python is not recognized as an internal or external command" error while trying to run Python in Windows? Don't worry! Here's a step-by-step guide to fix it.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🔍 1. Problem Explanation</h2>
        <p className="text-lg mb-4">
          The error message "python is not recognized as an internal or external command" occurs when the Python executable path is not added to the system's environment variables. This means the command line doesn't know where to find Python when you try to run it.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🖥️ 2. Check If Python is Installed</h2>
        <p className="text-lg mb-4">
          Open Command Prompt (CMD) and run the following command:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
          python --version
        </pre>
        <p className="text-lg mb-4">
          If Python is installed, you'll see its version. If not, you'll need to install it first.
        </p>
        <img
          src="/images/version.png"
          alt="Check Python Installation"
          className="rounded-xl shadow-md mb-6 w-full"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-2">⚙️ 3. How to Set PATH Variable Manually</h2>
        <p className="text-lg mb-4">Follow these steps to set the Python PATH variable:</p>
        <ol className="list-decimal list-inside text-lg space-y-2 mb-4">
          <li>Go to your system's Environment Variables settings.</li>
          <li>Click on “Edit system variables” and find the “Path” variable under System variables.</li>
          <li>Add the following paths (replace &lt;YourUser&gt; with your username):</li>
        </ol>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
          C:\Users\YourUser\AppData\Local\Programs\Python\Python3X\
          <br></br>
          C:\Users\YourUser\AppData\Local\Programs\Python\Python3X\Scripts\
        </pre>
        <img
          src="/images/python-path-variable.png"
          alt="Set PATH Variable"
          className="rounded-xl shadow-md mb-6 w-full"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-2">🔁 4. Test Again</h2>
        <p className="text-lg mb-4">
          After setting the PATH variable, open a new CMD window and run:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
          python --version
        </pre>
        <p className="text-lg mb-4">
          You should now see Python's version, confirming that it's working properly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">💡 5. Tips:</h2>
        <ul className="list-disc list-inside text-lg space-y-2 mb-4">
          <li>Restart CMD after making changes to the PATH variable.</li>
          <li>If it still doesn’t work, try restarting your PC.</li>
          <li>Don't forget to check that `pip` is working as well using: <code>pip --version</code>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🎁 6. Bonus Tip</h2>
        <p className="text-lg mb-4">
          If you installed Python via the Microsoft Store and are facing permission issues, try using the official installer from <a href="https://python.org" className="text-blue-500">python.org</a> instead.
        </p>

        <p className="text-center font-semibold text-xl text-green-600">
          🎉 You’ve successfully fixed the Python not recognized error!
        </p>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default PythonNotRecognizedBlog;
