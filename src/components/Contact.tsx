import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCommentDots, FaTimes } from "react-icons/fa";

const Contact = () => {
  const { theme } = useTheme();
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen px-6 relative overflow-hidden 
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('/background-pattern.svg')] bg-cover bg-center opacity-10"></div>

      {/* Heading */}
      <h1 className="text-6xl font-extrabold tracking-wide mb-3 drop-shadow-lg">Contact Me</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-light">
        Let's connect and create something extraordinary! 🚀
      </p>

      {/* Contact Icons */}
      <div className="flex gap-12 mb-12">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125">
          <FaGithub className="text-5xl drop-shadow-lg transition duration-300 hover:text-gray-400" />
        </a>

        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125">
          <FaLinkedin className="text-5xl text-blue-600 dark:text-blue-400 drop-shadow-lg transition duration-300 hover:text-blue-300" />
        </a>

        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125">
          <FaInstagram className="text-5xl text-pink-500 dark:text-pink-400 drop-shadow-lg transition duration-300 hover:text-pink-300" />
        </a>

        <a href="mailto:your-email@gmail.com" className="transition-transform transform hover:scale-125">
          <FaEnvelope className="text-5xl text-red-600 dark:text-red-400 drop-shadow-lg transition duration-300 hover:text-red-300" />
        </a>
      </div>

      {/* Chat Button */}
      <button 
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        onClick={() => setIsThankYouOpen(true)}
      >
        <FaCommentDots className="text-xl" />
      </button>

      {/* Thank You Message - Dark Mode Compatible */}
      {isThankYouOpen && (
        <div 
          className={`fixed bottom-20 right-6 w-80 rounded-lg shadow-lg p-4 transition-all duration-300
            ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Thank You!</h3>
            <button 
              onClick={() => setIsThankYouOpen(false)} 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTimes />
            </button>
          </div>
          <p className="text-sm">
            Thank you for visiting my website! Hope you have a great day ahead! 😊
          </p>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full text-center py-4 mt-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Developed and Designed by <span className="font-semibold">Srujan Kothuri</span>. 
          &copy; 2025 All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
