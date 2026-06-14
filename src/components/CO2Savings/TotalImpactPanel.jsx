import { Cloud, TreePine, Fuel, Car } from "lucide-react";
import { createCO2SavingsView, DEFAULT_CO2_SAVINGS_VIEW } from "./data";

const iconMap = { co2: Cloud, tree: TreePine, fuel: Fuel, car: Car };

export default function TotalImpactPanel({ data: dashboardData = DEFAULT_CO2_SAVINGS_VIEW }) {
  const view = dashboardData?.totalImpact ? dashboardData : createCO2SavingsView();
  const palette = view.palette;
  const totalImpact = view.totalImpact;
  const apiResponse = view.apiResponse;

  return (
    <div className="w-full h-full rounded-xl  bg-[#F6F5F0] p-4 sm:p-5 md:p-6" style={{ borderColor: palette.evDeliveries }}>
      <div className="mb-4 mt-4 text-center lg:mt-0">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold lg:pt-2" style={{ color: palette.text }}>Total Impact</h3>
        <p className="text-sm" style={{ color: palette.text }}>(Year {apiResponse.year})</p>
      </div>
      <div className="mt-6 divide-y divide-gray-200 sm:mt-8 lg:mt-0 lg:pt-7">
        {totalImpact.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={idx} className="flex items-center gap-4 py-3 sm:py-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full  flex items-center justify-center shrink-0"
              style={{ background: `${palette.evDeliveries}33` }}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: palette.evDeliveries }} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs leading-tight" style={{ color: palette.text }}>{item.label}</div>
                <div className="text-lg sm:text-xl font-bold leading-tight" style={{ color: palette.text }}>
                  {item.value}
                </div>
                <div className="text-xs leading-tight" style={{ color: palette.text }}>{item.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
