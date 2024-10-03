import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 Climate Change Portal. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://ghgcenter.org" className="hover:text-gray-300">
            GHG Center
          </a>
          <a href="#privacy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-gray-300">
            Terms of Service
          </a>
        </div>
        <div className="mt-4">
          <a href="https://twitter.com" className="hover:text-gray-300">
            Twitter
          </a>{" "}
          |{" "}
          <a href="https://github.com" className="hover:text-gray-300">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
