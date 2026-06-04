import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import { pieData, palette } from "./data";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function CO2PieChart() {
  const colors = palette.pie;
  const total = pieData.reduce((s, d) => s + d.value, 0);

  const data = {
    labels: pieData.map((d) => d.category),
    datasets: [
      {
        data: pieData.map((d) => d.value),
        backgroundColor: colors,
        borderColor: "#ffffff",
        borderWidth: 2,
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
          label: (ctx) => `${ctx.label}: ${ctx.parsed} Ton`,
        },
      },
      datalabels: {
        color: "#fff",
        font: { weight: "bold", size: 12 },
        formatter: (v) => `${((v / total) * 100).toFixed(1)}%`,
      },
    },
  };

  return (
    <div className="border-2 rounded-xl bg-white p-4 sm:p-5 w-full" style={{ borderColor: palette.evDeliveries }}>
      <div className="text-center mb-3 mt-10 lg:mt-0 ">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold lg:pt-2" style={{ color: palette.text }}>CO₂ Reduction Ratio</h3>
        <p className="text-xs" style={{ color: palette.text }}>Saved vs Remaining Emission (Tons)</p>
      </div>
      <div className="relative h-[220px] sm:h-[260px] mt-23 lg:mt-9">
        <Pie data={data} options={options} />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-15 lg:mt-9 text-xs sm:text-sm">
        {pieData.map((d, i) => (
          <div key={d.category} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: colors[i] }}
            />
            <span style={{ color: palette.text }}>
              {d.category} — <span className="font-semibold">{d.value} Ton</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
