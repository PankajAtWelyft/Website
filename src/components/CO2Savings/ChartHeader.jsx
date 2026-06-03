import { palette } from "./data";

export default function ChartHeader() {
  return (
    <div className="text-center mb-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug" style={{ color: palette.text }}>
        CO<sub>2</sub> Savings Over Time
      </h1>
      <p className="italic mt-2 text-sm sm:text-base" style={{ color: palette.text }}>
        Impact of EV Utilisation on Transportation Emissions (Monthly · 2024)
      </p>
      
    </div>
  );
}
