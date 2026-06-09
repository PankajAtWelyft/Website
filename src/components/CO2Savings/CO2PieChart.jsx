import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import { createCO2SavingsView, DEFAULT_CO2_SAVINGS_VIEW } from "./data";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function CO2PieChart({ data: dashboardData = DEFAULT_CO2_SAVINGS_VIEW }) {
  const view = dashboardData?.pieData ? dashboardData : createCO2SavingsView();
  const colors = view.palette.pie;
  const pieData = view.pieData;
  const total = pieData.reduce((sum, item) => sum + item.value, 0);

  const data = {
    labels: pieData.map((item) => item.category),
    datasets: [
      {
        data: pieData.map((item) => item.value),
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
        formatter: (value) => `${((value / total) * 100).toFixed(1)}%`,
      },
    },
  };

  return (
    <div
      className="w-full rounded-xl border-2 bg-white p-4 sm:p-5"
      style={{ borderColor: view.palette.evDeliveries }}
    >
      <div className="mb-3 mt-10 text-center lg:mt-0">
        <h3 className="text-lg font-bold sm:text-xl md:text-2xl lg:pt-2" style={{ color: view.palette.text }}>
          CO2 Reduction Ratio
        </h3>
        <p className="text-xs" style={{ color: view.palette.text }}>
          Saved vs CO2 Emission (Tons)
        </p>
      </div>

      <div className="relative mt-14 h-[260px] sm:mt-16 sm:h-[320px] lg:mt-6 lg:h-[390px] xl:h-[440px]">
        <Pie data={data} options={options} />
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs sm:text-sm lg:mt-6">
        {pieData.map((item, index) => (
          <div key={item.category} className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: colors[index] }}
            />
            <span style={{ color: view.palette.text }}>
              {item.category} - <span className="font-semibold">{item.value} Ton</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
