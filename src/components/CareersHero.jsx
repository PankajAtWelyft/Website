import React from "react";
import careerBg from "../assets/electric-vehicle-hero.png";

const CareersHero = () => {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `
        linear-gradient(
          rgba(5,18,35,0.82),
          rgba(5,18,35,0.72)
        ),
        url(${careerBg})
      `,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="inline-block bg-yellow-400/20 text-yellow-300 uppercase tracking-widest px-5 py-2 rounded-full text-sm font-semibold">
          Careers at Welyft
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mt-8 leading-tight">
          Build the Future of
          <br />
          Sustainable Logistics
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl mt-8 max-w-3xl mx-auto leading-relaxed">
          Join Welyft and help transform delivery operations through EV-powered
          logistics, technology, and sustainability innovation.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <a href="#jobs">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/30">
              View Open Roles
            </button>
          </a>

          <a href="/#about">
            <button className="border border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </a>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h2 className="text-4xl font-bold text-yellow-300">20+</h2>
            <p className="text-gray-300 mt-2">Team Members</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h2 className="text-4xl font-bold text-yellow-300">100%</h2>
            <p className="text-gray-300 mt-2">Electric Fleet</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h2 className="text-4xl font-bold text-yellow-300">24/7</h2>
            <p className="text-gray-300 mt-2">Operations</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h2 className="text-4xl font-bold text-yellow-300">Singapore</h2>
            <p className="text-gray-300 mt-2">Headquarters</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
