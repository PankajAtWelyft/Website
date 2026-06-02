import React from "react";
import ServicesCard from "./ServicesCard";

import eco from "../assets/eco.webp";
import reliable from "../assets/reliable.avif";
import bike from "../assets/bike.avif";
import future from "../assets/future.webp";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#F5F3EE] py-20 sm:py-16 sm:py-24 lg:py-28"
    >

      {/* HEADING */}
      <div className="max-w-7xl px-6 sm:px-4 sm:px-6 lg:px-10 mx-auto text-center">

        <p
          className="
          inline-block
          text-sm sm:text-xl
          text-amber-300
          bg-[#0A1F44]
          tracking-widest
          mt-4
          px-4 sm:px-5
          py-2
          rounded-md
          font-bold
          uppercase
        "
        >
          Our Services
        </p>

        <h2
          className="
          text-4xl
          sm:text-5xl
          lg:text-3xl sm:text-5xl lg:text-3xl sm:text-5xl lg:text-6xl
          font-semibold
          text-[#0A1F44]
          mt-6
          leading-tight
        "
        >
          Why Choose Welyft?
        </h2>

        <p
          className="
          text-base
          sm:text-lg
          lg:text-xl
          text-gray-600
          mt-6
          leading-relaxed
          max-w-4xl
          mx-auto
        "
        >
          Professional B2B logistics services supported by
          electric vehicles, technology,
          and operational discipline.
        </p>
      </div>

      {/* CARDS */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 max-w-8xl mx-auto mt-16 px-6 sm:px-4 sm:px-6 lg:px-10 gap-8"
      >

        <ServicesCard
          image={eco}
          title="Eco-Friendly Promise"
          description="Every delivery we make is powered by a 100% EV fleet, ensuring zero emissions and greener cities."
          buttonTxt="Learn More →"
        />

        <ServicesCard
          image={reliable}
          title="Reliable, Scalable Operations"
          description="Our tech-enabled platform delivers real-time tracking and optimized routing at any scale."
          buttonTxt="Learn More →"
        />

        <ServicesCard
          image={bike}
          title="Zero Compromise on Service"
          description="We cut costs through fuel-free EV operations, offering competitive rates with a green edge."
          buttonTxt="Learn More →"
        />

        <ServicesCard
          image={future}
          title="Future Ready & Scalable"
          description="Stay ahead of regulations and customer expectations with future-ready green logistics."
          buttonTxt="Learn More →"
        />

      </div>

    </section>
  );
};

export default Services;