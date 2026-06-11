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
      className="relative overflow-hidden pt-12 pb-24 lg:pb-32"
      style={{ background: "#F6F5F0" }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,214,0,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(10,31,68,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-widest"
            style={{ background: "#0A1F44", color: "#FFD600" }}
          >
            About Welyft
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6"
            style={{ color: "#0A1F44" }}
          >
            Four Engines.
            <br />
            <span style={{ color: "#D89B00" }}>One Competitive Edge.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Intelligent technology, sustainability, and scalable logistics
            infrastructure — powering the next generation of urban delivery.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT — CARD */}
          <div className="lg:col-span-7">
            <div
              className={`relative rounded-[40px] p-10 sm:p-14 min-h-[620px] flex flex-col justify-between bg-gradient-to-br overflow-hidden transition-opacity duration-300 ${card.bg} ${animating ? "opacity-0" : "opacity-100"}`}
              style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.12)" }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10"
                style={{ background: "white" }}
              />

              {/* Top */}
              <div className="flex items-start justify-between">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-xl border ${isDark ? "bg-white/10 border-white/10" : isYellow ? "bg-[#0A1F44]/10 border-[#0A1F44]/10" : "bg-gray-100 border-gray-200"}`}
                >
                  {card.icon}
                </div>
                <span
                  className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${card.tagBg}`}
                >
                  {card.tag}
                </span>
              </div>

              {/* Content */}
              <div className="mt-12">
                <h3
                  className={`text-4xl sm:text-5xl font-black tracking-tight mb-2 ${isDark ? "text-white" : isYellow ? "text-[#0A1F44]" : "text-[#0A1F44]"}`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-base italic mb-5 font-medium ${isDark ? "text-white/60" : isYellow ? "text-[#0A1F44]/60" : "text-gray-400"}`}
                >
                  "{card.subtitle}"
                </p>
                <p
                  className={`text-sm leading-8 max-w-xl ${isDark ? "text-white/75" : isYellow ? "text-[#0A1F44]/75" : "text-gray-500"}`}
                >
                  {card.desc}
                </p>
              </div>
            </div>

            {/* DOTS + ARROWS */}
            <div className="flex items-center gap-4 mt-6 px-2">
              <button
                onClick={() =>
                  handleDot((active - 1 + cards.length) % cards.length)
                }
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-[#0A1F44] hover:border-[#0A1F44] hover:text-white font-bold text-lg"
                style={{ borderColor: "rgba(10,31,68,0.2)", color: "#0A1F44" }}
              >
                ←
              </button>
              <div className="flex items-center gap-2">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDot(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-10 bg-[#D89B00]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => handleDot((active + 1) % cards.length)}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:bg-[#0A1F44] hover:border-[#0A1F44] hover:text-white font-bold text-lg"
                style={{ borderColor: "rgba(10,31,68,0.2)", color: "#0A1F44" }}
              >
                →
              </button>
              <span className="ml-2 text-sm font-semibold text-gray-400">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(cards.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* RIGHT — INFO CARD */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Video */}
            <div
              className="rounded-[32px] overflow-hidden flex-1"
              style={{
                background: "#0A1F44",
                boxShadow: "0 25px 70px rgba(10,31,68,0.18)",
              }}
            >
              <div className="p-8">
                <h4 className="text-white text-2xl font-black leading-tight tracking-tight mb-3">
                  Transforming Urban Logistics Across Singapore
                </h4>
                <p className="text-gray-400 text-sm leading-7">
                  Zero-emission workflows tailored for modern commerce — powered
                  by smart tech.
                </p>
              </div>
              <div className="mx-6 mb-6 rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YwGZerRU0Dc"
                  title="Welyft Video"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  val: "100%",
                  label: "Electric Fleet",
                  color: "text-yellow-500",
                },
                {
                  val: "99%",
                  label: "On-Time Rate",
                  color: "text-emerald-500",
                },
                { val: "SG", label: "Based", color: "text-blue-500" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-black/6 text-center"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
                >
                  <p className={`text-2xl font-black ${s.color}`}>{s.val}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1 font-semibold">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
