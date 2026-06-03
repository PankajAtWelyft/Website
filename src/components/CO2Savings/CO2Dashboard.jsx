import ChartHeader from "./ChartHeader";
import CO2Chart from "./CO2Chart";
import TotalImpactPanel from "./TotalImpactPanel";
import CO2PieChart from "./CO2PieChart";
import DeliveriesReplaced from "./DeliveriesReplaced";
import FooterNote from "./FooterNote";
import { palette } from "./data";

export default function CO2Dashboard() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
      <ChartHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="min-w-0 rounded-xl border-2 p-4 sm:p-5" style={{ borderColor: palette.evDeliveries }}>
          <CO2Chart />
        </div>
        <CO2PieChart />
        
        <DeliveriesReplaced />
        <TotalImpactPanel />
      </div>
      <FooterNote />
    </div>
  );
}
