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
import { chartData } from "./data";

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
    const labels = chartData.map((d) => d.quarter);

    const data = {
        labels,
        datasets: [
            {
                type: "line",
                label: "EV Deliveries",
                data: chartData.map((d) => d.ev),
                borderColor: "#EAB308",
                backgroundColor: "#EAB308",
                borderWidth: 2.5,
                pointRadius: 4,
                pointBackgroundColor: "#EAB308",
                pointBorderColor: "#EAB308",
                yAxisID: "y1",
                tension: 0.35,
                datalabels: {
                    align: "top",
                    anchor: "end",
                    color: "#4A4A4A",
                    font: { weight: "bold", size: 10 },
                    formatter: (v) => `${v}`,
                    offset: 6,
                },
            },
            {
                type: "bar",
                label: "CO2 Saved (kg)",
                data: chartData.map((d) => d.co2),
                backgroundColor: "#4CAF50",
                borderColor: "#4CAF50",
                borderWidth: 0,
                barPercentage: 0.55,
                categoryPercentage: 0.75,
                yAxisID: "y",
                datalabels: {
                    align: "top",
                    anchor: "end",
                    color: "#4A4A4A",
                    font: { weight: "bold", size: 10 },
                    formatter: (v) => v.toLocaleString(),
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
                    color: "#4A4A4A",
                    font: { weight: "bold", size: 10 },
                    maxRotation: 45,
                    minRotation: 0,
                    autoSkip: false,
                },
                title: {
                    display: true,
                    text: "Day of Week",
                    color: "#4A4A4A",
                    font: { weight: "bold", size: 12 },
                    padding: { top: 8 },
                },
            },
            y: {
                position: "left",
                beginAtZero: true,
                max: 320,
                ticks: { stepSize: 40, color: "#4CAF50", font: { weight: "bold", size: 10 } },
                grid: { color: "#E5E7EB" },
                title: {
                    display: true,
                    text: "CO\u2082 Saved (kg)",
                    color: "#4CAF50",
                    font: { weight: "bold", size: 12 },
                },
            },
            y1: {
                position: "right",
                beginAtZero: true,
                max: 260,
                ticks: {
                    stepSize: 40,
                    color: "#EAB308",
                    font: { weight: "bold", size: 10 },
                },
                grid: { drawOnChartArea: false },
                title: {
                    display: true,
                    text: "EV Deliveries",
                    color: "#EAB308",
                    font: { weight: "bold", size: 12 },
                },
            },
        },
    };

    return (
        <div className="relative w-full h-80 sm:h-100 md:h-115">
            {/* Growth Trend annotation — only on larger screens */}
            <Chart type="bar" data={data} options={options} />
        </div>
    );
}
