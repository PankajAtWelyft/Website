import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00193D]">

      {/* TOP FOOTER */}
      <div
        className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14"
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
          </div>

          <p className="text-gray-300 text-lg sm:text-xl mt-8 leading-relaxed">
            Smart logistics.
            <br />
            Sustainable future.
          </p>
        </div>
        <div>
          <h2 className="text-yellow-400 text-2xl sm:text-3xl font-semibold">
            Company
          </h2>

          <ul className="mt-8 space-y-3 text-gray-300 text-lg sm:text-xl">
            <li className="hover:text-yellow-400 cursor-pointer transition">
              About Us
            </li>

            <li className="hover:text-yellow-400 cursor-pointer transition">
              Services
            </li>

            <li className="hover:text-yellow-400 cursor-pointer transition">
              Sustainability
            </li>

            <li className="hover:text-yellow-400 cursor-pointer transition">
              Blog
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-yellow-400 text-2xl sm:text-3xl font-semibold">
            Services
          </h2>

          <ul className="mt-8 space-y-3 text-gray-300 text-lg sm:text-xl">
            <li>Freight Transport</li>
            <li>Last-Mile Delivery</li>
            <li>CO₂ Reporting</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-yellow-400 text-2xl sm:text-3xl font-semibold">
            Contact
          </h2>

          <ul className="mt-8 space-y-3 text-gray-300 text-lg sm:text-xl">
            <li>Singapore</li>
            <li className="break-all">
              operations@welyft.com
            </li>
            <li>+65 8760 1984</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div
        className="max-w-7xl mx-auto px-6 sm:px-8 py-6 border-t border-[#18345E] flex flex-col lg:flex-row items-center justify-between gap-6"
      >
        {/* COPYRIGHT */}
        <p className="text-gray-400 text-sm sm:text-lg text-center">
          © 2026 Welyft. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-8 text-2xl text-gray-400">

          <a
            href="https://www.facebook.com/youpackWelyft"
            target="_blank"
          >
            <FaFacebook className="hover:text-yellow-400 transition cursor-pointer" />
          </a>

          <a
            href="https://www.linkedin.com/company/youpackwelyft/"
            target="_blank"
          >
            <FaLinkedinIn className="hover:text-yellow-400 transition cursor-pointer" />
          </a>

          <a
            href="https://www.instagram.com/welyftsg"
            target="_blank"
          >
            <FaInstagram className="hover:text-yellow-400 transition cursor-pointer" />
          </a>
        </div>

        {/* LINKS */}
        <div
          className="flex flex-col sm:flex-row items-center text-sm sm:text-lg text-gray-400 gap-4 sm:gap-6"
        >
          <Link
            to="/privacy-policy"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Privacy Policy
          </Link>

          <p className="cursor-pointer hover:text-yellow-400 transition-all duration-300">
            Terms of Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;