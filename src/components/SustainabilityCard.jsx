import React from "react";

const SustainabilityCard = ({ icon, title, description }) => {
  return (
    <div
      className="group mx-auto flex h-full min-h-30 w-full max-w-125 flex-col rounded-3xl bg-[#F5F1E6] px-5 py-6 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-yellow-400 sm:min-h-45 sm:px-6 sm:py-7 md:min-h-50 "
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
        mt-3
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
