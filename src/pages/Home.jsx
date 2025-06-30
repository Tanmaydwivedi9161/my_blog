import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Home() {
  // All cards data
  const cards = [
    {
      src: "/images/lock-folder-without-software-thumbnail.png",
      title: "Lock Folder Without Any Software",
      desc: "Learn how to lock your personal folders in Windows without installing any external software.",
      link: "/blog/folder-lock",
    },
    {
      src: "/images/tech-blog.png",
      title: "Fix Python Not Recognized Error – How to Set PATH Variable in Windows",
      desc: "Learn how to fix the 'Python not recognized' error by setting the PATH variable in Windows step-by-step.",
      link: "/blog/fix-python-not-recognized",
    },
    {
      src: "/images/one-click-open-multipal-websites.png",
      title: "How to Save and Open Multiple Websites with Just One Click",
      desc: "Learn how to save time and open multiple websites with a single click.",
      link: "/blog/one-click-multipal-websites",
    },
    {
      src: "/images/tech-blog.png",
      title: "15 Useful CMD Commands You Should Know",
      desc: "Discover 15 powerful CMD commands that will boost your productivity and help you troubleshoot your Windows system like a pro.",
      link: "/blog/useful-cmd-commands",
    },
    {
      src: "/images/tech-blog.png",
      title: "Generate Random Numbers in Python and JavaScript",
      desc: "Learn how to generate random numbers using simple code in Python and JavaScript. Code examples for both languages.",
      link: "/blog/random-number-generator",
    },
    {
      src: "/images/vscode-terminal-thumbnail.png",
      title: "How to Open the Terminal in Visual Studio Code",
      desc: "Learn how to quickly open and use the terminal in Visual Studio Code. Simple steps for beginners to boost productivity.",
      link: "/blog/open-terminal-vscode",
    },
    {
      src: "/images/system-configuration-thumbnail.png",
      title: "How to Check Your Windows System Configuration",
      desc: "Learn how to easily check your Windows system specifications, including processor, RAM, and OS details.",
      link: "/blog/system-configuration",
    },
    {
      src: "/images/tech-blog.png",
      title: "How to Password Protect Your Browser Profile",
      desc: "Learn how to secure your browser profile with a password to protect your browsing history, bookmarks, and settings.",
      link: "/blog/password-protect-browser",
    },
    {
      src: "/images/tech-blog.png",
      title: "How to Set Auto Shutdown Timer in Windows",
      desc: "Learn how to set an auto shutdown timer in Windows using simple commands and tools. Never worry about leaving your PC running for too long.",
      link: "/blog/auto-shutdown",
    },
    {
      src: "/images/tech-blog.png",
      title: "How to Run Python Code Online Without Installing Anything",
      desc: "Discover the best platforms to run Python code online instantly without downloading any software. Perfect for coding on the go!",
      link: "/blog/run-python-online",
    },
    {
      src: "/images/tech-blog.png",
      title: "Top 10 Keyboard Shortcuts to Save Time While Working on Windows",
      desc: "Boost your productivity with these essential Windows keyboard shortcuts like Windows+D, Alt+Tab, Ctrl+Shift+Esc, and more.",
      link: "/blog/keyboard-shortcuts-windows",
    },
    {
      src: "/images/tech-blog.png",
      title: "How to Set Up a Simple Web Server Using Node.js",
      desc: "Learn how to set up a basic web server with Node.js and handle HTTP requests to serve content dynamically.",
      link: "/blog/setup-web-server-nodejs",
    }
    
    
    // Add more cards if needed...
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Calculate the cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Page numbers
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <>
      <Navbar />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {currentCards.map((card, index) => (
          <Card
            key={index}
            src={card.src}
            title={card.title}
            desc={card.desc}
            link={card.link}
          />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center space-x-4 my-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Home;
