import React from "react";
import picture1 from "../assets/AlleBids.jpeg";
import picture2 from "../assets/Coccinelle.jpeg";
import picture3 from "../assets/VistaVenue.jpeg";

function Projects() {
  const projects = [
    {
      title: "Semester Project 2 - AlleBids",
      description:
        "AlleBids is an auction where users can add items to be bid on and bid on items other users have put up for auction. By creating an account, users receive 100 credits to use.",
      link: "https://harmonious-stardust-2e08de.netlify.app",
      repo: "https://github.com/WerKarwerkar/semesterProject2",
      image: picture1,
    },
    {
      title: "JavaScript Frameworks CA - Coccinelle",
      description:
        "Coccinelle is a responsive e-commerce app built with React, featuring smooth navigation and an intuitive shopping experience.",
      link: "https://wercia-bejbe-app2.netlify.app",
      repo: "https://github.com/WerKarwerkar/wercia-bejbe-app2",
      image: picture2,
    },
    {
      title: "Project Exam 2 - VistaVenue",
      description:
        "VistaVenue is a sleek booking platform for managing and exploring accommodation options. It offers a user-friendly experience for travelers and venue owners.",
      link: "https://vistavenue.netlify.app",
      repo: "https://github.com/WerKarwerkar/Exam-app1",
      image: picture3,
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-transparent p-8">
      <h1 className="text-4xl font-thin mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-xs sm:max-w-2xl lg:max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded text-center flex flex-col justify-between max-w-sm sm:max-w-md lg:max-w-lg"
          >
            <img
              src={project.image}
              alt={`${project.title} thumbnail`}
              className="w-full h-48 object-cover pt-4 rounded"
            />
            <div className="flex flex-col justify-start min-h-[60px]">
              <h2 className="text-lg text-primary text-start font-medium mt-3">
                {project.title}
              </h2>
            </div>
            <div className="flex flex-col justify-start">
              <p className="mt-1 text-start text-primary text-sm">
                {project.description}
              </p>
              <div className="text-start mt-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-primary decoration-light hover:underline hover:underline-offset-[6px] inline-block"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mb-2 inline-block self-center hover:underline hover:underline-offset-[6px]"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
