import React from 'react'
import SustainabilityCard from './SustainabilityCard'
import serv from '../assets/serv.avif'
const Sustainability = () => {
  return (
    <>
    <div id='sustainability' className='bg-[#bdd5d0] py-28'>
        <div className='px-10 text-center max-w-7xl mx-auto'>
            <h1 className='bg-yellow-400 text-xl rounded-xl uppercase inline-block text-[#0A1F44] px-5 py-2  border font-bold'
            >Why Welyft</h1>

            <h2 className='text-8xl font-bold text-black mt-8'
            >Sustainable Logistics</h2>
            <h3 className='text-6xl font-bold text-yellow-400 mt-5 italic'
            >Smarter Future.</h3>

            <p className='text-xl font-semibold text-gray-800 leading-relaxed text-center max-w-4xl mx-auto mt-9'
            >Helping companies reduce transport emissions and move towards cleaner, greener business operations — one delivery at a time.</p>
        </div>
        <div  className='grid grid-cols-4 gap-7 mt-20'>
      <SustainabilityCard
      icon="🚚"
      title="Lower Emissions"
      description="EV fleet solutions for greener, more sustainable transport."
      />
       <SustainabilityCard
      icon="💡"
      title="Smart Innovation"
      description="Technology that powers delivery visibility and dispatch contro"
      />
       <SustainabilityCard
      icon="📈"
      title="CO₂ Reporting"
      description="Estimated carbon savings tracked for every single delivery."
      />
       <SustainabilityCard
      icon="🌏"
      title="Better Planet"
      description="Logistics designed with long-term sustainability at its core."
      />
    </div>
    </div>
    <div className='bg-[#F5F3EE] py-30'>
        <div className="max-w-7xl mx-auto flex items-center gap-32 px-10">
                <div  className="w-1/2">
                  <p className="inline-block text-sm font-semibold uppercase tracking-widest bg-[#0A1F44] text-yellow-400 px-5 py-2 rounded-md mb-8"
                  >Why Welyft</p>
                  <h2 className="text-5xl text-[#0A1F44] font-medium">
                    Dependable, <span className='italic'>on time</span>
                  </h2>
                  <hr className="w-30 border-4 rounded-xl border-yellow-400 my-8" />
                  <h3 className='text-[#0A1F44] text-4xl mt-8 italic font-medium '
                  >For High-Value Businesses</h3>
                  <p className="text-xl  text-gray-600 leading-relaxed mt-7">
                   When your people depend on it, so do we. From onboarding day one to long-term planning, Welyft delivers without a beat dropped — at the scale and speed your business demands.
                  </p>
                  <div className='flex gap-6 mt-10'>
                     <button className="px-6 py-3 font-semibold bg-amber-300 hover:scale-105 rounded-3xl text-xl hover:bg-indigo-900 hover:text-yellow-400  transition"
                  >Get Demo → </button>
                 <button className="px-8 py-3  font-semibold bg-[#fffefc] rounded-3xl hover:scale-105 text-xl hover:bg-indigo-900 hover:text-yellow-400  transition"
                 >Our Story</button>
                  </div>
               
                </div>
                <div className="w-1/2">
                   <img src={serv} className=" w-full rounded-3xl h-150 object-cover hover:scale-105 transition-all duration-500" alt="" />
                </div>          
              </div>
    </div>
    
    </>
  )
}

export default Sustainability
