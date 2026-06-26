import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Hero_page from "../assets/welyft-home-banner-img.png";
import B2B_banner from "../assets/welyft-B2B-banner-img.png";
import C2C_banner from "../assets/welyft-C2C-banner-img.png";
import Logistics_Technology from "../assets/welyft-logistics+technology-img.png";
import MobileHero_page from "../assets/welyft-mobile-home-banner.png";
import MobileB2B_banner from "../assets/welyft-mobile-B2B-banner.png";
import MobileC2C_banner from "../assets/Welyft-mobile-C2C-banner.png";
import MobileLogistics_Technology from "../assets/welyft-mobile-logistics+technology.png";

import {
  RiShieldCheckLine,
  RiMapPinLine,
  RiTimeLine,
  RiCustomerService2Line,
  RiTruckLine,
  RiRoadMapLine,
  RiRadarLine,
  RiFileList3Line,
  RiFlashlightLine,
  RiMoneyDollarCircleLine,
  RiLeafLine,
  RiCpuLine,
  RiRouteLine,
  RiNotification3Line,
  RiBuilding2Line,
} from "@remixicon/react";

const homeSlides = [
  {
    image: Hero_page,
    mobileImage: MobileHero_page,
    alt: "Welyft hero banner",
    stats: [
      { value: "Secure Delivery", icon: RiShieldCheckLine },
      { value: "Live Tracking", icon: RiMapPinLine },
      { value: "On-Time Service", icon: RiTimeLine },
      { value: "Instant Support", icon: RiCustomerService2Line },
    ],
  },
  {
    image: B2B_banner,
    mobileImage: MobileB2B_banner,
    alt: "Welyft B2B banner",
    stats: [
      { value: "Bulk Shipping", icon: RiTruckLine },
      { value: "Dedicated Fleet", icon: RiRoadMapLine },
      { value: "Real-Time Tracking", icon: RiRadarLine },
      { value: "Enterprise Billing", icon: RiFileList3Line },
    ],
  },
  {
    image: C2C_banner,
    mobileImage: MobileC2C_banner,
    alt: "Welyft C2C banner",
    stats: [
      { value: "Instant Booking", icon: RiFlashlightLine },
      { value: "Live Tracking", icon: RiMapPinLine },
      { value: "Price Estimate", icon: RiMoneyDollarCircleLine },
      { value: "Eco-Friendly Delivery", icon: RiLeafLine },
    ],
  },
  {
    image: Logistics_Technology,
    mobileImage: MobileLogistics_Technology,
    alt: "Logistics and technology image",
    stats: [
      { value: "Smart Dispatch", icon: RiCpuLine },
      { value: "Route Optimization", icon: RiRouteLine },
      { value: "Real-Time Updates", icon: RiNotification3Line },
      { value: "Business Solutions", icon: RiBuilding2Line },
    ],
  },
];

const Home = () => {
  const swiperRef = React.useRef(null);

  return (
    <section
      id="home"
      className="relative w-full pt-14 sm:pt-16 lg:pt-17"
    >
      <div className="relative w-full overflow-hidden rounded-none bg-[#F5F3EE]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="home-slider bg-transparent"
          style={{ background: "transparent" }}
        >
          {homeSlides.map((slide) => (
            <SwiperSlide key={slide.alt} className="bg-transparent">
              <div className="relative flex h-[67vh] min-h-[320px] items-center justify-center overflow-hidden bg-transparent sm:h-[75vh] md:h-[95vh] lg:h-[48vw] xl:h-[75vh] 2xl:h-[660px]">
                <div className="block h-full w-full">
                  {/* Desktop Banner */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="absolute inset-0 hidden h-full w-full lg:block object-cover object-center"
                    loading="eager"
                  />

                  {/* Mobile & Tablet Banner */}
                  <img
                    src={slide.mobileImage}
                    alt={slide.alt}
                    className="absolute inset-0 block h-full w-full lg:hidden object-cover object-center"
                    loading="eager"
                  />

                  {/* Stats */}
                  <div className="absolute bottom-4 left-1/2 z-10 flex w-full -translate-x-1/2 justify-center gap-2 px-2 sm:bottom-6 sm:gap-3 sm:px-4 md:bottom-8 lg:bottom-6 lg:gap-5 xl:bottom-8">
                    {slide.stats.map((stat, statIndex) => {
                      const Icon = stat.icon;

                      return (
                        <div
                          key={statIndex}
                          className="flex items-center justify-center gap-1 rounded-lg bg-yellow-400 px-2 py-2 text-black transition-all duration-300 hover:bg-[#0a1f44] hover:text-white min-w-[70px] sm:min-w-[110px] md:min-w-[150px] lg:min-w-fit lg:gap-2 lg:rounded-2xl lg:px-4 lg:py-3 xl:px-5"
                        >
                          <Icon className="size-4 shrink-0 sm:size-5 lg:size-6 xl:size-7" />

                          <h2 className="text-[10px] font-medium capitalize leading-tight sm:text-xs md:text-sm md:font-semibold lg:text-lg">
                            {stat.value}
                          </h2>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-sm text-white shadow-md transition hover:bg-black/70 sm:left-4 sm:p-3 sm:text-base lg:left-6"
          aria-label="Previous slide"
        >
          ←
        </button>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-sm text-white shadow-md transition hover:bg-black/70 sm:right-4 sm:p-3 sm:text-base lg:right-6"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Home;