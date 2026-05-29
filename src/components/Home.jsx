import React from "react";
import Welyft_banner_Nw from "../assets/Welyft_banner_Nw.png";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen flex items-center bg-cover bg-center px-16"
       style={{
  backgroundImage: `
    linear-gradient(
      90deg,
      rgba(5,18,35,0.72) 15%,
      rgba(5,18,35,0.45) 40%,
      rgba(5,18,35,0.08) 75%
    ),
    url(${Welyft_banner_Nw})
  `,
}}
      >
      <div className="max-w-3xl ml-20 flex flex-col">
          <h1 className="uppercase text-xl tracking-wide font-bold text-[#FFD43B] mb-4">
            EV Logistics • Technology • Sustainability
          </h1>
          <h1 className="font-extrabold text-7xl text-white leading-[1.1]">
            Your Trusted <br /> Partner in
            <span className="text-[#FFD43B]">
              {" "}
              Transport <br /> & Logistics
            </span>
          </h1>
          <p className="text-gray-200 text-2xl leading-relaxed mt-6 max-w-2xl">
            Smart delivery solutions powered by electric vehicles,
            <br />
            logistics technology, and sustainability <br />
            reporting for forward-thinking businesses.
          </p>

          <div className="mt-10 flex gap-6">
            <a href="#quote">
                <button
              className="  bg-yellow-400 font-bold cursor-pointer text-indigo px-8  py-4 rounded-2xl
          shadow-lg shadow-yellow-400/50 mr-10 hover:shadow-yellow-100 transition-all duration-100"
            >
              Get Quote
            </button>
            </a>
            
            <a href="#services">
              <button
                id="#services"
                className="px-10 py-4 font-bold cursor-pointer rounded-2xl text-indigo bg-white"
              >
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
