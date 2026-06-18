import React from "react";
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section id="contact" className="scroll-mt-16 bg-[#F6F5F0] relative overflow-hidden pt-20 px-4 sm:px-5 lg:px-10">
        <div className="min-h-[180px] text-center py-10 sm:py-14 lg:py-16 rounded-[28px] bg-[#0A1F44] relative z-10 flex flex-col mx-auto max-w-8xl">


          <h1 className="serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-18 max-w-5xl mx-auto text-white">
            Ready to Move Your Business
            <br />
            Cleaner and Smarter?
          </h1>
          <p className="mx-auto px-5 mt-5 max-w-4xl text-md  text-gray-300 sm:text-xl lg:text-2xl ">
            Partner with Welyft for EV-powered logistics, reliable delivery
            operations, and sustainability-focused reporting.
          </p>
          

        </div>
      </section>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
