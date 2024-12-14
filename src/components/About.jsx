import React from "react";
import portfolioPicture from "../assets/Me.JPG";

export default function About() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl sm:text-4xl font-thin mb-6 sm:mb-10">About Me</h1>

      <div className="flex flex-col rounded overflow-hidden md:flex-row items-center justify-between w-full max-w-xs sm:max-w-lg lg:max-w-3xl bg-secondary mx-auto">
        <div className="w-full md:w-1/4 flex justify-center md:justify-start">
          <img
            src={portfolioPicture}
            alt="Weronika Karczmarczyk"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
          />
        </div>

        <div className="w-full md:w-3/4 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
          <p className="text-primary pt-6 px-4 sm:px-6 md:px-8 pb-6 text-justify leading-[2]">
            I am a Frontend Developer who began my journey 2 years ago at Noroff
            School of Technology and Digital Media. I have built a strong
            foundation in web development, specializing in technologies such as
            HTML, CSS, WordPress, JavaScript, React, Bootstrap, and Tailwind.
          </p>
        </div>
      </div>
    </div>
  );
}
