import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineElement,
  LineController,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "react-chartjs-2";
import { chartData, palette } from "./data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineElement,
  LineController,
  PointElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function CO2Chart() {
  const labels = chartData.map((d) => d.month);

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "EV Deliveries",
        data: chartData.map((d) => d.ev),
        borderColor: palette.evDeliveries,
        backgroundColor: palette.evDeliveries,
        borderWidth: 2.5,
        pointRadius: 3,
        pointBackgroundColor: palette.evDeliveries,
        pointBorderColor: palette.evDeliveries,
        yAxisID: "y1",
        tension: 0.35,
        order: 0,
        datalabels: { display: false },
      },
      {
        type: "bar",
        label: "CO2 Saved (Ton)",
        data: chartData.map((d) => d.co2Saved),
        backgroundColor: palette.co2Saved,
        borderColor: palette.co2Saved,
        borderWidth: 0,
        barPercentage: 0.9,
        categoryPercentage: 0.7,
        yAxisID: "y",
        order: 1,
        datalabels: {
          align: "top",
          anchor: "end",
          color: palette.co2Saved,
          font: { size: 9, weight: "bold" },
          formatter: (v) => v,
        },
      },
      {
        type: "bar",
        label: "CO2 Emission (Ton)",
        data: chartData.map((d) => d.co2Emission),
        backgroundColor: palette.co2Emission,
        borderColor: palette.co2Emission,
        borderWidth: 0,
        barPercentage: 0.9,
        categoryPercentage: 0.7,
        yAxisID: "y",
        order: 1,
        datalabels: {
          align: "top",
          anchor: "end",
          color: palette.co2Emission,
          font: { size: 9, weight: "bold" },
          formatter: (v) => v,
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    layout: { padding: { top: 24, right: 8, left: 0, bottom: 0 } },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: palette.text, font: { size: 10 }, autoSkip: false },
        title: {
          display: true,
          text: "Month (2024)",
          color: palette.text,
          font: { weight: "bold", size: 12 },
          padding: { top: 8 },
        },
      },
      y: {
        position: "left",
        beginAtZero: true,
        max: 8,
        ticks: { stepSize: 1, color: palette.co2Saved, font: { size: 10 } },
        grid: { color: "#E5E7EB" },
        title: {
          display: true,
          text: "CO\u2082 (Metric Tons)",
          color: palette.co2Saved,
          font: { weight: "bold", size: 11 },
        },
      },
      y1: {
        position: "right",
        beginAtZero: true,
        max: 5000,
        ticks: { stepSize: 1000, color: palette.evDeliveries, font: { size: 10 } },
        grid: { drawOnChartArea: false },
        title: {
          display: true,
          text: "EV Deliveries",
          color: palette.evDeliveries,
          font: { weight: "bold", size: 11 },
        },
      },
    },
  };

  return (
    <>
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-3" style={{ background: palette.co2Saved }} />
          <span style={{ color: palette.text }}>
            CO<sub>2</sub> Saved (Ton)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-3" style={{ background: palette.co2Emission }} />
          <span style={{ color: palette.text }}>
            CO<sub>2</sub> Emission (Ton)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center">
            <span className="w-6 h-0.5" style={{ background: palette.evDeliveries }} />
            <span className="w-2.5 h-2.5 rounded-full -mx-1" style={{ background: palette.evDeliveries }} />
            <span className="w-6 h-0.5" style={{ background: palette.evDeliveries }} />
          </span>
          <span style={{ color: palette.text }}>EV Deliveries</span>
        </div>
      </div>
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px]">
      <Chart type="bar" data={data} options={options}/>
    </div>
    </>
  );
}
