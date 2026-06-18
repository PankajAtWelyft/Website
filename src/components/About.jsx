import React, { useEffect, useState } from "react";
import { Truck, Cpu, Network, Leaf } from "lucide-react";

const cards = [
  {
    icon: <Truck className="w-8 h-8 text-yellow-400" />,
    tag: "B2B Logistics",
    title: "The Engine",
    subtitle: "Powering Business In Motion",
    desc: "Our EV fleet powers daily B2B operations across Singapore, helping businesses manage bulk deliveries, distribution, and last-mile logistics with reliability and efficiency.",
    bg: "from-[#061533] to-[#0A1F44]",
    accent: "text-yellow-400",
    tagBg: "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20",
  },
  {
    icon: <Cpu className="w-8 h-8 text-[#0A1F44]" />,
    tag: "Logistics Technology",
    title: "The Intelligence",
    subtitle: "The Brain Behind Every Move",
    desc: "Welyft's technology platform helps businesses optimize routes, manage fleets, automate workflows, and gain real-time operational insights — all in one place.",
    bg: "from-yellow-400 to-yellow-300",
    accent: "text-[#0A1F44]",
    tagBg: "bg-[#0A1F44]/10 text-[#0A1F44] border border-[#0A1F44]/20",
  },
  {
    icon: <Network className="w-8 h-8 text-blue-500" />,
    tag: "B2C & C2C Deliveries",
    title: "The Network",
    subtitle: "Where Demand Meets Delivery",
    desc: "From personal parcel deliveries to SME shipments, Welyft connects businesses and customers through one seamless, scalable logistics platform.",
    bg: "from-slate-50 to-white",
    accent: "text-blue-600",
    tagBg: "bg-blue-50 text-blue-600 border border-blue-100",
  },
  {
    icon: <Leaf className="w-8 h-8 text-emerald-400" />,
    tag: "Eco-Friendly Promise",
    title: "The Impact",
    subtitle: "Green By Design",
    desc: "Every Welyft delivery contributes to a greener future through our 100% electric fleet, carbon tracking capabilities, and deep commitment to sustainable logistics.",
    bg: "from-emerald-950 to-[#0A1F44]",
    accent: "text-emerald-400",
    tagBg: "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20",
  },
];

const About = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % cards.length);
        setAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDot = (i) => {
    setAnimating(true);
    setTimeout(() => {
      setActive(i);
      setAnimating(false);
    }, 300);
  };

  const card = cards[active];
  const isDark = active === 0 || active === 3;
  const isYellow = active === 1;

  return (
    <section
      id="about"
      className="scroll-mt-20 relative overflow-hidden pt-16"
      style={{ background: "#F6F5F0" }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 h-150 w-150 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,214,0,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(10,31,68,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 flex flex-col mx-auto  max-w-8xl px-4 sm:px-5 lg:px-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="mt-4 inline-block rounded-md bg-[#0A1F44] px-4 py-2 text-sm font-bold uppercase  text-amber-300 sm:px-5 sm:text-xl tracking-[0.03em]">
            About Welyft
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 max-w-9xl gap-20 items-start lg:grid-cols-2">

          {/* LEFT — CARD */}
          <div className="mt-8  sm:mt-10 lg:mt-12">
            <div
              className={`relative flex h-[400px] flex-col justify-start overflow-hidden rounded-4xl bg-linear-to-br p-6 pt-8 transition-opacity duration-300  sm:p-8  lg:p-10 ${card.bg} ${animating ? "opacity-0" : "opacity-100"}`}
              style={{ boxShadow: "0 20px 10px rgba(0,0,0,0.12)" }}>

              {/* Decorative circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
                style={{ background: "white" }} />

              {/* Top */}
              <div className="flex items-start justify-between">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-xl border ${isDark ? "bg-white/10 border-white/10" : isYellow ? "bg-[#0A1F44]/10 border-[#0A1F44]/10" : "bg-gray-100 border-gray-200"}`}>
                  {card.icon}
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${card.tagBg}`}>
                  {card.tag}
                </span>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-2 ${isDark ? "text-white" : isYellow ? "text-[#0A1F44]" : "text-[#0A1F44]"}`}>
                  {card.title}
                </h3>
                <p className={`text-base italic mb-4 font-medium ${isDark ? "text-white/60" : isYellow ? "text-[#0A1F44]/60" : "text-gray-400"}`}>
                  "{card.subtitle}"
                </p>
                <p className={`text-base leading-8 max-w-xl ${isDark ? "text-white/75" : isYellow ? "text-[#0A1F44]/75" : "text-gray-500"}`}>
                  {card.desc}
                </p>
              </div>
            </div>

            {/* DOTS + ARROWS */}
            <div className="mt-5 flex flex-wrap justify-center items-center gap-4 px-2">
              
              <div className="flex items-center gap-2">
                {cards.map((_, i) => (
                  <button key={i} onClick={() => handleDot(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-[#D89B00]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                  />
                ))}
              </div>
              
            </div>
          </div>

          {/* RIGHT — VIDEO ONLY */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <div className="relative flex h-[400px] flex-col justify-center overflow-hidden rounded-4xl p-4  sm:p-6  lg:p-6"
              style={{ background: "#0A1F44", boxShadow: "0 20px 10px rgba(10,31,68,0.18)" }}>
              <div className="p-2 sm:p-3 lg:p-4 mb-3">
                <h4 className="text-white text-xl font-black leading-tight tracking-tight mb-2">
                  Transforming Urban Logistics Across Singapore
                </h4>
                <p className="text-gray-400 text-sm leading-6">
                  Zero-emission workflows tailored for modern commerce — powered by smart tech.
                </p>
              </div>
              <div className="w-full mt-2 rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YwGZerRU0Dc"
                  title="Welyft Video"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;