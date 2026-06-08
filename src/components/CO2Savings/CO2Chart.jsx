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
        barPercentage: 0.78,
        categoryPercentage: 0.66,
        yAxisID: "y",
        order: 1,
        datalabels: {
          display: (ctx) => ctx.chart.width >= 520,
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
        barPercentage: 0.78,
        categoryPercentage: 0.66,
        yAxisID: "y",
        order: 1,
        datalabels: {
          display: (ctx) => ctx.chart.width >= 520,
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
        ticks: {
          color: palette.text,
          font: { size: 10 },
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          callback: function tickLabel(value, index) {
            const label = this.getLabelForValue(value);
            return this.chart.width < 420 && index % 2 === 1 ? "" : label;
          },
        },
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
          display: false,
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
          display: false,
          text: "EV Deliveries",
          color: palette.evDeliveries,
          font: { weight: "bold", size: 11 },
        },
      },
    },
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 flex-wrap justify-center gap-x-4 gap-y-3 pt-2 text-xs sm:gap-x-6 sm:text-sm lg:pt-0  mt-0 lg:mt-8">
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
      <div className="relative mt-4 min-h-0 w-full flex-1 lg:mt-15 lg:h-[400px] lg:flex-none xl:h-[460px]">
        <Chart type="bar" data={data} options={options}/>
      </div>
    </div>
  );
}
