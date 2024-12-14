import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id); // Znajdź sekcję po ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Płynne przewijanie
    }
    setIsOpen(false); // Zamyka menu
  };

  return (
    <header className="top-0 w-full text-secondary z-20 pt-4 bg-transparent">
      <nav className="container mx-auto flex justify-end items-center">
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Ikona X */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Ikona hamburger */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 font-light">
          <li>
            <a
              href="#home"
              className="hover:underline decoration-light underline-offset-8"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline decoration-light underline-offset-8"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:underline decoration-light underline-offset-8"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:underline decoration-light underline-offset-8"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#opinions"
              className="hover:underline decoration-light underline-offset-8"
            >
              Opinions
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline decoration-light underline-offset-8"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-1/3 bg-secondary text-dark flex flex-col items-center justify-center text-lg leading-[2.5] z-50 shadow-lg">
          <button
            className="absolute top-4 right-4 text-dark focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Ikona X */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <a
            href="#home"
            className="hover:underline hover:decoration-light underline-offset-4"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:underline hover:decoration-light underline-offset-4"
            onClick={(e) => handleLinkClick(e, "#about")}
          >
            About
          </a>
          <a
            href="#education"
            className="hover:underline hover:decoration-light underline-offset-4"
            onClick={(e) => handleLinkClick(e, "#education")}
          >
            Education
          </a>
          <a
            href="#projects"
            className="hover:underline hover:decoration-light underline-offset-4"
            onClick={(e) => handleLinkClick(e, "#projects")}
          >
            Projects
          </a>
          <a
            href="#opinions"
            className="hover:underline hover:decoration-light underline-offset-4"
            onClick={(e) => handleLinkClick(e, "#opinions")}
          >
            Opinions
          </a>
          <a
            href="#contact"
            className="hover:underline hover:decoration-light underline-offset-4"
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
