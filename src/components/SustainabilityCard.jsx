import React from "react";

const SustainabilityCard = ({ icon, title, description }) => {
  return (
    <div
      className="group w-full max-w-[300px] h-[320px] px-6 py-8 bg-[#F5F1E6] text-left rounded-3xl shadow-md
       hover:bg-yellow-400 hover:-translate-y-3 transition-all duration-300 flex flex-col mx-auto"
    >
      <div
        className="
        bg-white
        w-14 h-14
        sm:w-16 sm:h-16
        rounded-xl
        flex
        items-center
        justify-center
        text-2xl sm:text-3xl
        group-hover:bg-yellow-100
      "
      >
        {icon}
      </div>

      <h1
        className="
        text-black
        text-xl sm:text-2xl
        group-hover:text-[#0A1F44]
        font-semibold
        mt-5
        leading-relaxed
      "
      >
        {title}
      </h1>

      <p
        className="
        text-black
        text-base sm:text-lg
        group-hover:text-[#0A1F44]
        leading-relaxed
        mt-4
        font-medium
        flex-1
      "
      >
        {description}
      </p>
    </div>
  );
};

export default SustainabilityCard;
