import React from "react";
import SustainabilityCard from "./SustainabilityCard";
import serv from "../assets/serv.avif";
import CO2Dashboard from "./CO2Savings/CO2Dashboard";

const Sustainability = () => {
  return (
    <>
      <div id="sustainability" className="bg-[#014631] py-28">
        <div className="px-10 text-center max-w-7xl mx-auto">
          <h1 className="bg-yellow-400 text-xl rounded-xl uppercase inline-block text-[#0A1F44] px-5 py-2  border font-bold">
            Why Welyft
          </h1>

          <h2 className="text-8xl font-bold text-yellow-400 mt-8">
            Sustainable Logistics
          </h2>
          <h3 className="text-6xl font-bold text-yellow-400 mt-5 italic">
            Smarter Future.
          </h3>

          <p className="text-xl font-semibold text-white/90 leading-relaxed text-center max-w-4xl mx-auto mt-9">
            Helping companies reduce transport emissions and move towards
            cleaner, greener business operations — one delivery at a time.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-7 mt-20">
          <SustainabilityCard
            icon="🚚"
            title="Lower Emissions"
            description="EV fleet solutions for greener, more sustainable transport."
          />
          <SustainabilityCard
            icon="💡"
            title="Smart Innovation"
            description="Technology that powers delivery visibility and dispatch contro"
          />
          <SustainabilityCard
            icon="📈"
            title="CO₂ Reporting"
            description="Estimated carbon savings tracked for every single delivery."
          />
          <SustainabilityCard
            icon="🌏"
            title="Better Planet"
            description="Logistics designed with long-term sustainability at its core."
          />
        </div>
      </div>
      <div className="bg-[#F5F3EE] py-30">
        <CO2Dashboard />
      </div>
    </>
  );
};

export default Sustainability;
