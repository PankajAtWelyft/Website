import React from "react";
import SustainabilityCard from "./SustainabilityCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Sustainability = () => {
  return (
    <section
      className="bg-[#F6F5F0] h-auto relative overflow-hidden py-20"
    >
      <div className="mx-4 lg:mx-7  h-[60vh] sm:h-[50vh]  lg:h-[80vh] flex-col rounded-[28px] bg-[#014631]">
      {/* HEADING */}
      <div className="px-6 sm:px-4  lg:px-10 pt-4 text-center max-w-7xl mx-auto">
        

        <h2
          className="serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-yellow-400 mt-6
        "
        >
          Sustainable Logistics
        </h2>

        <h3
          className="serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-yellow-400 "
        >
          Smarter Future
        </h3>

        
      </div>
      <div className="max-w-7xl mx-auto mt-10 sm:mt-14 px-2 sm:px-6">
        {/* MOBILE SLIDER */}
        <div className="lg:hidden px-2">
          <Swiper
            modules={[Pagination]}
            spaceBetween={18}
            slidesPerView={1.1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            grabCursor={true}
          >
            <SwiperSlide className="flex justify-center pb-12">
              <SustainabilityCard
                icon="🚚"
                title="Lower Emissions"
                description="EV fleet solutions for greener, more sustainable transport."
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center">
              <SustainabilityCard
                icon="💡"
                title="Smart Innovation"
                description="Technology that powers delivery visibility and dispatch control."
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center">
              <SustainabilityCard
                icon="📈"
                title="CO₂ Reporting"
                description="Estimated carbon savings tracked for every single delivery."
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center">
              <SustainabilityCard
                icon="🌏"
                title="Better Planet"
                description="Logistics designed with long-term sustainability at its core."
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 place-items-center">
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
      </div>
      </div>
    </section>
  );
};

export default Sustainability;
