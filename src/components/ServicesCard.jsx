import React from "react";


const ServicesCard = ({image, title, description,buttonTxt}) => {
  return (
      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <img src={image} className="h-52 w-full object-cover sm:h-56" alt="" />
        <div className="flex flex-1 flex-col p-5 pb-7 text-left sm:p-6 sm:pb-8">
          <h2 className="text-2xl font-semibold text-[#0A1F44] lg:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            {description}
          </p>
         <button className="text-xl  text-left font-semibold text-[#0A1F44] mt-auto hover:text-yellow-500 transition-all duration-300"
          >{buttonTxt}</button>           
        </div>
      </div>
  );
};

export default ServicesCard;
