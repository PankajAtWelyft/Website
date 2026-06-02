import React from "react";
import SustainabilityCard from "./SustainabilityCard";

const Sustainability = () => {
  return (
    <section
      id="sustainability"
      className="bg-[#014631] py-20 sm:py-28"
    >

      {/* HEADING */}
      <div className="px-6 sm:px-10 text-center max-w-7xl mx-auto">

        <h1
          className="bg-yellow-400 text-sm sm:text-xl rounded-xl uppercase inline-block text-[#0A1F44] px-4 sm:px-5 py-2 font-bold"
        >
          Why Welyft
        </h1>

        <h2
          className="
          text-4xl
          sm:text-6xl
          lg:text-8xl
          font-bold
          text-yellow-400
          mt-8
          leading-tight
        "
        >
          Sustainable Logistics
        </h2>

        <h3
          className="
          text-3xl
          sm:text-5xl
          lg:text-6xl
          font-bold
          text-yellow-400
          mt-4
          italic
        "
        >
          Smarter Future.
        </h3>

        <p
          className="
          text-base
          sm:text-lg
          lg:text-xl
          font-semibold
          text-white/90
          leading-relaxed
          text-center
          max-w-4xl
          mx-auto
          mt-8
        "
        >
          Helping companies reduce transport emissions and move towards
          cleaner, greener business operations — one delivery at a time.
        </p>
      </div>
      <div
        className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 mt-16 sm:mt-20"
      >
        <SustainabilityCard
          icon="🚚"
          title="Lower Emissions"
          description="EV fleet solutions for greener, more sustainable transport."
        />

        <SustainabilityCard
          icon="💡"
          title="Smart Innovation"
          description="Technology that powers delivery visibility and dispatch control."
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
    </section>
  );
};

export default Sustainability;