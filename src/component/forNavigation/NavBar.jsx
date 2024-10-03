import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          Climate Change Portal
        </a>
        <div className="flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#visualizations" className="text-white hover:text-gray-300">
            Data Visualizations
          </a>
          <a href="#info" className="text-white hover:text-gray-300">
            Climate Info
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            About Us
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
