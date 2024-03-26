import React from "react";
import { Link } from "react-router-dom";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-3">
      <div className="grid   gap-4 px-4">
        <h1 className="text-purple-600 lg:text-center text-2xl">Ashok Palkollu</h1>
        <div className="md:flex md:flex-wrap justify-center  space-x-5">
          <a href="#1">
            <h1>About</h1>
          </a>
          <a href="#2">
            <h1>Skills</h1>
          </a>
          <a href="#3">
            <h1>Experince</h1>
          </a>
          <a href="#4">
            <h1>Projects</h1>
          </a>
          <a href="#5">
            <h1>Education</h1>
          </a>
          
        </div>
        <div className="md:flex md:flex-wrap space-x-3 justify-center">
          <Link to="https://www.linkedin.com/in/palakollu-ashok-a218822626">
            {" "}
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link to="https://github.com/Palakollu-Ashok">
            <FaGithub className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
