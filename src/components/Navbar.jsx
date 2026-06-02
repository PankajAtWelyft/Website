import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <nav
      className="max-w-full sticky top-0 z-50 px-4 md:px-8 backdrop-blur-md   bg-white/30
     h-25 justify-between flex items-center "
    >
      <div className="flex items-center">
        <img src={logo} className="w-10 m-5 py-2" alt="" />
        <h1 className="font-bold text-3xl">Welyft</h1>
      </div>
      <div className=" hidden md:flex font-bold mr-4 text-xl gap-6">
        <Link to="/" className="group flex flex-col items-center">
          Home
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <a href="/#about" className="group flex flex-col items-center">
          About
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full"></span>
        </a>

        <a href="/#services" className="group flex flex-col items-center">
          Services
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full"></span>
        </a>

        <a href="/#sustainability" className="group flex flex-col items-center">
          Sustainability
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full"></span>
        </a>

        <a href="/#blog" className="group flex flex-col items-center">
          Blog
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full"></span>
        </a>

        <Link to="/careers" className="group flex flex-col items-center">
          Careers
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <a href="/#contact" className="group flex flex-col items-center">
          Contact Us
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
      <div
        onClick={() => setopen(!open)}
        className="md:hidden mr-6 text-3xl cursor-pointer"
      >
        <FaBars className="text-[#021B44]" />
      </div>
      <a href="#quote">
        <button
          className="hidden md:block bg-yellow-400 font-bold cursor-pointer text-indigo px-7 py-3 rounded-2xl
     shadow-lg shadow-yellow-400/50 mr-10 hover:shadow-yellow-300 transition-all duration-300"
        >
          Get Quote
        </button>
      </a>

        {/* MOBILE MENU ICON */}
        <div
          onClick={() => setopen(!open)}
          className="
          lg:hidden
          text-2xl sm:text-3xl
          cursor-pointer
          text-[#021B44]
        "
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      {open && (
        <div
          className="md:hidden absolute top-25 left-0 w-full bg-white/95 gap-6 py-8 text-xl font-semibold shadow-lg
         flex flex-col items-center backdrop-blur-md "
        >
          <Link to="/" onClick={() => setopen(false)}>
            Home
          </Link>

          <a href="/#about" onClick={() => setopen(false)}>
            About
          </a>

          <a href="/#services" onClick={() => setopen(false)}>
            Services
          </a>

          <a href="/#sustainability" onClick={() => setopen(false)}>
            Sustainability
          </a>

          <a href="/#blog" onClick={() => setopen(false)}>
            Blog
          </a>

          <Link to="/careers" onClick={() => setopen(false)}>
            Careers
          </Link>

          <a href="/#contact" onClick={() => setopen(false)}>
            Contact Us
          </a>

          <a href="/#quote" onClick={() => setopen(false)}>
            <button
              className="
              bg-yellow-400
              px-3 py-3
              rounded-xl
              mt-2
            "
            >
              Get Quote
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;