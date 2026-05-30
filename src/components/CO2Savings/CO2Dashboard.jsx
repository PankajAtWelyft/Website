import ChartHeader from "./ChartHeader";
import CO2Chart from "./CO2Chart";
import TotalImpactPanel from "./TotalImpactPanel";
import FooterNote from "./FooterNote";

export default function CO2Dashboard() {
  return (
    <div className="w-full bg-white shadow-sm mt-5 border border-gray-200 p-4 sm:p-6 md:p-8">
      <ChartHeader />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 min-w-0 overflow-x-auto">
          <CO2Chart />
        </div>
        <TotalImpactPanel />
      </div>
      <FooterNote />
    </div>
  );
}
