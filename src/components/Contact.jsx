import React from "react";
import logo from "../assets/logo.png";
import {FaInstagram, FaLinkedinIn, FaFacebook} from 'react-icons/fa';
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <>
    <section id="contact" className="bg-[#001B45]">
      <div className="text-center py-28 px-10 border-b border-[#18345E]">
        <h1 className="text-7xl text-white font-bold leading-tight">
          Ready to Move Your Business
          <br />
          Cleaner and Smarter?
        </h1>
        <p className="text-gray-300 text-2xl leading-relaxed max-w-4xl mx-auto font-semibold mt-10">
          Partner with Welyft for EV-powered B2B logistics, reliable delivery
          operations, and sustainability-focused reporting.
        </p>
      <a href="#contact-form">
        <button
          className="bg-yellow-400 font-bold cursor-pointer mt-15 text-indigo p-10 py-4 text-xl rounded-2xl
            shadow-lg shadow-yellow-400/50 mr-10 hover:shadow-yellow-100 transition-all duration-100"
        >
          Contact Welyft
        </button>
      </a>
      </div>
    </section>
    <ContactForm/>
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
        <p className="text-gray-400 text-xl"> © 2026 Welyft. All rights reserved.</p>

        <div className="flex items-center gap-12 text-2xl text-gray-400">
          <a href="https://www.facebook.com/youpackWelyft" target="_blank">
          <FaFacebook className="hover:text-yellow-400 transition cursor-pointer"/>
          </a>
           <a href="https://www.linkedin.com/company/youpackwelyft/" target="_blank">
          <FaLinkedinIn className="hover:text-yellow-400 transition cursor-pointer"/>
          </a>
           <a href="https://www.instagram.com/welyftsg" target="_blank">
          <FaInstagram className="hover:text-yellow-400 transition cursor-pointer"/>
          </a>

        </div>


        <div className="flex items-center text-lg text-gray-400 gap-6">
          <p className="cursor-pointer"> Privacy Policy</p>
          <p className="cursor-pointer"> Terms of Services </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Contact;
