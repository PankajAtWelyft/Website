import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#00193D]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-16 lg:px-10 lg:py-20">
          <div>
            <div className="flex items-center gap-4">
              <img
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                src={logo}
                alt="logo"
              />
              <h1 className="text-4xl font-bold text-white sm:text-5xl">Welyft</h1>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:mt-8 sm:text-xl">
              Smart logistics.
              <br />
              Sustainable future.
            </p>
          </div>
          <div>
            <h2 className="text-yellow-400 text-3xl font-semibold">Company</h2>
            <ul className="mt-8 space-y-3 text-gray-300 text-xl">
              <li>About Us</li>
              <li>Services</li>
              <li>Sustainability</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h2 className="text-yellow-400 text-3xl font-semibold">Services</h2>
            <ul className="mt-8 space-y-3 text-gray-300 text-xl">
              <li>Freight Transport</li>
              <li>Last-Mile Delivery</li>
              <li>CO₂ Reporting</li>
            </ul>
          </div>
          <div>
            <h2 className="text-yellow-400 text-3xl font-semibold">Contact</h2>
            <ul className="mt-8 space-y-3 text-gray-300 text-xl">
              <li>Singapore</li>
              <li>operations@welyft.com</li>
              <li>+65 8760 1984</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-[#18345E] px-5 py-6 text-center sm:px-8 lg:flex-row lg:text-left">
          <p className="text-base text-gray-400 sm:text-xl">
            {" "}
            © 2026 Welyft. All rights reserved.
          </p>

<<<<<<< HEAD
      {/* TOP FOOTER */}
      <div
        className="max-w-7xl mx-auto px-6 sm:px-4 sm:px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14"
      >
        <div>
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl"
              src={logo}
              alt="logo"
            />

            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Welyft
            </h1>
=======
          <div className="flex items-center gap-8 text-2xl text-gray-400 sm:gap-12">
            <a href="https://www.facebook.com/youpackWelyft" target="_blank">
              <FaFacebook className="hover:text-yellow-400 transition cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/company/youpackwelyft/"
              target="_blank"
            >
              <FaLinkedinIn className="hover:text-yellow-400 transition cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/welyftsg" target="_blank">
              <FaInstagram className="hover:text-yellow-400 transition cursor-pointer" />
            </a>
>>>>>>> e781849d29176788474b6486f87230f39958e358
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-base text-gray-400 sm:gap-6 sm:text-lg">
            <Link
              to="/privacy-policy"
              className="hover:text-yellow-400 transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <p className="cursor-pointer"> Terms of Services </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;