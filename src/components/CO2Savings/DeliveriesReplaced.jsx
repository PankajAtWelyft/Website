import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { Truck, TrendingUp, Fuel } from "lucide-react";
import { createCO2SavingsView, DEFAULT_CO2_SAVINGS_VIEW } from "./data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

export default function DeliveriesReplaced({ data: dashboardData = DEFAULT_CO2_SAVINGS_VIEW }) {
  const view = dashboardData?.deliveriesReplaced ? dashboardData : createCO2SavingsView();
  const palette = view.palette;
  const deliveriesReplaced = view.deliveriesReplaced;
  const apiResponse = view.apiResponse;

  const data = {
    labels: deliveriesReplaced.monthly.map((d) => d.month),
    datasets: [
      {
        label: "Deliveries Replaced",
        data: deliveriesReplaced.monthly.map((d) => d.replaced),
        backgroundColor: palette.co2Emission,
        borderRadius: 4,
        barPercentage: 0.8,
        categoryPercentage: 0.75,
        datalabels: { display: false },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.parsed.y.toLocaleString()} deliveries`,
        },
      },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: palette.text, font: { size: 10 } } },
      y: {
        beginAtZero: true,
        ticks: { color: palette.co2Emission, font: { size: 10 } },
        grid: { color: "#E5E7EB" },
      },
    },
  };

  const stats = [
    {
      icon: Truck,
      label: "Total Diesel Deliveries Replaced",
      value: deliveriesReplaced.totalReplaced.toLocaleString(),
      sub: "in 2024",
    },
    {
      icon: TrendingUp,
      label: "Peak Month",
      value: deliveriesReplaced.peakMonth.month,
      sub: `${deliveriesReplaced.peakMonth.evDeliveries.toLocaleString()} deliveries`,
    },
    {
      icon: Fuel,
      label: "Avg Fuel Saved / Delivery",
      value: `${deliveriesReplaced.avgFuelPerDelivery} L`,
      sub: "diesel avoided",
    },
  ];

  return (
    <section className="w-full h-full rounded-2xl  bg-[#F6F5F0] p-4 shadow-sm sm:p-5 md:p-6 lg:p-8" style={{ borderColor: palette.co2Emission }}>
      <div className="text-center mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: palette.text }}>
          Deliveries Replaced — Diesel to EV
        </h2>
        <p className="italic mt-1 text-xs sm:text-sm" style={{ color: palette.text }}>
          Monthly count of diesel-van deliveries replaced by EVs in {apiResponse.year}
        </p>
      </div>

      <div className="relative mb-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="flex items-center h-15 sm:h-25 gap-3 border-2 rounded-2xl p-3 sm:p-4"
              style={{ borderColor: `${palette.co2Emission}` }}
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full  flex items-center justify-center shrink-0"
                style={{ background: `${palette.co2Emission}33` }}>
                <Icon className="w-5 h-5" style={{ color: palette.co2Emission }} strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="text-[9px] sm:text-xs leading-tight" style={{ color: palette.text }}>
                  {s.label}
                </div>
                <div className="text-[10px] sm:text-lg font-bold leading-tight" style={{ color: palette.text }}>
                  {s.value}
                </div>
                <div className="text-[9px] sm:text-xs leading-tight" style={{ color: palette.text }}>{s.sub}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mt-6 h-45.5 sm:mt-8 sm:h-75 md:h-38 lg:mt-6 lg:h-48 xl:h-63.5">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}
