import React from "react";

const SustainabilityCard = ({ icon, title, description }) => {
  return (
<<<<<<< HEAD
    <div
      className="
      group
      w-full
      sm:w-[340px]
      min-h-[320px]
      px-5
      py-8
      bg-yellow-400
      text-left
      mx-auto
      rounded-2xl
      shadow-md
      hover:bg-[#1a3f7f]
      hover:-translate-y-3
      transition-all
      duration-300
      flex
      flex-col
    "
    >

      <div
        className="
        bg-yellow-100
        w-14 h-14
        sm:w-16 sm:h-16
        rounded-xl
        flex
        items-center
        justify-center
        text-2xl sm:text-3xl
        group-hover:bg-indigo-900
      "
      >
        {icon}
      </div>

      <h1
        className="
        text-black
        text-2xl sm:text-3xl
        group-hover:text-yellow-400
        font-semibold
        mt-6
        leading-snug
      "
      >
        {title}
      </h1>

      <p
        className="
        text-black
        text-base sm:text-lg
        group-hover:text-yellow-400
        leading-relaxed
        mt-4
        font-medium
        flex-1
      "
      >
=======
    <div className="group mx-auto w-full max-w-sm rounded-2xl bg-yellow-400 px-4 py-7 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#1a3f7f] hover:text-indigo-900">
      <div className="bg-yellow-100 w-16 h-16 rounded-xl flex group-hover:bg-indigo-900 items-center  justify-center text-3xl">
        {icon}
      </div>
      <h1 className="mt-8 text-2xl font-semibold text-black group-hover:text-yellow-400 lg:text-3xl">
        {title}
      </h1>
      <p className="mt-4 text-base font-medium leading-relaxed text-black group-hover:text-yellow-400 sm:text-lg">
>>>>>>> e781849d29176788474b6486f87230f39958e358
        {description}
      </p>

    </div>
  );
};

export default SustainabilityCard;