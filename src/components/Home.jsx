import React from "react";
import About from "./About";
import Contact from "./Contact";
import Opinions from "./Opinions";
import Projects from "./Projects";
import Education from "./Education";

const Home = () => {
  return (
    <div className="relative w-full">
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center text-secondary bg-transparent p-8"
      >
        <h1 className="text-5xl font-normal drop-shadow-lg mb-8">
          Weronika Karczmarczyk
        </h1>
        <h2 className="text-2xl font-extralight mb-8">Frontend Developer</h2>
      </section>

      {/* Maksymalna przerwa na telefonach */}
      <section
        id="about"
        className="min-h-screen bg-transparent p-8 mb-96 sm:mb-0"
      >
        <About />
      </section>

      {/* Maksymalna przerwa na telefonach */}
      <section
        id="projects"
        className="min-h-screen bg-transparent p-8 mb-96 sm:mb-0"
      >
        <Projects />
      </section>

      {/* Mniejsza przerwa na telefonach między Education a Opinions */}
      <section
        id="education"
        className="min-h-screen bg-transparent p-8 mb-8 sm:mb-64 md:mb-72"
      >
        <Education />
      </section>

      <section id="opinions" className="min-h-screen bg-transparent p-8">
        <Opinions />
      </section>

      <section id="contact" className="min-h-screen bg-transparent p-8">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
