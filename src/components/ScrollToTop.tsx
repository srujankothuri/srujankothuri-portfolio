import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTheme } from "./ThemeContext";

const ScrollToTop = () => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-xl border shadow-lg transition-all duration-300 hover:scale-110 ${
            theme === "dark"
              ? "bg-gray-800/80 backdrop-blur-sm border-gray-700/50 text-cyan-400 hover:border-cyan-500/30 hover:shadow-cyan-500/10"
              : "bg-white/80 backdrop-blur-sm border-gray-200 text-blue-500 hover:border-blue-500/30 hover:shadow-blue-500/10"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;