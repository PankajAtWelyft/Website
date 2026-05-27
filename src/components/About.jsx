import React from "react";

import about from "../assets/section_page.avif";

const About = () => {
  return (
    <section  id="about" className="bg-[#F5F3EE] py-30">
      <div className="max-w-7xl mx-auto flex items-center gap-32 px-10">
        <div  className="w-1/2">
          <p className="inline-block text-sm font-semibold uppercase tracking-widest bg-[#0A1F44] text-yellow-400 px-5 py-2 rounded-md mb-8">About Welyft</p>
          <h2 className="text-6xl font-semibold">
            Driven by Insight
            <br />
            Built for People
          </h2>
          <hr className="w-30 border-4 rounded-xl border-yellow-400 my-8" />
          <p className="text-xl text-gray-600 leading-relaxed mt-6">
            We design workplace solutions that elevate the everyday — combining
            smart tools, trusted advice, and human-centred service so your people,
            and your business, can thrive.
          </p>
           <div className="grid grid-cols-2 gap-12 mt-10">
            <div className="flex items-start gap-4">
                <div className="bg-yellow-300 w-16 h-10 rounded-xl flex items-center justify-center text-2xl">
                     ✓
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">Trusted Expertise</h3>
                    <p className="text-gray-600 mt-2">Two decades of helping teams build better workplaces.</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-yellow-300 w-16 h-10 rounded-xl flex items-center justify-center text-2xl">
                     ✓
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">Global Reach</h3>
                    <p className="text-gray-600 mt-2">Coverage in 40+ markets with local specialists in each.</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-yellow-300 w-16 h-10 rounded-xl flex items-center justify-center text-2xl">
                     ✓
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">Customised Solutions</h3>
                    <p className="text-gray-600 mt-2">Tailored plans for teams of every shape and size.</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-yellow-300 w-16 h-10 rounded-xl flex items-center justify-center text-2xl">
                     ✓
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">Modern Technology</h3>
                    <p className="text-gray-600 mt-2">A unified platform that ties every benefit together.</p>
                </div>
            </div>
        </div>
        <a href="#sustainability">
        <button className="px-7 py-3 mt-10 font-semibold bg-amber-300 rounded-3xl text-xl hover:bg-indigo-900 hover:text-yellow-400  transition"
        >Learn More → </button></a>
        </div>
        <div className="w-1/2">
           <img src={about} className=" w-full rounded-3xl h-full object-cover hover:scale-105 transition-all duration-500" alt="" />
        </div>          
      </div>
    </section>
  );
};

export default About;
