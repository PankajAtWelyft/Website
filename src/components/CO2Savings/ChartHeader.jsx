import { palette } from "./data";

export default function ChartHeader() {
  return (
    <div className="text-center mb-6 mt-2">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A1F44]" style={{ color: palette.text }}>
        CO<sub>2</sub> Savings Over Time
      </h1>
      <p className="italic mt-2 text-lg sm:text-xl lg:text-2xl" style={{ color: palette.text }}>
        Impact of EV Utilisation on Transportation Emissions (Monthly · 2024)
      </p>
      
    </div>
  );
}
