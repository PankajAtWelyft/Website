import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Hero_page from "../assets/welyft-home-banner-img.png";
import delivery from "../assets/welyft-C2C-banner-img.png";
import section_page from "../assets/welyft-logistics+technology-img.png";

const homeSlides = [
  { image: Hero_page, alt: "Welyft hero banner" },
  { image: delivery, alt: "Delivery logistics image" },
  { image: section_page, alt: "Service section image" },
];

const Home = () => {
  const swiperRef = React.useRef(null);

  return (
    <section id="home" className="w-full pt-17">
      <div className="relative mx-auto w-full overflow-hidden rounded-none bg-[#F5F3EE]">
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
              <div className="flex h-[28vh] max-h-[900px] items-center justify-center overflow-hidden bg-transparent sm:h-[38vh] lg:h-[92vh]">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-fill"
                  loading="eager"
                />
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
