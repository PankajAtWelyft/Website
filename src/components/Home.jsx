import React from "react";

const Home = () => {
  return (
    <>
      <div  id="home"
        className="min-h-screen flex items-center justify-center bg-cover px-4 bg-center"
        style={{
          backgroundImage:
            "  linear-gradient(90deg, rgba(11, 31, 58, 0.93), rgba(11, 31, 58, 0.62), rgba(11, 31, 58, 0.22)),url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=80)",
        }}
      >
        <div className="lg:mr-40 text-center lg:text-left flex flex-col">
          <h1 className="uppercase text-left lg:text-3xl text-lg font-bold md:text-2xl text-yellow-300">
            EV Logistics • Technology • Sustainability
          </h1>
          <h1 className="font-bold text-7xl text-left text-white leading-tight">
            Your Trusted <br /> Partner in
            <span className="text-yellow-300 gap-2 text-7xl leading-tight">
              {" "}
              Transport <br /> & Logistics
            </span>
          </h1>
          <p className="text-white p-2 text-left text-lg md:text-xl lg:text-2xl">
            Smart delivery solutions powered by electric vehicles,
            <br />
            logistics technology, and sustainability <br />
            reporting for forward-thinking businesses.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              className="  bg-yellow-400 font-bold cursor-pointer text-indigo px-8  py-4 rounded-2xl
          shadow-lg shadow-yellow-400/50 mr-10 hover:shadow-yellow-100 transition-all duration-100"
            >
              Get Quote
            </button>
            <a href="#services">
            <button id="#services" className="px-10 py-4 font-bold cursor-pointer rounded-2xl text-indigo bg-white">
              Our Services
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
