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
        backgroundColor: palette.evDeliveries,
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
        ticks: { color: palette.evDeliveries, font: { size: 10 } },
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
    <section className="w-full bg-white rounded-2xl shadow-sm border-2 p-4 sm:p-6 md:p-8" style={{ borderColor: palette.evDeliveries }}>
      <div className="text-center mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: palette.text }}>
          Deliveries Replaced — Diesel to EV
        </h2>
        <p className="italic mt-1 text-xs sm:text-sm" style={{ color: palette.text }}>
          Monthly count of diesel-van deliveries replaced by EVs in {apiResponse.year}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 border rounded-xl p-3 sm:p-4"
              style={{ borderColor: `${palette.evDeliveries}66`, background: "#F1F8E9" }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" style={{ color: palette.evDeliveries }} strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs leading-tight" style={{ color: palette.text }}>
                  {s.label}
                </div>
                <div className="text-base sm:text-lg font-bold leading-tight" style={{ color: palette.text }}>
                  {s.value}
                </div>
                <div className="text-[11px] leading-tight" style={{ color: palette.text }}>{s.sub}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-[260px] sm:h-[320px]">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}
