import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, Rocket } from "lucide-react";
import { useTheme } from "./ThemeContext";

const RESUME_URL = "/Srujan_Kothuri_Software_Engineer_Resume.pdf";

const Home = () => {
  const { theme } = useTheme();

  const roles = [
    "data pipelines at scale",
    "distributed systems",
    "AI-powered applications",
    "full-stack products",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`relative min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-20 py-12 overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Left Section — Text Content */}
      <motion.div
        className="lg:w-3/5 space-y-6 text-center lg:text-left z-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Open to Work Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border backdrop-blur-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            borderColor:
              theme === "dark"
                ? "rgba(34,197,94,0.3)"
                : "rgba(34,197,94,0.4)",
            backgroundColor:
              theme === "dark"
                ? "rgba(34,197,94,0.08)"
                : "rgba(34,197,94,0.08)",
            color: theme === "dark" ? "#4ade80" : "#16a34a",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Open to Summer 2026 Internships & Fall 2026 Co-ops
        </motion.div>

        {/* Name */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Srujan
          </span>
        </h1>

        {/* Rotating Role — "I build" stays, suffix rotates */}
        <div className="h-10 flex items-center justify-center lg:justify-start">
          <p
            className={`text-2xl md:text-3xl font-semibold ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I build{" "}
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`inline-block ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              {roles[roleIndex]}
            </motion.span>
          </p>
        </div>

        {/* University */}
        <p
          className={`text-lg md:text-xl font-medium ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          MS in Computer Science @{" "}
          <span
            className={`font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Northeastern University
          </span>
        </p>

        {/* Value Proposition */}
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I build end-to-end data pipelines, distributed systems, and
          AI-powered applications — from architecture to deployment. Passionate
          about turning complex problems into scalable, production-ready
          solutions.
        </p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center gap-4 pt-2 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* Primary — Explore Work */}
          <button
            onClick={() => handleScrollTo("projects")}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
          >
            <Rocket size={16} />
            Explore My Work
          </button>

          {/* Secondary — Resume */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border transition-all duration-300 hover:scale-105 ${
              theme === "dark"
                ? "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-500/5"
            }`}
          >
            <FileText size={16} />
            Resume
          </a>

          {/* Tertiary — Contact */}
          <button
            onClick={() => handleScrollTo("contact")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
              theme === "dark"
                ? "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-500/5"
            }`}
          >
            <Mail size={16} />
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Right Section — Photo */}
      <motion.div
        className="lg:w-2/5 flex justify-center mt-12 lg:mt-0 z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="relative group">
          {/* Glow ring behind image */}
          <div
            className={`absolute -inset-1 rounded-2xl blur-xl transition-opacity duration-500 group-hover:opacity-100 ${
              theme === "dark"
                ? "bg-gradient-to-r from-blue-500/30 to-cyan-500/30 opacity-50"
                : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-30"
            }`}
          />
          <img
            src="https://github.com/srujankothuri/srujankothuri-portfolio/blob/main/src/components/srujan.jpg?raw=true"
            alt="Srujan Kothuri"
            className="relative w-[350px] md:w-[400px] lg:w-[420px] h-[380px] md:h-[430px] lg:h-[450px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          {/* Floating accent border */}
          <div
            className={`absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 -z-10 transition-all duration-500 group-hover:-bottom-4 group-hover:-right-4 ${
              theme === "dark" ? "border-cyan-500/30" : "border-blue-500/30"
            }`}
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <button
          onClick={() => handleScrollTo("about")}
          className={`flex flex-col items-center gap-1 transition-colors duration-300 ${
            theme === "dark"
              ? "text-gray-500 hover:text-cyan-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Scroll Down
          </span>
          <ArrowDown size={18} className="animate-bounce" />
        </button>
      </motion.div>
    </div>
  );
};

export default Home;