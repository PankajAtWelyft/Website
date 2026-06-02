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

        <div className="mt-12 flex justify-center md:mt-20">
          <div className="max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:translate-y-2 sm:rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Blog"
              className="h-[220px] w-full object-cover sm:h-[300px]"
            />
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
