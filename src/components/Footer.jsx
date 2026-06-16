import React from "react";
import logo from "../assets/footer_logo.jpeg";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A1F44]">
      {/* TOP FOOTER */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-12 lg:px-10 lg:py-8">
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="Welyft Logo"
            className="w-[150px] h-auto -ml-2 object-contain"
          />

          <div>
            <p className="text-sm text-gray-300 leading-6">Smart logistics.</p>

            <p className="text-sm text-gray-300 leading-6">
              Sustainable future.
            </p>
          </div>
        </div>

        <div className="mt-4 ml-1">
          <h2 className="text-yellow-400 text-base font-semibold">Company</h2>

          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>
              <a
                href="/#about"
                className="hover:text-yellow-400  transition-all duration-300 inline-block"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/#services"
                className="hover:text-yellow-400  transition-all duration-300 inline-block"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="/#sustainability"
                className="hover:text-yellow-400  transition-all duration-300 inline-block"
              >
                Sustainability
              </a>
            </li>

            <li>
              <a
                href="/#blog"
                className="hover:text-yellow-400  transition-all duration-300 inline-block"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-yellow-400 text-base font-semibold">Services</h2>

          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>Freight Transport</li>
            <li>Last-Mile Delivery</li>
            <li>CO₂ Reporting</li>
          </ul>
        </div>

        <div className="mt-4 ml-1">
          <h2 className="text-yellow-400 text-base font-semibold">Contact</h2>

          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>Singapore</li>

            <li>
              <a
                href="mailto:operations@welyft.com"
                className="hover:text-yellow-400 transition-all duration-300 break-all"
              >
                operations@welyft.com
              </a>
            </li>

            <li>
              <a
                href="tel:+6587601984"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                +65 8760 1984
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-[#18345E] px-5 py-4 text-center sm:px-8 lg:flex-row">
        <p className="text-xs text-gray-400">
          © 2026 welyft. All rights reserved.
        </p>

        <div className="flex items-center gap-8 text-base text-gray-400">
          <a href="https://www.facebook.com/youpackWelyft" target="_blank">
            <FaFacebook className="hover:text-yellow-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/company/youpackwelyft/"
            target="_blank"
          >
            <FaLinkedinIn className="hover:text-yellow-400 transition" />
          </a>

          <a href="https://www.instagram.com/welyftsg" target="_blank">
            <FaInstagram className="hover:text-yellow-400 transition" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center text-xs gap-4 text-gray-400">
          <Link
            to="/privacy-policy"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms"
            className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
