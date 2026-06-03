import React from "react";
import careerBg from "../assets/electric-vehicle-hero.png";

const CareersHero = () => {
  return (
    <section className="relative pt-20 flex min-h-screen sm:min-h-[85vh] items-center justify-center overflow-hidden bg-[#051223]">
      <img
        src={careerBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,18,35,0.82),rgba(5,18,35,0.72))]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-8 leading-tight">
          Build the Future of
          <br />
          Sustainable Logistics
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mt-6 max-w-3xl mx-auto leading-8">
          Join Welyft and help transform delivery operations through EV-powered
          logistics, technology, and sustainability innovation.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <a href="#jobs">
            <button className="bg-yellow-400 text-black px-7 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/30">
              View Open Roles
            </button>
          </a>

          <a href="/#about">
            <button className="border border-white text-white px-7 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </a>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-14 sm:mt-20">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10">
            <h2 className="text-4xl font-bold text-yellow-300">20+</h2>
            <p className="text-gray-300 mt-2">Team Members</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10">
            <h2 className="text-4xl font-bold text-yellow-300">100%</h2>
            <p className="text-gray-300 mt-2">Electric Fleet</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10">
            <h2 className="text-4xl font-bold text-yellow-300">24/7</h2>
            <p className="text-gray-300 mt-2">Operations</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-yellow-300 sm:text-3xl lg:text-4xl">
              Singapore
            </h2>
            <p className="text-gray-300 mt-2">Headquarters</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
