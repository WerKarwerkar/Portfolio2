import React from "react";
import picture1 from "../assets/AlleBids.png";
import picture2 from "../assets/Coccinelle.png";
import picture3 from "../assets/VistaVenue.png";

function Projects() {
  const projects = [
    {
      title: "Semester Project 2 - AlleBids",
      description:
        "AlleBids is an auction where users can add items to be bid on and bid on items other users have put up for auction.",
      link: "https://harmonious-stardust-2e08de.netlify.app",
      image: picture1,
    },
    {
      title: "JavaScript Frameworks CA - Coccinelle",
      description:
        "Coccinelle is a responsive e-commerce app built with React, featuring smooth navigation and an intuitive shopping experience.",
      link: "https://wercia-bejbe-app2.netlify.app",
      image: picture2,
    },
    {
      title: "Project Exam 2 - VistaVenue",
      description:
        "VistaVenue is a sleek booking platform for managing and exploring accommodation options. It offers a user-friendly experience for travelers and venue owners.",
      link: "https://vistavenue.netlify.app",
      image: picture3,
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-transparent p-8">
      <h1 className="text-4xl font-thin mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-xs sm:max-w-lg lg:max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded text-center flex flex-col justify-between"
          >
            <img
              src={project.image}
              alt={`${project.title} thumbnail`}
              className="w-full h-48 object-cover pt-4 rounded"
            />
            <div>
              <h2 className="text-lg text-primary text-start font-medium mt-4">
                {project.title}
              </h2>
              <p className="mt-2 text-start text-primary text-sm">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              className="text-light mt-4 inline-block self-center hover:underline hover:underline-offset-[6px]"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
