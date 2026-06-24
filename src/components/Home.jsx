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

const homeSlides = [
  {
    image: Hero_page,
    mobileImage: MobileHero_page,
    alt: "Welyft hero banner",
    stats: [
      { value: "Secure Delivery" },
      { value: "Live Tracking" },
      { value: "On-Time Service" },
      { value: "Instant Support" },
    ],
  },
  {
    image: B2B_banner,
    mobileImage: MobileB2B_banner,
    alt: "Welyft B2B banner",
    stats: [
      { value: "Bulk Shipping" },
      { value: "Dedicated Fleet" },
      { value: "Real-Time Tracking" },
      { value: "Enterprise Billing" },
    ],
  },
  {
    image: C2C_banner,
    mobileImage: MobileC2C_banner,
    alt: "Welyft C2C banner",
    stats: [
      { value: "Instant Booking" },
      { value: "Live Tracking" },
      { value: "Price Estimate" },
      { value: "Eco-Friendly Delivery" },
    ],
  },
  {
    image: Logistics_Technology,
    mobileImage: MobileLogistics_Technology,
    alt: "Logistics and technology image",
    stats: [
      { value: "Smart Dispatch" },
      { value: "Route Optimization" },
      { value: "Real-Time Updates" },
      { value: "Business Solutions" },
    ],
  },
];

const Home = () => {
  const swiperRef = React.useRef(null);

  return (
    <section id="home" className="relative w-full pt-14 sm:pt-8 lg:pt-16">
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
              <div className="relative flex min-h-[670px] items-center justify-center overflow-hidden bg-transparent sm:min-h-[750px] md:min-h-[1230px] lg:min-h-[55vw] xl:min-h-[92vh]">
                <div className="block h-full w-full">
                  {/* Desktop Banner */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="absolute inset-0 hidden lg:block h-full w-full object-fill"
                    loading="eager"
                  />

                  {/* Mobile & Tablet Banner */}
                  <img
                    src={slide.mobileImage}
                    alt={slide.alt}
                    className="absolute inset-0 block lg:hidden h-full w-full object-contain"
                    loading="eager"
                  />

                  {/* Stats */}
                  <div className="absolute bottom-8 sm:bottom-20 md:bottom-8 lg:bottom-3 left-1/2 z-10 flex w-full -translate-x-1/2  justify-center gap-2 px-4 sm:gap-3 lg:gap-6">
                    {slide.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="flex min-w-17.5 items-center justify-center rounded-xl  bg-yellow-400 px-3 py-2 sm:py-4 text-black backdrop-blur-md transition-all duration-300 hover:bg-[#0a1f44] hover:text-white sm:min-w-29.5 lg:w-fit lg:rounded-2xl lg:py-4 xl:py-5 xl:px-5"
                      >
                        <h2 className="text-xs font-semibold sm:text-md lg:text-lg">
                          {stat.value}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white shadow-md transition hover:bg-black/70 sm:left-4"
          aria-label="Previous slide"
        >
          ←
        </button>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white shadow-md transition hover:bg-black/70 sm:right-4"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Home;