import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <nav
      className="w-full fixed top-0 left-0 z-[999] px-4 md:px-8 bg-white shadow-md h-17 flex items-center justify-between"
    >
      <div className="flex items-center">
        <img src={logo} className="w-10 m-5 py-2" alt="" />
        <h1 className="font-bold text-3xl">Welyft</h1>
      </div>

      <div className=" hidden lg:flex font-bold mr-4 text-xl gap-6">
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
      <a href="#quote">
        <button
          className="hidden lg:block bg-yellow-400 font-bold cursor-pointer text-indigo px-7 py-3 rounded-2xl
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
      {/* MOBILE MENU */}
      {open && (
        <div
          className=" fixed top-0 left-0 h-[75vh] w-full bg-white z-[999] px-8 py-6 lg:hidden flex flex-col animate-slideIn rounded-b-3xl shadow-xl
  "
        >
          {/* TOP */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} className="w-10" alt="" />
              <h1 className="text-3xl font-bold">Welyft</h1>
            </div>

            <FaTimes
              onClick={() => setopen(false)}
              className="text-3xl text-[#021B44] cursor-pointer"
            />
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-8 mt-16 text-3xl font-medium text-[#111]">
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
          </div>

          {/* BUTTON */}
          <a href="#quote">
  <button
    className="
      mt-auto
      bg-yellow-400
      py-4
      rounded-2xl
      text-xl
      font-bold
      shadow-lg
      w-full
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
