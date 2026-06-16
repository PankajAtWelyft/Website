import React from "react";
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section id="contact" className="scroll-mt-16 bg-[#F6F5F0] relative overflow-hidden pt-16 px-4 sm:px-5 lg:px-10">
        <div className="min-h-[320px] sm:min-h-[400px] text-center py-10 sm:py-14 lg:py-16 rounded-[28px] bg-[#0A1F44] relative z-10 flex flex-col mx-auto max-w-8xl">


          <h1 className="serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-18 max-w-5xl mx-auto text-white">
            Ready to Move Your Business
            <br />
            Cleaner and Smarter?
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-md leading-relaxed text-gray-300 sm:text-xl lg:text-2xl ">
            Partner with Welyft for EV-powered logistics, reliable delivery
            operations, and sustainability-focused reporting.
          </p>
          <a href="#contact-form">
            <button
              className="mt-6 cursor-pointer rounded-2xl bg-yellow-400 px-8 sm:px-10 py-4 text-lg sm:text-xl font-bold text-[#001B45] shadow-lg shadow-yellow-400/40 transition-all duration-300 hover:scale-105 hover:shadow-yellow-200"
            >
              Contact Welyft
            </button>
          </a>

        </div>
      </section>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
