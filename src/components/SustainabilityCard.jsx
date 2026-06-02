import React from "react";

const SustainabilityCard = ({ icon, title, description }) => {
  return (
    <div className="group mx-auto w-full max-w-sm rounded-2xl bg-yellow-400 px-4 py-7 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#1a3f7f] hover:text-indigo-900">
      <div className="bg-yellow-100 w-16 h-16 rounded-xl flex group-hover:bg-indigo-900 items-center  justify-center text-3xl">
        {icon}
      </div>
      <h1 className="mt-8 text-2xl font-semibold text-black group-hover:text-yellow-400 lg:text-3xl">
        {title}
      </h1>
      <p className="mt-4 text-base font-medium leading-relaxed text-black group-hover:text-yellow-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default SustainabilityCard;
