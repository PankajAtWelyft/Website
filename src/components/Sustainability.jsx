import React from "react";
import SustainabilityCard from "./SustainabilityCard";
import serv from "../assets/serv.avif";

const Sustainability = () => {
  return (
    <>
      <div id="sustainability" className="bg-[#014631] py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <h1 className="inline-block rounded-xl border bg-yellow-400 px-5 py-2 text-sm font-bold uppercase text-[#0A1F44] sm:text-xl">
            Why Welyft
          </h1>

          <h2 className="mt-8 text-4xl font-bold text-yellow-400 sm:text-6xl lg:text-8xl">
            Sustainable Logistics
          </h2>
          <h3 className="mt-5 text-3xl font-bold italic text-yellow-400 sm:text-5xl lg:text-6xl">
            Smarter Future.
          </h3>

          <p className="mx-auto mt-9 max-w-4xl text-center text-base font-semibold leading-relaxed text-white/90 sm:text-xl">
            Helping companies reduce transport emissions and move towards
            cleaner, greener business operations — one delivery at a time.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:mt-20 lg:grid-cols-4 lg:px-10">
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
    </>
  );
};

export default Sustainability;
