import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NodejsServerBlog() {
  return (
    <>
    <Navbar />
    <div className="black pb-5 pt-5">
      <Helmet>
        <title>How to Set Up a Simple Web Server Using Node.js</title>
        <meta
          name="description"
          content="Learn how to set up a simple web server using Node.js to serve static files and build your first web application."
        />
        <meta property="og:image" content="/images/nodejs-web-server-thumbnail.png" />
        <meta property="og:title" content="Set Up a Simple Web Server Using Node.js" />
        <meta
          property="og:description"
          content="Step-by-step guide to setting up a simple web server using Node.js, ideal for beginners who want to build a website."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          ⚡ How to Set Up a Simple Web Server Using Node.js
        </h1>

        <img
          src="/images/nodejs-web-server-thumbnail.png"
          alt="Node.js Web Server Setup"
          className="rounded-xl shadow-md mb-6 w-full"
        />

        <p className="text-lg mb-4">
          In this guide, we’ll show you how to set up a simple web server using Node.js, a powerful JavaScript runtime. This web server will serve static files like HTML, CSS, and JavaScript, and help you start your journey into web development.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🔍 1. Prerequisites</h2>
        <p className="text-lg mb-4">
          Before we begin, ensure that you have the following installed on your computer:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2 mb-4">
          <li>Node.js (which includes npm) – You can download it from <a href="https://nodejs.org" className="text-blue-500">nodejs.org</a></li>
          <li>A code editor (VS Code or any other editor of your choice)</li>
          <li>Basic understanding of JavaScript</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🖥️ 2. Initializing Your Project</h2>
        <p className="text-lg mb-4">
          Let's start by creating a new folder for our project and initializing it with npm. Open your terminal or command prompt and follow these steps:
        </p>
        <ol className="list-decimal list-inside text-lg space-y-2 mb-4">
          <li>Create a new directory for your project: <code>mkdir my-web-server</code></li>
          <li>Navigate to the directory: <code>cd my-web-server</code></li>
          <li>Initialize the project with npm: <code>npm init -y</code></li>
        </ol>
        <p className="text-lg mb-4">
          This will create a <code>package.json</code> file, which is essential for managing project dependencies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">⚙️ 3. Installing Express.js</h2>
        <p className="text-lg mb-4">
          We'll use Express, a web framework for Node.js, to simplify the process of setting up our web server. To install it, run the following command:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
          npm install express
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🌍 4. Setting Up the Web Server</h2>
        <p className="text-lg mb-4">
          Now that we have Express installed, let’s create a simple server. Create a new file called <code>server.js</code> in your project directory and add the following code:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
          const express = require('express'); <br />
          const app = express(); <br />
          const port = 3000; <br />
           
          {/* app.get('/', (req, res) => {
            res.send('Hello, World!');
          }); */}

          {/* app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
          }); */}
        </pre>
        <p className="text-lg mb-4">
          This code creates a basic server that listens on port 3000 and responds with "Hello, World!" when you visit the root URL.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🔁 5. Running the Web Server</h2>
        <p className="text-lg mb-4">
          To start the server, open your terminal and run the following command:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
          node server.js
        </pre>
        <p className="text-lg mb-4">
          You should see a message in the terminal saying, "Server is running at http://localhost:3000". Open your browser and navigate to that URL to see your web server in action.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">💡 6. Serving Static Files</h2>
        <p className="text-lg mb-4">
          You can serve static files like HTML, CSS, and JavaScript by using the <code>express.static</code> middleware. For example, to serve files from a "public" folder:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
          app.use(express.static('public'));
        </pre>
        <p className="text-lg mb-4">
          Place your HTML, CSS, and JS files in a folder named "public" inside your project directory, and they’ll be accessible via your web server.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🎁 7. Bonus: Handling Different Routes</h2>
        <p className="text-lg mb-4">
          You can add more routes to handle different paths. For example:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
          {/* app.get('/about', (req, res) => {
            res.send('This is the about page!');
          }); */}
        </pre>

        <p className="text-center font-semibold text-xl text-green-600">
          🎉 Congratulations! You’ve set up your first web server using Node.js!
        </p>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default NodejsServerBlog