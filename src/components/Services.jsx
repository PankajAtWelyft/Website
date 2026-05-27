import React from "react";
import ServicesCard from "./ServicesCard";
import pack from "../assets/pack.avif";
import store from "../assets/store.avif";
import delivery from "../assets/delivery.avif";
import bike from "../assets/bike.avif";

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
           image={delivery}
           title="Freight Transport"
           description="Reliable transport solutions for business delivery needs."
           buttonTxt="Learn More →"
           />   
            <ServicesCard
           image={store}
           title="Supply Chain Management"
           description="Coordinated operations for seamless goods movement."
           buttonTxt="Learn More →"
           />
            <ServicesCard
           image={bike}
           title="Customs Brokerage"
           description="Support for faster, smoother logistics coordination."
           buttonTxt="Learn More →"
           />
            <ServicesCard
           image={pack}
           title="Warehousing & Distribution"
           description="Flexible storage dispatch, and last-mile delivery support."
           buttonTxt="Learn More →"
           /> 
      </div>
      
     
    </>
  );
};

export default Services;
