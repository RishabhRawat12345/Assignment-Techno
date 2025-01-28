import React, { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow-lg ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          TechNova
        </a>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className={`hover:underline ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`hover:underline ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`hover:underline ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`hover:underline ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <a
          href="#get-started"
          className={`hidden md:inline-block font-medium rounded-full px-5 py-2 ${
            darkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-blue-600 text-white hover:bg-blue-500"
          }`}
        >
          Get Started
        </a>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={handleMenuToggle}
          className="block md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Dark Mode Toggle Button */}
        
         
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center space-y-4 py-4`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <a
              href="#home"
              className={`hover:underline ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`hover:underline ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`hover:underline ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`hover:underline ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
