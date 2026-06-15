import React from "react";
import SustainabilityCard from "./SustainabilityCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Sustainability = () => {
  return (
    <section className=" relative overflow-hidden bg-[#F6F5F0] pt-16">
      <div className="relative z-10 flex flex-col mx-auto  max-w-8xl px-4 sm:px-5 lg:px-10">
      <div className=" flex flex-col rounded-[28px]  bg-gradient-to-br from-[#0A1F44] to-[#163B7A] px-2 pb-6  sm:px-4  md:px-5  lg:px-6">
      {/* HEADING */}
      <div className="mx-auto max-w-7xl px-4 pt-2 pb-2 text-center sm:px-6 lg:px-10">
        

        <h2
          className="serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-yellow-400 mt-4
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
      <div className="mt-6 w-full max-w-8xl">
        {/* MOBILE SLIDER */}
        <div className="px-1 md:px-2 xl:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={false}
            pagination={{ clickable: true }}
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 1.05 },
              768: { slidesPerView: 1.6 },
            }}
          >
            <SwiperSlide className="flex justify-center pb-2">
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

        {/* DESKTOP / TABLET GRID */}
        <div className="hidden relative gap-6 h-30 lg:h-50 place-items-stretch xl:grid xl:grid-cols-4 xl:gap-4">
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
      </div>
    </section>
  );
};

export default Sustainability;
