import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-100 px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="logo-container mb-2 sm:mb-0">
          <Link to="/">
            <h4 className="text-2xl font-bold logo-heading">
              Tech<span className="text-red-600">With</span>Tanmay
            </h4>
          </Link>
        </div>

        <div className="item-list-container sm:space-x-6 flex flex-row sm:flex-row items-center justify-center gap-2">
  <a href="/" className="font-medium text-gray-700 hover:text-green-500">Home</a>
  <a href="/about" className="font-medium text-gray-700 hover:text-green-500">About</a>
  <a href="/contact" className="font-medium text-gray-700 hover:text-green-500">Contact</a>
</div>
      </div>
    </nav>
  );
}

export default Navbar;
