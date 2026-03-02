import React from "react";
import Navbar from "./Navbar";
import Experience from "./Experience";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import { useTheme } from "./ThemeContext";

// Placeholder components for new sections — will be built out in later steps
const PlaceholderSection = ({ id, title }: { id: string; title: string }) => {
  const { theme } = useTheme();
  return (
    <section
      id={id}
      className={`min-h-[60vh] flex items-center justify-center ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="text-center">
        <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
          theme === "dark" ? "text-cyan-400" : "text-blue-500"
        }`}>
          {id.toUpperCase()}
        </p>
        <h2 className={`text-3xl font-bold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}>
          {title}
        </h2>
        <p className={`mt-2 ${
          theme === "dark" ? "text-gray-500" : "text-gray-400"
        }`}>
          Coming soon...
        </p>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <div>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="roles">
          <PlaceholderSection id="roles" title="Target Roles" />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Portfolio;