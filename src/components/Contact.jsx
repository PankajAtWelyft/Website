import React from "react";
import logo from "../assets/logo.png";
import {Link} from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-[#001B45]">
        <div className="text-center py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-10 border-b border-[#18345E]">

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto text-white">
            Ready to Move Your Business
            <br/>
            Cleaner and Smarter?
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-lg font-semibold leading-relaxed text-gray-300 sm:text-2xl lg:mt-10">
            Partner with Welyft for EV-powered B2B logistics, reliable delivery
            operations, and sustainability-focused reporting.
          </p>
          <a href="#contact-form">
            <button
              className="mt-10 cursor-pointer rounded-2xl bg-yellow-400 px-8 sm:px-10 py-4 text-lg sm:text-xl font-bold text-[#001B45] shadow-lg shadow-yellow-400/40 transition-all duration-300 hover:scale-105 hover:shadow-yellow-200"
            >
              Contact Welyft
            </button>
          </a>
        </div>
      </section>
      <ContactForm />
    <Footer/>
    </>
  );
};

export default Contact;
