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
      <ContactForm />
    <Footer/>
    </>
  );
};

export default Contact;
