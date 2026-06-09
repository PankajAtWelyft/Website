import React from "react";
import SustainabilityCard from "./SustainabilityCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Sustainability = () => {
  return (
    <section
      id="sustainability"
      className="bg-[#014631] py-10 sm:py-12 lg:py-14"
    >
      {/* HEADING */}
      <div className="px-6 sm:px-4  lg:px-10 text-center max-w-7xl mx-auto">
        <h1 className="inline-block text-sm sm:text-xl text-[#0a1f44] bg-yellow-400 tracking-widest mt-4 px-4 sm:px-5 py-2 rounded-md font-bold uppercase">
          Why Welyft
        </h1>

        <h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-yellow-400 mt-6
        "
        >
          Sustainable Logistics
        </h2>

        <h3
          className="
          text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-yellow-400
          italic
        "
        >
          Smarter Future
        </h3>

        <p
          className="
          text-lg
          sm:text-xl
          lg:text-2xl
          text-white/90
          leading-relaxed
          text-center
          max-w-4xl
          mx-auto
          mt-8
        "
        >
          Helping companies reduce transport emissions and move towards cleaner,
          greener business operations — one delivery at a time.
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-10 sm:mt-14 px-2 sm:px-6">
        {/* MOBILE SLIDER */}
        <div className="sm:hidden px-2">
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
        <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center">
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
    </section>
  );
};

export default Sustainability;
