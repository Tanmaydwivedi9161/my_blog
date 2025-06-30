import React from 'react';
import { Link } from 'react-router-dom'; // Fix: use 'react-router-dom' instead of 'react-router'

function Card({ src, title, desc, link }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-4 pt-5 pb-7 mx-auto">
      <img
        src={src}
        alt={title}
        className="w-full h-48 md:h-56 object-cover rounded-md"
      />

      <h1 className="text-xl font-semibold mt-4 mb-2">{title}</h1>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>

      <Link to={link} target="_blank" rel="noopener noreferrer">
        <button className="text-blue-500 hover:text-red-500 font-medium">
          Read More →
        </button>
      </Link>
    </div>
  );
}

export default Card;
