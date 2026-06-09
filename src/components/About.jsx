import React from "react";

import about from "../assets/section_page.avif";

const About = () => {
  return (
    <section id="about" className="bg-[#F5F3EE] pt-12 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-10">
        <div className="w-full max-w-5xl">
          <p className="inline-block text-sm sm:text-xl text-amber-300 bg-[#0A1F44] tracking-widest mt-4 px-4 sm:px-5 py-2 rounded-md font-bold uppercase
        ">
            About Welyft
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A1F44] mt-6">
            This is not just logistics,
            <span className="block">This is climate action in motion.</span>
          </h2>
          <hr className="w-full border-3 rounded-xl border-yellow-400 my-8" />
          <div className="mt-10 overflow-hidden rounded-2xl border border-yellow-400/10 bg-[#021B44] p-3 shadow-2xl sm:rounded-[32px] md:p-6">
            <iframe
              className="h-[180px] w-full rounded-xl sm:h-[340px] md:h-[500px] md:rounded-3xl lg:h-[650px]"
              src="https://www.youtube.com/embed/YwGZerRU0Dc"
              title="Welyft Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
