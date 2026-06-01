import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#00193D]">
        <div className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-4 gap-16">
          <div>
            <div className="flex items-center gap-4">
              <img
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                src={logo}
                alt="logo"
              />
              <h1 className="text-5xl font-bold text-white">Welyft</h1>
            </div>
            <p className="text-gray-300 text-xl mt-8 leading-relaxed">
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
        <div className="max-w-7xl mx-auto px-8 py-6 border-t border-[#18345E] flex items-center justify-between">
          <p className="text-gray-400 text-xl">
            {" "}
            © 2026 Welyft. All rights reserved.
          </p>

          <div className="flex items-center gap-12 text-2xl text-gray-400">
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
          </div>

          <div className="flex items-center text-lg text-gray-400 gap-6">
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
