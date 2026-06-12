import { palette } from "./data";

export default function ChartHeader() {
  return (
    <div className="text-center mb-6 mt-2">
      <h1 className="serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#0A1F44]" style={{ color: palette.text }}>
       Sustainability Performance
      </h1>
      
      <p className=" mt-2 text-md sm:text-lg lg:text-xl" style={{ color: palette.text }}>
        Impact of EV Utilisation on Transportation Emissions (Monthly)
      </p>
      
    </div>
  );
}
