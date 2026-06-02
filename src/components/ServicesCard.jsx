import React from "react";

const ServicesCard = ({ image,title, description, buttonTxt,}) => {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      flex flex-col
      hover:shadow-2xl
      shadow-md
      hover:-translate-y-3
      transition-all duration-300
      w-full
      max-w-[400px]
      mx-auto
    "
    >
      <img
        src={image}
        className=" w-full h-52 sm:h-56 object-cover
      "
      alt={title}
      />
      
      <div
        className=" p-5 sm:p-6 text-left pb-8 flex flex-col flex-1
      "
      >
        <h2
          className=" text-2xl sm:text-3xl font-semibold text-[#0A1F44] leading-snug"
        >
        {title}
        </h2>
        <p
          className=" text-gray-600 mt-4 text-base sm:text-lg leading-relaxed"
        >
        {description}
        </p>
        <button
          className=" text-lg sm:text-xl text-left font-semibold text-[#0A1F44] mt-6 hover:text-yellow-500 transition-all duration-300"
        >
          {buttonTxt}
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;