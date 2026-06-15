import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <section
      id="contact-form"
      className="bg-[#F5F1E6] relative overflow-hidden pt-16"
    >
      <div className="relative z-10 flex flex-col mx-auto  max-w-8xl px-4 sm:px-5 lg:px-10">
        <div className="text-center">
          <p className="inline-block text-sm sm:text-xl text-amber-300 bg-[#0A1F44] tracking-[0.03em] mt-4 px-4 sm:px-5 py-2 rounded-md font-bold uppercase
        ">
            Contact Us
          </p>
          <h1 className="serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#0A1F44] mt-6">
            Get in Touch
          </h1>

          
        </div>
        <div className="mx-auto mt-2 grid w-full grid-cols-1 gap-8  py-6 lg:grid-cols-2 lg:py-10">
          <article className="rounded-3xl h-[505px] md:h-[420px] lg:h-[520px] bg-white/90 p-6 shadow-sm ring-1 ring-black/5 sm:p-8 lg:sticky lg:top-6">
            <div className="flex items-center gap-3">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="shrink-0">
                <FaMapMarkerAlt className="text-3xl text-yellow-500 transition-all duration-300 hover:scale-110 hover:text-red-500" />
              </a>
              <h2 className="text-xl font-semibold text-black sm:text-2xl lg:text-3xl">
                Address
              </h2>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="text-base font-bold leading-relaxed text-gray-700 sm:text-lg">
                  Welyft Pte. Ltd. (UEN 202440989G)
                </p>
                <p className="mt-3 text-base text-gray-600 sm:text-lg">
                  101 Cecil Street, #18-11 Tong Eng Building
                  <br />
                  Singapore 069533
                </p>
              </div>

              <div>
                <p className="text-base font-bold text-gray-700 sm:text-lg">
                  Registered office address:
                </p>
                <p className="mt-3 text-base text-gray-600 sm:text-lg">
                  160 Robinson Road, #14-04, SBF Center,
                  <br />
                  Singapore 068914
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <div className="flex items-center gap-3">
                  <a href="mailto:operations@welyft.com" className="shrink-0">
                    <FaEnvelope className="text-3xl text-yellow-500 transition-all duration-300 hover:scale-110 hover:text-indigo-900" />
                  </a>
                  <h2 className="text-xl font-semibold text-black sm:text-2xl">
                    Email
                  </h2>
                </div>
                <a
                  href="mailto:operations@welyft.com"
                  className="mt-3 inline-block break-words text-base text-gray-600 transition-all duration-300 hover:text-indigo-900 sm:text-lg"
                >
                  operations@welyft.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/6587601984?text=Hello%20Welyft"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <FaWhatsapp className="text-3xl text-yellow-500 transition-all duration-300 hover:scale-110 hover:text-green-600" />
                    <h2 className="text-xl font-semibold text-black underline transition group-hover:text-green-600 sm:text-2xl">
                      Chat with us
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <form
            className="rounded-3xl h-[450px] md:h-[520px] bg-white/90 p-3 shadow-sm ring-1 ring-black/5 "
            onSubmit={async (e) => {
              e.preventDefault();

              setLoading(true);

              const formData = new FormData(e.target);

              formData.append("access_key", "3442aeca-762c-439d-a514-5ab764e3d8f8");
              formData.append("subject", "New Contact Message - Welyft");

              const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
              });

              const data = await response.json();

              if (data.success) {
                setSuccess(true);
                e.target.reset();
                setTimeout(() => setSuccess(false), 2000);
              }

              setLoading(false);
            }}
          >
            <div className="grid gap-2 lg:gap-3 ">
              <div className="grid gap-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700 sm:text-base">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white p-1 text-base text-gray-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 sm:text-lg"
                />
              </div>

              <div className="grid gap-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 sm:text-base">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white p-1 text-base text-gray-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 sm:text-lg"
                />
              </div>

              <div className="grid gap-1">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700 sm:text-base">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white p-1 text-base text-gray-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 sm:text-lg"
                />
              </div>

              <div className="grid gap-1">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 sm:text-base">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white p-1 text-base text-gray-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 sm:text-lg"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-yellow-400 py-4 text-lg font-semibold text-black transition hover:bg-[#021B44] hover:text-yellow-400 disabled:cursor-not-allowed disabled:opacity-70 sm:py-5 sm:text-xl"
              >
                {loading
                  ? "Sending..."
                  : success
                    ? "Message Sent ✓"
                    : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;