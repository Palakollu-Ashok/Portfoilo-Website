import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 z-[999]  md:px-20 lg:px-40 bg-[#000300] text-white sticky top-0">
      <a href="#1" className="w-full text-xl font-bold text-purple-500">
        Ashok Palakollu
      </a>

      {/* Desktop nav */}
      <ul className="hidden lg:flex">
        <Link to="#1">
          <li className="p-4 text-center w-32 hover:text-red-600">About</li>
        </Link>
        <a href="#2">
          <li className="p-4 text-center w-32 hover:text-red-600">Skills</li>
        </a>
        {/* Dropdown */}
        <a href="#3">
          <li className="p-4 w-32 text-center hover:text-red-600">Experince</li>
        </a>
        <a href="#4">
          <li className="p-4 w-32 text-center hover:text-red-600">Projects</li>
        </a>
        <a href="#5">
          <li className="p-4 w-32 text-center hover:text-red-600">Education</li>
        </a>
        <li className=" flex  space-x-6">
          <a
            href="https://github.com/Palakollu-Ashok"
            target="_blank"
            className="border border-purple-500 text-purple-500 w-32 h-fit  rounded-full   p-3"
          >
            Github Profile
          </a>
        </li>
      </ul>

      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile nav */}
      <div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4"></h1>
          <Link to="#1">
            <h2 className="p-4 border-b text-xl  hover:text-red-600  border-gray-600">
              About
            </h2>
          </Link>
          <Link to="#2">
            <h2 className="p-4 border-b   hover:text-red-600  text-xl  border-gray-600">
              Skills
            </h2>
          </Link>

          <div>
            <Link to="#3">
              {" "}
              <li className="p-4 flex   text-xl border-b border-gray-600 ">
                Experince
              </li>
            </Link>
            <Link to="#4">
              {" "}
              <h2 className="p-4 text-xl  border-b border-gray-600">
                Education
              </h2>
            </Link>{" "}
            <a to="#5">
              {" "}
              <h2 className="p-4 text-xl  border-b cursor-pointer border-gray-600">
                Projects
              </h2>
            </a>{" "}
            <a href="https://github.com/Palakollu-Ashok" target="_blank">
              <h2 className="p-4 text-xl  border-b cursor-pointer border-gray-600">
                Github Profile
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
