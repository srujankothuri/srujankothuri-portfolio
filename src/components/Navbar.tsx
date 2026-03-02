import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "roles", label: "Target Roles" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      // Scrolled state for glassmorphism
      setScrolled(window.scrollY > 20);

      // Scroll progress
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      // Active section detection
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

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? theme === "dark"
              ? "bg-gray-900/70 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
              : "bg-white/70 backdrop-blur-xl border-b border-blue-400/20 shadow-lg shadow-blue-500/5"
            : theme === "dark"
              ? "bg-gray-900 border-b-2 border-cyan-500"
              : "bg-white border-b-2 border-blue-400 shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          
          {/* Logo & Name */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleScroll("home")}
              className={`text-xl font-bold w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
              }`}
            >
              SK
            </button>

            <span className="ml-3 text-lg font-semibold tracking-wide relative group hidden sm:block">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent transition-all duration-300 ease-in-out group-hover:brightness-125">
                SRUJAN KOTHURI
              </span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`relative px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-300 whitespace-nowrap group ${
                  activeSection === item.id
                    ? theme === "dark"
                      ? "text-cyan-400"
                      : "text-blue-600"
                    : theme === "dark"
                      ? "text-gray-400 hover:text-gray-200"
                      : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                {/* Active underline indicator */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-4/5 bg-gradient-to-r from-blue-500 to-cyan-500"
                      : "w-0 group-hover:w-3/5 bg-gray-400/50"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Side — Theme Toggle + Hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                  : "text-gray-600 hover:text-blue-500 hover:bg-blue-500/10"
              }`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hamburger — visible below lg */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                  : "text-gray-600 hover:text-blue-500 hover:bg-blue-500/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className={`fixed top-0 right-0 z-50 h-full w-72 lg:hidden ${
                theme === "dark"
                  ? "bg-gray-900 border-l border-gray-700/50"
                  : "bg-white border-l border-gray-200"
              }`}
            >
              {/* Header */}
              <div className={`flex items-center justify-between p-5 border-b ${
                theme === "dark" ? "border-gray-700/50" : "border-gray-200"
              }`}>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-bold text-lg">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white hover:bg-gray-800"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col px-3 py-4 gap-0.5">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => handleScroll(item.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? theme === "dark"
                          ? "text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-400"
                          : "text-blue-600 bg-blue-500/10 border-l-2 border-blue-500"
                        : theme === "dark"
                          ? "text-gray-400 hover:text-white hover:bg-gray-800/50 border-l-2 border-transparent"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-l-2 border-transparent"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;