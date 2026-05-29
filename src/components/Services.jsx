import React from "react";
import ServicesCard from "./ServicesCard";
import eco from '../assets/eco.webp';
import reliable from '../assets/reliable.avif';
import bike from "../assets/bike.avif";
import future from '../assets/future.webp';

const Services = () => {
  return (
    <>
      <section id="services" className="bg-[#F5F3EE] py-28">
        <div className="max-w-7xl px-10 mx-auto text-center">
          <p className=" inline-block text-xl text-amber-300  bg-[#0A1F44] tracking-widest  mt-4 px-5 py-2 rounded-md font-bold uppercase">
            Our Services
          </p>
          <h2 className="text-5xl font-semibold text-[#0A1F44] mt-6">
            Why Choose Welyft ?
          </h2>

          <p className="text-xl text-gray-600 mt-6 leading-relaxed">
            Professional B2B logistics services supported by electric vehicles,
            technology, and operational discipline.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-4 max-w-7.5xl mx-auto mt-5 px-10 gap-10">
          <ServicesCard
           image={eco}
           title="Eco-Friendly Promise"
           description="Every delivery we make is powered by a 100% EV fleet, ensuring zero emissions and greener cities."
           />   
            <ServicesCard
           image={reliable}
           title="Reliable, Scalable Operations"
           description="Our tech-enabled platform delivers real-time tracking and optimized routing at any scale."
           />
            <ServicesCard
           image={bike}
           title="Zero Compromise on Service"
           description="We cut costs through fuel-free EV operations, offering competitive rates with a green edge."
           />
            <ServicesCard
           image={future}
           title="Future ready and Scalable"
           description="Stay ahead of regulations and customer expectations with future-ready green logistics."
           /> 
      </div>
      
     
    </>
  );
};

export default Services;
