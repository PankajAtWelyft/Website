import React, { useState, useRef } from "react";
import logo from "../assets/new_logo.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const serviceLinks = [
  { label: "B2B Enterprise Logistics", path: "/services/b2b", badge: "B2B", desc: "Fleet-powered bulk delivery" },
  { label: "B2C Last-Mile Fulfilment", path: "/services/b2c", badge: "B2C", desc: "Fast last-mile delivery" },
  { label: "C2C On-Demand App", path: "/services/c2c", badge: "C2C", desc: "Instant parcel booking" },
  { label: "Welyft OS Platform", path: "/services/platform", badge: "Platform", desc: "Fleet management SaaS" },
  { label: "EV Van Rental", path: "/services/rental", badge: "Rental", desc: "Flexible EV van hire" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-[999] px-4 md:px-8 bg-white shadow-md h-17 flex items-center justify-between">
      
      {/* LOGO */}
      <div className="flex items-center">
        <img src={logo} className="w-14 md:w-16" alt="welyft_logo" />
        <h1 className="font-bold text-3xl">welyft</h1>
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden lg:flex font-bold mr-4 text-xl gap-6 items-center">
        <Link to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex flex-col items-center">
          Home
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full" />
        </Link>

        <a href="/#about" className="group flex flex-col items-center">
          About
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full" />
        </a>

        {/* SERVICES DROPDOWN */}
        <div className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>

          <button className="flex flex-col items-center focus:outline-none">
            <span className="flex items-center gap-1.5">
              Services
              <FaChevronDown className={`text-sm transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </span>
            <span className={`h-0.5 bg-yellow-400 mt-1 transition-all duration-300 ${servicesOpen ? "w-full" : "w-0"}`} />
          </button>

          {/* DROPDOWN */}
          {servicesOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl overflow-hidden z-50"
              style={{ boxShadow: '0 20px 60px rgba(10,31,68,0.15)', border: '1px solid rgba(10,31,68,0.08)' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>

              {/* Dropdown header */}
              <div className="px-5 py-3 bg-[#0A1F44]">
                <p className="text-xs font-black uppercase tracking-widest text-yellow-400">
                  Our Services
                </p>
              </div>

              {/* Links */}
              <div className="bg-white">
                {serviceLinks.map((s, i) => (
                  <Link key={i} to={s.path}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 px-5 py-3.5 hover:bg-[#F6F5F0] transition-all border-b border-gray-50 last:border-0 group">
                    <span className="text-[9px] font-black tracking-widest px-2 py-1 rounded-full shrink-0"
                      style={{ background: '#0A1F44', color: '#FFD600' }}>
                      {s.badge}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#0A1F44] group-hover:text-yellow-600 transition-colors leading-tight">
                        {s.label}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 bg-[#F6F5F0] border-t border-gray-100">
                <a href="/#services"
                  className="text-xs font-bold text-[#0A1F44] hover:text-yellow-600 transition-colors">
                  View All Services →
                </a>
              </div>
            </div>
          )}
        </div>

        <a href="/#sustainability" className="group flex flex-col items-center">
          Sustainability
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full" />
        </a>

        <a href="/#blog" className="group flex flex-col items-center">
          Blog
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full" />
        </a>

        <Link to="/careers" className="group flex flex-col items-center">
          Careers
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full" />
        </Link>

        <a href="/#contact" className="group flex flex-col items-center">
          Contact Us
          <span className="w-0 h-0.5 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full" />
        </a>
      </div>

      <a href="#quote">
        <button className="hidden lg:block bg-yellow-400 font-bold cursor-pointer px-7 py-3 rounded-2xl shadow-lg shadow-yellow-400/50 mr-10 hover:shadow-yellow-300 transition-all duration-300">
          Get Quote
        </button>
      </a>

      {/* MOBILE ICON */}
      <div onClick={() => setOpen(!open)}
        className="lg:hidden text-2xl sm:text-3xl cursor-pointer text-[#021B44]">
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-0 left-0 h-auto min-h-[60vh] w-full bg-white z-[999] px-8 py-6 lg:hidden flex flex-col animate-slideIn rounded-b-3xl shadow-xl overflow-y-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} className="w-8" alt="" />
              <h1 className="text-2xl font-bold">Welyft</h1>
            </div>
            <FaTimes onClick={() => setOpen(false)}
              className="text-3xl text-[#021B44] cursor-pointer" />
          </div>

          <div className="flex flex-col gap-5 mt-10 text-2xl font-medium text-[#111]">
            <a href="/#about" onClick={() => setOpen(false)}>About</a>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center gap-2 w-full">
                Services
                <FaChevronDown className={`text-lg transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="mt-4 ml-2 flex flex-col gap-3 border-l-2 border-yellow-400 pl-4">
                  {serviceLinks.map((s, i) => (
                    <Link key={i} to={s.path}
                      onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                      className="flex items-center gap-2">
                      <span className="text-[9px] font-black px-2 py-1 rounded-full shrink-0"
                        style={{ background: '#0A1F44', color: '#FFD600' }}>
                        {s.badge}
                      </span>
                      <div>
                        <p className="text-base font-bold text-[#0A1F44] leading-tight">{s.label}</p>
                        <p className="text-xs text-gray-400">{s.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="/#sustainability" onClick={() => setOpen(false)}>Sustainability</a>
            <a href="/#blog" onClick={() => setOpen(false)}>Blog</a>
            <Link to="/careers" onClick={() => setOpen(false)}>Careers</Link>
            <a href="/#contact" onClick={() => setOpen(false)}>Contact Us</a>
          </div>

          <a href="#quote">
            <button className="mt-6 bg-yellow-400 py-3 rounded-2xl text-lg font-bold shadow-lg w-full">
              Get Quote
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;