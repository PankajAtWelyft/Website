import React from 'react'

const SustainabilityCard = ({icon ,title, description}) => {
  return (
    <div className='group w-80 px-4 py-7 bg-[#1a3f7f]  text-left mx-auto rounded-2xl shadow-md hover:bg-yellow-300  hover:text-indigo-900 hover:-translate-y-3 transition-all duration-300'>
      <div className='bg-yellow-100 w-16 h-16 rounded-xl flex group-hover:bg-indigo-900 items-center  justify-center text-3xl'>{icon}</div>
       <h1 className='text-white text-3xl group-hover:text-indigo-900 font-semibold mt-8'>{title}</h1>
       <p className='text-gray-300 text-lg group-hover:text-indigo-900 leading-relaxed mt-4  font-medium'>{description}</p>
    </div>
  )
}

export default SustainabilityCard
