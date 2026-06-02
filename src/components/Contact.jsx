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
        <div className="border-b border-[#18345E] px-5 py-16 text-center sm:px-8 md:py-24 lg:px-10 lg:py-28">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Ready to Move Your Business
            <br className="hidden md:block" />
            Cleaner and Smarter?
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-lg font-semibold leading-relaxed text-gray-300 sm:text-2xl lg:mt-10">
            Partner with Welyft for EV-powered B2B logistics, reliable delivery
            operations, and sustainability-focused reporting.
          </p>
          <a href="#contact-form">
            <button
              className="mt-12 w-full max-w-xs cursor-pointer rounded-2xl bg-yellow-400 px-8 py-4 text-xl font-bold text-indigo shadow-lg shadow-yellow-400/50 transition-all duration-100 hover:shadow-yellow-100 sm:w-auto sm:max-w-none sm:px-10 lg:mt-15"
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
