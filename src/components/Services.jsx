import React from "react";
import ServicesCard from "./ServicesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Building2,
  Package,
  Smartphone,
  LayoutDashboard,
  BusFront,
} from "lucide-react";

const services = [
  {
    tag: "B2B",
    Icon: Building2,
    title: "Enterprise Logistics",
    description:
      "Reliable enterprise-grade logistics powered by a 100% electric fleet and real-time carbon visibility.",
    features: [
      "Dedicated fleet capacity",
      "SLA-backed delivery",
      "Live GPS tracking",
      "ePOD execution",
      "Auto invoicing",
    ],
    highlight: "Live Scope-3 Carbon Reporting",
    ctaLabel: "Explore B2B",
  },
  {
    tag: "B2C",
    Icon: Package,
    title: "Last-Mile Fulfilment",
    description:
      "Fast, reliable last-mile delivery with full visibility for customers and operators.",
    features: [
      "Multi-stop routing",
      "Customer notifications",
      "Live tracking",
      "ePOD confirmation",
      "Delivery analytics",
    ],
    highlight: "12–20% Route Cost Reduction",
    ctaLabel: "Explore B2C",
  },
  {
    tag: "C2C",
    Icon: Smartphone,
    title: "WeMove - by Welyft",
    description:
      "Instant peer-to-peer parcel delivery with transparent pricing and verified security.",
    features: [
      "Instant booking system",
      "Live parcel tracking",
      "Transparent pricing",
      "Digital security proof",
    ],
    highlight: "Every Booking Carbon Savings View",
    ctaLabel: "Explore WeMove",
  },
  {
    tag: "Platform",
    Icon: LayoutDashboard,
    title: "Welyft OS Platform",
    description:
      "An operating system for modern logistics — fleet, dispatch, routing and analytics in one place.",
    features: [
      "Fleet asset management",
      "Dispatch automation",
      "Route optimization",
      "ePOD workflows",
      "Analytics dashboard",
    ],
    highlight: "Singapore's First Live CO₂ Ledger",
    ctaLabel: "Explore Platform",
  },
  {
    tag: "Rental",
    Icon: BusFront,
    title: "EV Van Rental Service",
    description:
      "Flexible electric van hire with predictable pricing and on-call driver support.",
    features: [
      "Half-day vehicle hire",
      "Full-day vehicle hire",
      "Predictable monthly plans",
      "On-call driver support",
      "Fluid fleet scaling",
    ],
    highlight: "100% Electric Fleet Commitment",
    ctaLabel: "Explore Rental",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F6F5F0] pt-0"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F6F5F0] to-transparent" />

      {/* HEADING */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-4 lg:px-10">
        <p className="mt-4 inline-block rounded-md bg-[#0A1F44] px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-300 sm:px-5 sm:text-xl">
          Our Services
        </p>
        <h2 className="mt-6 text-2xl font-bold leading-tight text-[#0A1F44] sm:text-4xl md:text-5xl lg:text-6xl">
          Why Choose Welyft?
        </h2>
        <p className="mx-auto  max-w-4xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-2xl">
          Professional B2B logistics services supported by electric vehicles,
          technology, and operational discipline.
        </p>
      </div>

      {/* DESKTOP / LARGE-SCREEN GRID */}
      <div className="relative z-10 mx-auto mt-10 hidden h-[90vh] gap-6 px-6 lg:grid lg:grid-cols-3 lg:px-10 xl:grid-cols-5">
        {services.map((s, i) => (
          <ServicesCard key={i} {...s} />
        ))}
      </div>

      {/* TABLET + MOBILE SLIDER */}
      <div className="relative z-10 mt-10 px-4 md:px-6 lg:hidden">
        <Swiper
          spaceBetween={18}
          slidesPerView={1.05}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 1.8 },
            1024: { slidesPerView: 2.2 },
          }}
        >
          {services.map((s, i) => (
            <SwiperSlide key={i} className="h-auto">
              <ServicesCard {...s} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
