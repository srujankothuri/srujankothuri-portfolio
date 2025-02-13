import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" }
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      for (let item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = item.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 border-b-2 border-cyan-500"
          : "bg-white border-b-2 border-blue-400 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo & Name */}
        <div className="flex items-center">
          <button onClick={() => handleScroll("home")} className="text-xl font-bold">
            SK
          </button>

          <span className="ml-4 text-lg font-semibold tracking-wide relative group">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-125">
              SRUJAN KOTHURI
            </span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative text-lg font-medium transition-transform duration-200 ease-in-out group ${
                activeSection === item.id
                  ? "text-blue-500 dark:text-cyan-400 font-bold"
                  : "text-gray-700 dark:text-gray-300"
              } hover:scale-110 ${
                item.id === "contact"
                  ? "text-teal-500 dark:text-teal-400 font-semibold"
                  : ""
              }`}
            >
              {item.label}
              {/* Underline Effect on Hover & Active Section */}
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-200 ease-in-out group-hover:w-full ${
                  activeSection === item.id ? "w-full" : ""
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
