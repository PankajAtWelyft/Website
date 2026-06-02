import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="bg-[#F5F3EE] py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="inline-block bg-[#0A1F44] text-yellow-400 px-5 py-2 rounded-lg uppercase tracking-widest text-sm font-semibold ">
            Latest Blog
          </p>
          <h2 className="text-4xl md:text-3xl sm:text-5xl lg:text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0A1F44] mt-6">
            News & Insights
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, news, and updates from
            Welyft.
          </p>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:translate-y-2 transition-all duration-300 max-w-4xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Blog"
              className="w-full h-[300px] object-cover"
            />
            <div className="p-8">
              <span className="bg-[#0A1F44] text-yellow-400 px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider">
                News
              </span>
              <h3 className="text-3xl font-bold text-[#0A1F44] mt-6 leading-tight">
                CB Herald: Welyft Accelerates Green Logistics in Singapore
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-5">
                Discover how Welyft is transforming sustainable delivery
                operations with an all-electric fleet and greener logistics
                solutions across Singapore.
              </p>
              <div className="flex items-center justify-between mt-8">
                <p className="text-gray-500"
                >2026 • Sustainability </p>
                <a href="https://cbherald.com/welyft-accelerates-green-logistics-in-singapore-with-all-electric-fleet/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-[#0A1F44] font-semibold
                px-8 py-3 rounded-2xl hover:translate-y-1 transition-all duration-300 shadow-lg shadow-yellow-300/40"
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
