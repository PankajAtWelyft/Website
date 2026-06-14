import React from "react";
import news from '../assets/news.png'
const Blog = () => {
  return (
    <section id="blog" className="bg-[#F5F3EE]  pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="inline-block text-sm sm:text-xl text-amber-300 bg-[#0A1F44] tracking-[0.03em] mt-4 px-4 sm:px-5 py-2 rounded-md font-bold uppercase
        ">
            Latest Blog
          </p>
          <h2 className="serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#0A1F44] mt-6">
            News & Insights
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-2xl mt-2 md:mt-6 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, news, and updates from welyft
          </p>
        </div>

        <div className="mt-6 flex justify-center md:mt-10">
          <div className="max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:translate-y-2 sm:rounded-3xl">
            <img
              src={news}
              alt="Blog"
              className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover object-center"/>

            <div className="p-5 sm:p-8">
              <span className="bg-[#0A1F44] text-yellow-400 px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider">
                News
              </span>
              <h3 className="mt-6 text-2xl font-bold leading-tight text-[#0A1F44] sm:text-3xl">
                CB Herald: Welyft Accelerates Green Logistics in Singapore
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-5">
                Discover how Welyft is transforming sustainable delivery
                operations with an all-electric fleet and greener logistics
                solutions across Singapore.
              </p>
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-gray-500"
                >2026 • Sustainability </p>
                <a href="https://cbherald.com/welyft-accelerates-green-logistics-in-singapore-with-all-electric-fleet/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-[#0A1F44] font-semibold
                rounded-xl px-6 py-3 text-center shadow-lg shadow-yellow-300/40 transition-all duration-300 hover:translate-y-1 sm:px-8"
                >
                Read Article →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
