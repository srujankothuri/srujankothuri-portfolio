import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import Contact from "./Contact";
import { useTheme } from "./ThemeContext";

const Portfolio = () => {
  return (
    <>
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Sections with proper spacing */}
      <div className="container mx-auto px-4">
        <section id="home" className="pt-24">
          <Home />
        </section>
        <section id="about" className="pt-24">
          <About />
        </section>
        <section id="projects" className="pt-24">
          <Projects />
        </section>
        <section id="skills" className="pt-24">
          <Skills />
        </section>
        <section id="resume" className="pt-24">
          <Resume />
        </section>
        <section id="contact" className="pt-24">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Portfolio;
