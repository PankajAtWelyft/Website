import React from "react";
const ServicesCard = ({ image, title, description, buttonTxt }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden flex hover:shadow-2xl flex-col shadow-md hover:-translate-y-3 transition-all duration-300">
      <img src={image} className="w-full h-56 object-cover" alt="" />{" "}
      <div className="p-6 text-left pb-8 flex flex-col flex-1">
        
        <h2 className="text-3xl font-semibold text-[#0A1F44]">
          
          {title}
        </h2>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          
          {description}
        </p>
        <button className="text-xl text-left font-semibold text-[#0A1F44] mt-auto hover:text-yellow-500 transition-all duration-300">
          {buttonTxt}
        </button>
      </div>
    </div>
  );
};
export default ServicesCard;
