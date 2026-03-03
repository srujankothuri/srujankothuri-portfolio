import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import TargetRoles from "./TargetRoles";
import Contact from "./Contact";
import Terminal from "./Terminal";
import ScrollToTop from "./ScrollToTop";

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
          <TargetRoles />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

      <Terminal />
      <ScrollToTop />
    </>
  );
};

export default Portfolio;