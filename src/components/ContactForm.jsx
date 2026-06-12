import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <section
      id="contact-form"
      className="bg-[#F5F1E6] py-4 pt-10 sm:py-24 sm:pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="inline-block text-sm sm:text-xl text-amber-300 bg-[#0A1F44] tracking-widest mt-4 px-4 sm:px-5 py-2 rounded-md font-bold uppercase
        ">
            Contact Us
          </p>
          <h1 className="serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A1F44] mt-6">
            Get in Touch
          </h1>

          <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl mt-4 leading-relaxed">
            Have questions or ready to get started? Reach out to our team today.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <a href="https://maps.google.com" target="_blank">
                <FaMapMarkerAlt className="text-yellow-500 text-3xl hover:scale-110 hover:text-red-500 transition-all duration-300" />
              </a>
              <h2 className="text-xl font-semibold text-black sm:text-4xl">
                Address
              </h2>
            </div>

            <p className="mt-2 text-base font-bold leading-relaxed text-gray-600 sm:text-xl lg:mt-6">
              Welyft Pte. Ltd. (UEN 202440989G)
            </p>
            <br />
            <p className=" -mt-5 text-lg text-gray-500 sm:text-xl">
              101 Cecil Street, #18-11 Tong Eng Building
              <br />
              Singapore 069533
            </p>
            <p className="mt-4 text-base font-bold text-gray-600 sm:text-xl">
              Registered office address:
            </p>
            <br />
            <p className="-mt-5 text-lg text-gray-500 sm:text-xl">
              160 Robinson Road, #14-04, SBF Center,
              <br />
              Singapore 068914
            </p>

            <div className="mt-10">
              <div className="flex items-center gap-4">
                <a href="mailto:operations@welyft.com">
                  <FaEnvelope className="text-yellow-500 text-3xl hover:scale-110 hover:text-indigo-900 transition-all duration-300" />
                </a>
                <h2 className="text-xl font-semibold text-black sm:text-4xl">
                  Email
                </h2>
              </div>
              <a
                href="mailto:operations@welyft.com"
                className="mt-2 inline-block break-words text-base text-gray-600 sm:text-xl lg:mt-4 hover:text-indigo-900 transition-all duration-300"
              >
                operations@welyft.com
              </a>
            </div>

            <div className="mt-4 lg:mt-12">
              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/6587601984?text=Hello%20Welyft"
                  target="_blank"
                  className="flex items-center gap-4 group"
                >
                  <FaWhatsapp className="text-yellow-500 text-3xl hover:scale-110 hover:text-green-600 transition-all duration-300" />

                  <h2 className="text-xl underline font-semibold text-black sm:text-4xl group-hover:text-green-600 transition">
                    Chat with us
                  </h2>
                </a>
              </div>
            </div>
          </div>
          
          <form
            className="flex flex-col gap-8"
            onSubmit={async (e) => {
              e.preventDefault();

              setLoading(true);

              const formData = new FormData(e.target);

              formData.append(
                "access_key",
                "3442aeca-762c-439d-a514-5ab764e3d8f8",
              );

              formData.append("subject", "New Contact Message - Welyft");

              const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
              });

              const data = await response.json();

              if (data.success) {
                setSuccess(true);

                e.target.reset();

                setTimeout(() => {
                  setSuccess(false);
                }, 2000);
              }

              setLoading(false);
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-4 rounded-xl border border-gray-300 text-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-4 rounded-xl border border-gray-300 text-lg"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="p-4 rounded-xl border border-gray-300 text-lg"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="text-black py-5 text-xl font-semibold rounded-xl bg-yellow-400 hover:bg-[#021B44] hover:text-yellow-400 transition disabled:opacity-70"
            >
              {loading
                ? "Sending..."
                : success
                  ? "Message Sent ✓"
                  : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;