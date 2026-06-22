import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";


const vehicleRates = {
  Bike: { base: 8, perKm: 0.8, perStop: 0.5 },
  Car: { base: 15, perKm: 1.2, perStop: 1.0 },
  Van: { base: 25, perKm: 1.8, perStop: 1.5 },
};

const weightSurcharge = (kg) => {
  if (kg <= 5) return 0;
  if (kg <= 15) return 2;
  if (kg <= 30) return 5;
  return 10;
};

export default function GetQuote() {
  const [vehicle, setVehicle] = useState("Car");
  const [distance, setDistance] = useState(5);
  const [weight, setWeight] = useState();
  const [stops, setStops] = useState(1);
  const [email, setEmail] = useState("");
  const [showEmailBox, setShowEmailBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const rates = vehicleRates[vehicle];
  const baseFare = rates.base;
  const distanceFare = distance * rates.perKm;
  const stopsFare = (stops - 1) * rates.perStop;
  const weightFare = weightSurcharge(weight);
  const total = baseFare + distanceFare + stopsFare + weightFare;

  const breakdown = [
    { label: "Base Fare", val: baseFare },
    { label: `Distance (${distance}km × $${rates.perKm})`, val: distanceFare },
    { label: `Additional Stops (${Math.max(0, stops - 1)})`, val: stopsFare },
    { label: "Weight Surcharge", val: weightFare },
  ];

  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

  const sendQuoteEmail = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    setLoading(true);
    emailjs
      .send(
        "service_ppuk2g8",
        "template_x981viw",
        {
          vehicle,
          weight,
          distance,
          stops,
          pickupTime,
          dropoffTime,
          total: total.toFixed(2),
          email,
        },
        "VlRVDtHgoNljzGKUN",
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="bg-[#F6F5F0] relative z-10 flex flex-col mx-auto  max-w-8xl px-4 sm:px-5 lg:px-10 pt-16">
      <Navbar />

      {/* Header */}
      <section  id="quote" className="pt-10 pb-0 px-8 scroll-mt-24">
        <div className="flex flex-col items-center mx-auto">
          <h2
            className="serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  leading-tight"
            style={{ color: "var(--navy)" }}
          >
            Calculate Delivery Quote
          </h2>
           <p className="text-sm mt-2" style={{ color: "var(--slate)" }}>
            Get an instant estimate for your delivery needs
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="pt-10">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — Form */}
          <div className="bg-white rounded-3xl p-4 pl-6 pb-10 border border-black/8 shadow-sm">
            <h2
              className="font-bold text-lg my-4"
              style={{ color: "var(--navy)" }}
            >
              Delivery Details
            </h2>

            <div className="flex flex-col gap-6">
              {/* Vehicle Type */}
              <div>
                <label
                  className="text-sm font-bold lg:my-2 block"
                  style={{ color: "var(--navy)" }}
                >
                  Vehicle Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.keys(vehicleRates).map((v) => (
                    <button
                      key={v}
                      onClick={() => setVehicle(v)}
                      className="py-3 rounded-xl text-sm font-semibold border-2 transition-all"
                      style={{
                        background:
                          vehicle === v ? "var(--navy)" : "transparent",
                        color: vehicle === v ? "var(--yellow)" : "var(--slate)",
                        borderColor:
                          vehicle === v ? "var(--navy)" : "rgba(10,31,68,0.15)",
                      }}
                    >
                      {v === "Bike" ? "🏍️" : v === "Car" ? "🚗" : "🚐"} {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight */}
              <div>
                <label
                  className="text-sm font-bold my-2 block"
                  style={{ color: "var(--navy)" }}
                >
                  Parcel Weight (kg)
                </label>
                <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                  {[5, 15, 30, 50].map((w) => (
                    <button
                      key={w}
                      onClick={() => setWeight(w)}
                      className="py-2.5 w-12 lg:w-18 rounded-xl text-sm font-semibold border-2 transition-all"
                      style={{
                        background:
                          weight === w ? "var(--yellow)" : "transparent",
                        color: weight === w ? "var(--navy)" : "var(--slate)",
                        borderColor:
                          weight === w
                            ? "var(--yellow)"
                            : "rgba(10,31,68,0.15)",
                      }}
                    >
                      {w}kg
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value) || 0)}
                  placeholder="custom weight"
                  className=" w-full sm:w-1/2 py-3 px-4 rounded-xl text-xs lg:text-sm border-2 outline-none focus:border-[#FFD600] transition-all"
                  style={{
                    borderColor: "rgba(10,31,68,0.15)",
                    color: "var(--navy)",
                  }}
                />
                </div>
              </div>

              {/* Distance and Additional Stops */}
              <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <label
                  className="text-sm font-bold lg:my-2 block"
                  style={{ color: "var(--navy)" }}
                >
                  Distance (km)
                </label>
                <div className="flex items-center mt-1 ">
                  <input
                    type="number"
                    min="1"
                    max="999"
                    value={distance === 0 ? "" : distance}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "") {
                        setDistance(0);
                        return;
                      }
                      setDistance(parseInt(val.replace(/^0+/, "")) || 0);
                    }}
                    placeholder="Enter distance"
                    className="w-fit px-4 py-3 rounded-xl border-2 text-sm outline-none focus:border-[#FFD600] transition-all"
                    style={{
                      borderColor: "rgba(10,31,68,0.15)",
                      color: "var(--navy)",
                    }}
                  />
                  <span
                    className="shrink-0 px-4 py-3 rounded-xl font-bold text-sm"
                    style={{
                      background: "var(--navy)",
                      color: "var(--yellow)",
                    }}
                  >
                    km
                  </span>
                </div>
              </div>

              
              <div className="w-1/2">
                <label
                  className="text-sm font-bold mb-2 lg:my-2 block"
                  style={{ color: "var(--navy)" }}
                >
                  Additional Stops
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setStops(Math.max(1, stops - 1))}
                    className="w-10 h-10 rounded-xl border-2 text-lg font-bold flex items-center justify-center transition-all hover:border-[#FFD600]"
                    style={{
                      borderColor: "rgba(10,31,68,0.15)",
                      color: "var(--navy)",
                    }}
                  >
                    −
                  </button>
                  <span
                    className="fraunces text-3xl font-medium w-8 text-center"
                    style={{ color: "var(--navy)" }}
                  >
                    {stops}
                  </span>
                  <button
                    onClick={() => setStops(stops + 1)}
                    className="w-10 h-10 rounded-xl border-2 text-lg font-bold flex items-center justify-center transition-all hover:border-[#FFD600]"
                    style={{
                      borderColor: "rgba(10,31,68,0.15)",
                      color: "var(--navy)",
                    }}
                  >
                    +
                  </button>
                  <span className="text-sm  block w-full md:w-auto" style={{ color: "var(--slate)" }}>
                    First stop free
                  </span>
                </div>
              </div>
            </div>

              {/* Pickup & Dropoff Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-sm font-bold px-1 lg:my-2 block"
                    style={{ color: "var(--navy)" }}
                  >
                    Pick Up Time
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-4 py-3 mt-2 rounded-xl border text-sm outline-none focus:border-[#FFD600] transition-all"
                    style={{
                      borderColor: "rgba(10,31,68,0.15)",
                      color: "var(--navy)",
                    }}
                  >
                    <option value="">Select time</option>
                    {[
                      "09:00 AM",
                      "10:00 AM",
                      "11:00 AM",
                      "12:00 PM",
                      "01:00 PM",
                      "02:00 PM",
                      "03:00 PM",
                      "04:00 PM",
                      "05:00 PM",
                      "06:00 PM",
                    ].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="text-sm px-2 font-bold lg:my-2 block"
                    style={{ color: "var(--navy)" }}
                  >
                    Drop Off Time
                  </label>
                  <select
                    value={dropoffTime}
                    onChange={(e) => setDropoffTime(e.target.value)}
                    className="w-full px-4 py-3 mt-2 rounded-xl border text-sm outline-none focus:border-[#FFD600] transition-all"
                    style={{
                      borderColor: "rgba(10,31,68,0.15)",
                      color: "var(--navy)",
                    }}
                  >
                    <option value="">Select time</option>
                    {[
                      "09:00 AM",
                      "10:00 AM",
                      "11:00 AM",
                      "12:00 PM",
                      "01:00 PM",
                      "02:00 PM",
                      "03:00 PM",
                      "04:00 PM",
                      "05:00 PM",
                      "06:00 PM",
                    ].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Estimated Bill */}
          <div className="flex flex-col justify-between  gap-5 sticky top-24 bg-[#F6F5F0] ">
            {/* Bill Card */}
            <div className="bg-white rounded-3xl p-4  border border-black/8 shadow-sm">
              {/* Top */}
              <div
                className="px-8 py-5 flex justify-between items-center bg-white"
                
              >
                <h2
                  className="font-bold text-lg"
                  style={{ color: "var(--cream)" }}
                >
                  Estimated Bill
                </h2>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,214,0,0.2)",
                    color: "var(--yellow)",
                  }}
                >
                  Instant Quote
                </span>
              </div>

              {/* Breakdown */}
              <div className="bg-white grid grid-cols-2 gap-6 px-8 py-0">
                {breakdown.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-4 ${i !== breakdown.length - 1 ? "border-b border-black/6" : ""}`}
                  >
                    <span
                      className="font-bold text-sm"
                      style={{ color: "var(--slate)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-base font-bold"
                      style={{
                        color: item.val > 0 ? "var(--navy)" : "#CBD5E0",
                      }}
                    >
                      {item.val > 0 ? `$${item.val.toFixed(2)}` : "—"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div
                className="px-8 py-8 flex justify-between items-center bg-white"
                
              >
                <div>
                  <p
                    className="text-base font-bold uppercase tracking-widest mb-1"
                    style={{ color: "var(--navy)" }}
                  >
                    Total Estimate
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(250,247,242,0.5)" }}
                  >
                    {vehicle} · {distance}km · {weight}kg
                  </p>
                </div>
                <span
                  className="text-2xl lg:text-3xl font-medium"
                  style={{ color: "var(--yellow)" }}
                >
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Vehicle info */}
            <div className="bg-white rounded-2xl p-3 border border-black/8">
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--slate)" }}
              >
                Selected Vehicle
              </p>
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  {vehicle === "Bike" ? "🏍️" : vehicle === "Car" ? "🚗" : "🚐"}
                </span>
                <div className="w-full flex justify-between items-center">
                  <div>
                  <p
                    className="text-xl font-bold "
                    style={{ color: "var(--navy)" }}
                  >
                    {vehicle}
                  </p>
                  </div>
                  <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--slate)" }}
                  >
                    Base{" "}
                    <strong style={{ color: "var(--navy)" }}>
                      ${rates.base}
                    </strong>{" "}
                    ·
                    <strong style={{ color: "var(--navy)" }}>
                      {" "}
                      ${rates.perKm}
                    </strong>
                    /km ·
                    <strong style={{ color: "var(--navy)" }}>
                      {" "}
                      ${rates.perStop}
                    </strong>
                    /extra stop
                  </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email CTA */}
            {!showEmailBox ? (
              <button
                onClick={() => setShowEmailBox(true)}
                className="w-full py-4 rounded-2xl text-base font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg "
                style={{
                  background: "white",
                  color: "var(--navy)",
                 
                }}
              >
                📧 Request Detailed Quote via Email →
              </button>
            ) : (
              <div className="bg-white rounded-2xl p-6 border border-black/8">
                <label
                  className="text-sm font-bold block mb-3"
                  style={{ color: "var(--navy)" }}
                >
                  Your Email Address
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#FFD600] transition-all"
                    style={{
                      borderColor: "rgba(10,31,68,0.15)",
                      color: "var(--navy)",
                    }}
                  />
                  <button
                    onClick={sendQuoteEmail}
                    disabled={loading}
                    className="px-6 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 disabled:opacity-60"
                    style={{
                      background: "var(--navy)",
                      color: "var(--yellow)",
                    }}
                  >
                    {loading ? "Sending..." : success ? "Sent ✓" : "Send"}
                  </button>
                </div>
                {success && (
                  <p
                    className="text-xs mt-3 font-semibold"
                    style={{ color: "#16a34a" }}
                  >
                    ✅ Quote sent to your email successfully!
                  </p>
                )}
              </div>
            )}

            {/* Disclaimer */}
            <p
              className="text-xs text-center px-4"
              style={{ color: "var(--slate)" }}
            >
              * This is an estimated quote. Final price may vary based on actual
              delivery conditions. GST not included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
