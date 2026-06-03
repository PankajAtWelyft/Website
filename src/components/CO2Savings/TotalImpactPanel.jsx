import { Cloud, TreePine, Fuel, Car } from "lucide-react";
import { totalImpact, apiResponse, palette } from "./data";

const iconMap = { co2: Cloud, tree: TreePine, fuel: Fuel, car: Car };

export default function TotalImpactPanel() {
  return (
    <aside className="border-2 rounded-xl bg-white p-4 sm:p-5 w-full" style={{ borderColor: palette.evDeliveries }}>
      <div className="text-center mb-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold lg:pt-2" style={{ color: palette.text }}>Total Impact</h3>
        <p className="text-sm" style={{ color: palette.text }}>(Year {apiResponse.year})</p>
      </div>
      <div className="divide-y divide-gray-200 lg:pt-7">
        {totalImpact.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={idx} className="flex items-center gap-4 py-3 sm:py-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0">
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
    </aside>
  );
}
