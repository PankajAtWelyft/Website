import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <nav
      className="
      w-full
fixed
top-0 left-0 z-[999]
px-4 sm:px-6 lg:px-8
bg-white
shadow-lg
border-b border-gray-300
h-20
flex items-center justify-between
    "
    >

      {/* LOGO */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          className="w-10 sm:w-11"
          alt="logo"
        />

        <h1 className="font-bold text-2xl sm:text-3xl">
          Welyft
        </h1>
      </div>

      {/* DESKTOP MENU */}
      <div
        className="
        hidden lg:flex
        font-bold
        text-lg
        xl:text-xl
        gap-6 xl:gap-8
        items-center
      "
      >

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

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* GET QUOTE BUTTON */}
        <a href="/#quote">
          <button
            className="
            hidden md:block
            bg-yellow-400
            font-bold
            cursor-pointer
            px-5 lg:px-7
            py-3
            rounded-2xl
            shadow-lg shadow-yellow-400/40
            hover:shadow-yellow-300
            hover:scale-105
            transition-all duration-300
          "
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
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
          lg:hidden
          absolute
          top-20 left-0
          w-full
          bg-white/95
          backdrop-blur-md
          shadow-xl
          border-t border-gray-200
          text-left
          flex flex-col
          gap-6
          py-8
           text-lg font-semibold"
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