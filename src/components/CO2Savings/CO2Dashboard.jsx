import ChartHeader from "./ChartHeader";
import CO2Chart from "./CO2Chart";
import TotalImpactPanel from "./TotalImpactPanel";
import CO2PieChart from "./CO2PieChart";
import DeliveriesReplaced from "./DeliveriesReplaced";
import FooterNote from "./FooterNote";
import { palette } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CO2Dashboard() {
  const mobileSlideClass = "flex justify-center !h-auto";
  const mobileCardClass = "h-[640px] sm:h-[620px] md:h-[660px] w-full min-w-0";

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
      <ChartHeader />

       {/* MOBILE / TABLET SLIDER */}
  <div className="lg:hidden px-2">
    <Swiper
      spaceBetween={14}
      slidesPerView={1}
      centeredSlides={true}
    >
      <SwiperSlide className={mobileSlideClass}>
        <div className={`${mobileCardClass} rounded-xl border-2 p-4 sm:p-5`} style={{ borderColor: palette.evDeliveries }}>
          <CO2Chart />
        </div>
      </SwiperSlide>

      <SwiperSlide className={mobileSlideClass}>
        <div className={`${mobileCardClass} [&>*]:h-full`}>
          <CO2PieChart/>
        </div>
      </SwiperSlide>

      <SwiperSlide className={mobileSlideClass}>
        <div className={`${mobileCardClass} [&>*]:h-full`}>
          <DeliveriesReplaced/>
        </div>
      </SwiperSlide>

      <SwiperSlide className={mobileSlideClass}>
        <div className={`${mobileCardClass} [&>*]:h-full`}>
          <TotalImpactPanel/>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>


      {/* DESKTOP GRID */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="min-w-0 rounded-xl border-2 p-4 sm:p-5" style={{ borderColor: palette.evDeliveries }}>
          <CO2Chart />
        </div>
        <CO2PieChart />
        
        <DeliveriesReplaced />
        <TotalImpactPanel />
      </div>
      <FooterNote />
    </div>
  );
}
