import { useEffect, useRef, useState } from "react";
import ChartHeader from "./ChartHeader";
import CO2Chart from "./CO2Chart";
import TotalImpactPanel from "./TotalImpactPanel";
import CO2PieChart from "./CO2PieChart";
import DeliveriesReplaced from "./DeliveriesReplaced";
import FooterNote from "./FooterNote";
import { createCO2SavingsView } from "./data";
import { fetchCO2SavingsView } from "./co2SavingsService";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CO2Dashboard() {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [dashboardData, setDashboardData] = useState(() => createCO2SavingsView());
  const slideClass = "flex w-full justify-center !h-auto";
  const cardClass =
    "h-[640px] sm:h-[620px] md:h-[660px] lg:h-[560px] xl:h-[600px] w-full min-w-0";

  useEffect(() => {
    let isMounted = true;

    const loadDashboardData = async () => {
      const liveData = await fetchCO2SavingsView();
      if (isMounted) {
        setDashboardData(liveData);
      }
    };

    loadDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);
  const slideLabels = [
    "CO2 chart",
    "CO2 reduction ratio",
    "Deliveries replaced",
    "Total impact",
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
      <ChartHeader />

      <div className="w-full px-1 sm:px-2 lg:px-0">
        <Swiper
          className="w-full"
          spaceBetween={14}
          slidesPerView={1}
          centeredSlides={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex);
          }}
        >
          <SwiperSlide className={slideClass}>
            <div
              className={`${cardClass} rounded-xl border-2 p-4 sm:p-5`}
              style={{ borderColor: dashboardData.palette.evDeliveries }}
            >
              <CO2Chart data={dashboardData} />
            </div>
          </SwiperSlide>

          <SwiperSlide className={slideClass}>
            <div className={`${cardClass} *:h-full`}>
              <CO2PieChart data={dashboardData} />
            </div>
          </SwiperSlide>

          <SwiperSlide className={slideClass}>
            <div className={`${cardClass} *:h-full`}>
              <DeliveriesReplaced data={dashboardData} />
            </div>
          </SwiperSlide>

          <SwiperSlide className={slideClass}>
            <div className={`${cardClass} *:h-full`}>
              <TotalImpactPanel data={dashboardData} />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="mt-5 flex items-center justify-center gap-3">
          {slideLabels.map((slideLabel, index) => {
            const isActive = activeSlide === index;

            return (
              <button
                key={slideLabel}
                type="button"
                aria-label={`Go to ${slideLabel}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  isActive ? "w-14 shadow-sm" : "w-3 opacity-35"
                }`}
                style={{ backgroundColor: dashboardData.palette.evDeliveries }}
              />
            );
          })}
        </div>
      </div>

      <FooterNote />
    </div>
  );
}
