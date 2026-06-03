import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section id="contact-form" className="bg-[#F5F1E6] py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="inline-block bg-indigo-900 uppercase text-amber-300 tracking-widest px-5 py-2 rounded-xl text-sm font-semibold">
            Contact Us
          </p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl  font-bold text-black mt-6">Get in Touch</h1>
          <p className="text-gray-500 text-2xl mt-6">
            Have questions or ready to get started? Reach out to our team today.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-500 text-3xl" />
              <h2 className="text-3xl font-semibold text-black sm:text-4xl">Address</h2>
            </div>

            <p className="mt-6 text-base font-bold leading-relaxed text-gray-600 sm:text-xl">
              Welyft Pte. Ltd. (UEN 202440989G)
              <br />
              101 Cecil Street, #18-11 Tong Eng Building
              <br />
              Singapore 069533
            </p>
            <p className="mt-4 text-base font-semibold text-gray-700 sm:text-xl">
              Registered office address:
            </p>
            <br />
            <p className="-mt-5 text-base font-semibold text-gray-600 sm:text-xl">
              160 Robinson Road, #14-04, SBF Center, Singapore
              <br />
              068914
            </p>

            <div className="mt-10">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-500 text-3xl" />
                <h2 className="text-3xl font-semibold text-black sm:text-4xl">Email</h2>
              </div>
              <p className="mt-4 break-words text-base text-gray-600 sm:text-xl">
                operations@welyft.com
              </p>
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-yellow-500 text-3xl" />
                <h2 className="text-3xl font-semibold text-black sm:text-4xl">Whatsapp</h2>
              </div>
              <a
                href="https://wa.me/6587601984?text=Hello%20Welyft"
                target="_blank"
                className="text-xl mt-6 text-gray-600 underline hover:text-indigo-900 transition"
              >
                Click to Chat
              </a>
            </div>
          </div>

          <form className="flex flex-col gap-8">
            <input
              type="text"
              placeholder="Your Name"
              className="p-5 rounded-xl border border-gray-300 text-xl"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="p-5 rounded-xl border border-gray-300 text-xl"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="p-5 rounded-xl border border-gray-300 text-xl"
            ></textarea>

            <button className="text-black py-5 text-xl font-semibold rounded-xl bg-yellow-400 hover:bg-[#021B44] hover:text-yellow-400 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
