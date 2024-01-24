import React from 'react';
import Head from './Head';

function Header() {
  return (
    <div>
      <Head />
      <hr className="border-t border-gray-300 mx-10 my-4 w-full md:w-full" />
      
      <nav className="flex justify-center space-x-6 text-2xl px-10 font-semibold">
        <a
          href="#"
          className="text-gray-800 hover:text-blue-500 hover:border-b-2 border-transparent transition-all duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-blue-500 hover:border-b-2 border-transparent transition-all duration-300"
        >
          Admissions
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-blue-500 hover:border-b-2 border-transparent transition-all duration-300"
        >
          Gallery
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-blue-500 hover:border-b-2 border-transparent transition-all duration-300"
        >
          Career
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-blue-500 hover:border-b-2 border-transparent transition-all duration-300"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-blue-500 hover:border-b-2 border-transparent transition-all duration-300"
        >
          Mandatory CBSE Disclosures
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-blue-500 hover:border-b-2 border-transparent transition-all duration-300"
        >
          ContactUs
        </a>
      </nav>
    </div>
  );
}

export default Header;
