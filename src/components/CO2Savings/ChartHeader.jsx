export default function ChartHeader() {
  return (
    <div className="text-center mb-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4A4A4A] leading-snug">
        CO<sub>2</sub> Savings Over Time
      </h1>
      <p className="italic text-[#4A4A4A] mt-2 text-sm sm:text-base">
        Impact of EV Utilisation on Transportation Emissions
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-5 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-3 bg-[#4CAF50]" />
          <span className="text-[#4A4A4A]">
            CO<sub>2</sub> Saved (kg)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center">
            <span className="w-6 h-0.5 bg-[#EAB308]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#EAB308] -mx-1" />
            <span className="w-6 h-0.5 bg-[#EAB308]" />
          </span>
          <span className="text-[#4A4A4A]">EV Deliveries</span>
        </div>
      </div>
    </div>
  );
}
