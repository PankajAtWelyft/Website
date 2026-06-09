import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const GetQuote = () => {
  const [vehicle, setVehicle] = useState("Car");
  const [distance, setDistance] = useState(5);
  const [weight, setWeight] = useState(10);
  const [stops, setStops] = useState(1);

  const baseFare = 15;
  const distanceFare = distance * 1.2;

  const total = baseFare + distanceFare + stops;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailBox, setShowEmailBox] = useState(false);

  const sendquoteEmail = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    setLoading(true);

    const templateParams = {
      vehicle: vehicle,
      weight: weight,
      distance: distance,
      stops: stops,
      total: total.toFixed(2),
      email: email,
    };

    emailjs
      .send(
        "service_ppuk2g8",
        "template_x981viw",
        templateParams,
        "VlRVDtHgoNljzGKUN",
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);

        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Failed to send email");
      });
  };

  return (
    <section id="quote" className="bg-[#F5F3EE] px-4 py-10 sm:px-8 md:py-20">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-4 shadow-xl sm:p-6">
        <h1 className="text-2xl font-bold text-[#0A1F44] sm:text-4xl">
          Calculate Delivery Quote
        </h1>
        <p className="mt-4 text-base text-gray-500 sm:text-xl">
          Get an instant estimate for your delivery needs
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-8">
          <div>
            <label className="text-lg font-semibold">Vehicle Type</label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full mt-3 border border-gray-300 rounded-xl p-3 text-base"
            >
              <option>Car</option>
              <option>Van</option>
              <option>Bike</option>
            </select>
          </div>
          <div>
            <label className="text-lg font-semibold">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full mt-4 border border-gray-300 rounded-xl p-3 text-sm"
            />
          </div>
          <div>
            <label className="text-lg font-semibold">Distance (km)</label>
            <input
              type="number"
              value={distance === 0 ? "" : distance}
              onChange={(e) => {
                const value = e.target.value;

                if (value === "") {
                  setDistance(0);
                  return;
                }

                setDistance(parseInt(value.replace(/^0+/, "")) || 0);
              }}
              className="w-full mt-4 border border-gray-300 rounded-xl p-3 text-base"
            />
          </div>
          <div>
            <label className="text-lg font-semibold">Additional Stops</label>
            <input
              type="number"
              min="1"
              value={stops === 0 ? "" : stops}
              onChange={(e) => {
                const value = e.target.value;

                if (value === "") {
                  setStops(0);
                  return;
                }

                setStops(parseInt(value.replace(/^0+/, "")) || 0);
              }}
              className="w-full mt-4 border border-gray-300 rounded-xl p-3 text-base"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-gradient-to-r from-black to-[#0A1F44] p-4 sm:p-5 md:gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Estimated Quote</h2>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-12 lg:gap-20">
              <div>
                <p className="text-gray-400 text-xl">Base Fare</p>

                <h3 className="text-white text-3xl font-semibold">$15.00</h3>
              </div>
              <div>
                <p className="text-gray-400 text-xl">Distance</p>

                <h3 className="text-white text-3xl font-semibold">
                  ${distanceFare.toFixed(2)}
                </h3>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-yellow-400 md:text-right">
            ${total.toFixed(2)}
          </h1>
        </div>
        {!showEmailBox && (
          <button
            onClick={() => setShowEmailBox(true)}
            className="w-full mt-10 bg-black text-yellow-400 text-base py-3 rounded-2xl font-semibold hover:bg-[#0A1F44] transition-all duration-300"
          >
            Request Detailed Quote via Email
          </button>
        )}

        {showEmailBox && (
          <div className="mt-6 bg-[#F8F8F8] p-5 rounded-2xl">
            <label className="text-lg font-semibold block mb-3">
              Your Email
            </label>

            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none"
              />

              <button
                onClick={sendquoteEmail}
                disabled={loading}
                className="bg-black text-yellow-400 px-6 rounded-xl font-semibold hover:bg-[#0A1F44]"
              >
                {loading ? "Sending..." : success ? "Sent ✓" : "Send"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetQuote;
