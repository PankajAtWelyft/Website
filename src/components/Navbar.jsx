import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 flex min-h-20 w-full items-center justify-between bg-white/80 px-3 backdrop-blur-md sm:px-5 lg:px-8"
    >
      <div className="flex items-center gap-3">
        <img src={logo} className="w-10 shrink-0 py-2" alt="Welyft logo" />
        <h1 className="text-2xl font-bold sm:text-3xl">Welyft</h1>
      </div>
      <div className="hidden items-center gap-4 text-base font-bold lg:flex xl:gap-6 xl:text-lg">
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
        className="cursor-pointer text-3xl lg:hidden"
      >
        <FaBars className="text-[#021B44]" />
      </div>
      <a href="#quote">
        <button
          className="hidden cursor-pointer rounded-xl bg-yellow-400 px-5 py-3 font-bold text-indigo shadow-lg shadow-yellow-400/50 transition-all duration-300 hover:shadow-yellow-300 lg:block"
        >
          Get Quote
        </button>
      </a>

      {open && (
        <div
          className="absolute left-0 top-20 flex w-full flex-col items-center gap-5 bg-white/95 py-7 text-lg font-semibold shadow-lg backdrop-blur-md lg:hidden"
        >
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#sustainability">Sustainability</a>
          <a href="/#blog">Blog</a>
          <a href="/#contact">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
