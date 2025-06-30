import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RandomNumberBlog = () => {
  return (
    <>
      <Navbar />
      <div className="black pt-5 pb-5">
        <Helmet>
          <title>How to Generate Random Numbers in Python and JavaScript</title>
          <meta
            name="description"
            content="Learn how to generate random numbers using simple code in Python and JavaScript. Code examples for both languages."
          />
          <meta property="og:image" content="/images/random-number.jpg" />
          <meta property="og:title" content="Random Number Generator in Python & JavaScript" />
          <meta
            property="og:description"
            content="Master random number generation in Python and JS with this step-by-step guide."
          />
        </Helmet>

        <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            🎲 Generate Random Numbers in Python and JavaScript
          </h1>

          <img
            src="/images/random-number-thumbnail.png"
            alt="Random Number Generation"
            className="rounded-xl shadow-md mb-6 w-full"
          />

          <p className="text-lg mb-4">
            Need to generate random numbers in your code? Here's how to do it in both Python and JavaScript.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🐍 Python:</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
{`import random

# Generate a random number between 1 and 100
num = random.randint(1, 100)
print("Random Number:", num)`}
          </pre>

          <p className="text-lg mb-4">
            You can explore more functions of Python's <code>random</code> module from the
            <a
              href="https://docs.python.org/3/library/random.html"
              className="text-blue-600 underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              official Python documentation
            </a>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">🌐 JavaScript:</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
{`// Generate a random number between 1 and 100
const num = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", num);`}
          </pre>

          <p className="text-lg mb-4">
            Want to dive deeper into how <code>Math.random()</code> works under the hood? Check out the
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"
              className="text-blue-600 underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              official MDN documentation
            </a>
            for in-depth details.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">💡 Tips:</h2>
          <ul className="list-disc list-inside text-lg space-y-2 mb-6">
            <li>Use these methods in games, simulations, or data sampling projects.</li>
            <li>
              For cryptographic security, use more secure methods like Python’s <code>secrets</code> module or Web Crypto API in JS.
            </li>
          </ul>

          <p className="text-center font-semibold text-xl text-green-600">
            🎉 Now you know how to generate random numbers in both Python and JavaScript!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RandomNumberBlog;
