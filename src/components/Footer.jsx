import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Optional: social icons
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Logo or Title */}
        <div className="text-lg font-semibold">Tech With Tanmay</div>

        {/* Center: Social Icons */}
        <div className="flex space-x-4 my-4 md:my-0">
          <a href="#" className="hover:text-blue-400 "><Facebook size={25} /></a>
          <Link to="https://www.instagram.com/tanmaydwivediofficial/" target="_blank" className="hover:text-pink-400"><Instagram size={25} /></Link>
          <a href="https://x.com/Tanmaydwivedi91" className="hover:text-sky-400"><Twitter size={25} /></a>
          <Link to="https://www.linkedin.com/in/tanmaydwivedi9161/" target="_blank" className="hover:text-sky-400"><Linkedin size={25} /></Link>
        </div>

        {/* Right: Copyright and Links to Privacy Policy and Terms */}
        <div className="text-sm text-white-400">
          <div>© {new Date().getFullYear()} Tanmay. All rights reserved.</div>
          <div className="mt-2">
            <Link to="/privacy-policy" className="hover:text-blue-400 text-sm mr-4">Privacy Policy</Link>|
            <Link to="/terms-and-conditions" className="hover:text-blue-400 text-sm ml-4">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
