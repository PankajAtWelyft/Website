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
  { image: Hero_page, mobileImage: MobileHero_page, alt: "Welyft hero banner" },
  { image: B2B_banner, mobileImage: MobileB2B_banner, alt: "Welyft B2B banner" },
  { image: C2C_banner, mobileImage: MobileC2C_banner, alt: "Welyft C2C banner" },
  { image: Logistics_Technology, mobileImage: MobileLogistics_Technology, alt: "Logistics and technology image" },
];

const Home = () => {
  const swiperRef = React.useRef(null);

  return (
    <section id="home" className="w-full pt-15 sm:pt-8 lg:pt-17">
      <div className="relative  w-full overflow-hidden rounded-none bg-[#F5F3EE]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="home-slider bg-transparent"
          style={{ background: "transparent" }}
        >
          {homeSlides.map((slide) => (
            <SwiperSlide key={slide.alt} className="bg-transparent">
              <div className="flex h-[70vh] items-center justify-center overflow-hidden bg-transparent sm:h-[110vh] lg:h-[92vh]">
                <picture className="block h-full w-full">
                  <source media="(max-width: 1024px)" srcSet={slide.mobileImage} />
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="h-full w-full object-contain"
                    loading="eager"
                  />
                </picture>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white shadow-md transition hover:bg-black/70 sm:left-4"
          aria-label="Previous slide"
        >
          ←
        </button>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white shadow-md transition hover:bg-black/70 sm:right-4"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Home;
