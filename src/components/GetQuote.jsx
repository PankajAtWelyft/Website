import React, { useState } from 'react'

const GetQuote = () => {
    const[vehicle, setVehicle] = useState("Car");
    const[distance, setDistance] =useState(5);
    const[weight, setWeight] = useState(10);
    const[stops, setStops] = useState(1);

    const baseFare = 15;
    const distanceFare = distance*1.2;

    const total = baseFare+ distanceFare + stops;

  return (
    <section id='quote' className='bg-[#F5F3EE] px-5 py-16 sm:px-8 md:py-24 lg:py-30'>
        <div className='mx-auto max-w-4xl rounded-2xl bg-white p-5 shadow-xl sm:p-8'>
            <h1 className='text-3xl font-bold text-[#0A1F44] sm:text-4xl'>
                Calculate Delivery Quote
            </h1>
            <p className='mt-4 text-base text-gray-500 sm:text-xl'>
                Get an instant estimate for your delivery needs
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-14'>
                <div>
                    <label className='text-lg font-semibold'>
                      Vehicle Type
                    </label>
                    <select  value={vehicle}
                    onChange={(e)=>setVehicle(e.target.value)}
                    className='w-full mt-3 border border-gray-300 rounded-xl p-3 text-base'>
                        <option>Car</option>
                        <option>Van</option>
                        <option>Bike</option>
                    </select>
                </div>
                <div>
                    <label className='text-lg font-semibold'>
                        Weight (kg)
                    </label>
                    <input type="number" 
                    value={weight}
                    onChange={(e)=>setWeight(e.target.value)}
                    className='w-full mt-4 border border-gray-300 rounded-xl p-3 text-sm'/>
                </div>
                <div>

            <label className="text-lg font-semibold">
              Distance (km)
            </label>
              <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full mt-4 border border-gray-300 rounded-xl p-5 text-xl"
            />
                </div>
                <div>
                    <label className="text-lg font-semibold">
              Additional Stops
            </label>
                        <input
              type="number"
              value={stops}
              onChange={(e) => setStops(Number(e.target.value))}
              className="w-full mt-4 border border-gray-300 rounded-xl p-5 text-xl"
            />
                </div>
            </div>
            <div className='mt-8 flex flex-col gap-8 rounded-2xl bg-gradient-to-r from-black to-[#0A1F44] p-5 sm:p-6 md:flex-row md:items-start md:justify-between'>
                <div>
                    <h2 className='text-2xl font-bold text-white'>
                        Estimated Quote</h2>

                        <div className='mt-8 flex flex-col gap-6 sm:flex-row sm:gap-12 lg:gap-20'>
                                   <div>

                <p className="text-gray-400 text-sm">
                  Base Fare
                </p>

                <h3 className="text-white text-2xl font-semibold">
                  $15.00
                </h3>
              </div>
              <div>
                 <p className="text-gray-400 text-xl">
                  Distance
                </p>

                <h3 className="text-white text-3xl font-semibold">
                  ${distanceFare.toFixed(2)}
                </h3>
              </div>
            </div>
                </div>
                <h1 className='text-4xl font-bold text-yellow-400 md:text-right'>
                    ${total.toFixed(2)}
                </h1>
            </div>
            <button
          className="w-full mt-10 bg-black text-yellow-400 text-lg py-3 rounded-2xl font-semibold hover:bg-[#0A1F44] transition-all duration-300"
        >
          Request Detailed Quote via Email
        </button>
        </div>
      
    </section>
  )
}

export default GetQuote
