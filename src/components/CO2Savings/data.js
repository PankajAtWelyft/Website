// Monthly CO2 savings data (mapped from mock API)
export const apiResponse = {
  year: 2024,
  summary: {
    totalCO2SavedTon: 45.62,
    totalEmissionReducedTon: 62.4,
    totalEVDeliveries: 18450,
    treesEquivalent: 2341,
    dieselSavedLiters: 846000,
  },
  monthlyData: [
    { month: "Jan", co2SavedTon: 2.1, co2EmissionTon: 5.8, evDeliveries: 2100, fuelSavedLiters: 42000 },
    { month: "Feb", co2SavedTon: 2.4, co2EmissionTon: 5.2, evDeliveries: 2280, fuelSavedLiters: 45600 },
    { month: "Mar", co2SavedTon: 2.8, co2EmissionTon: 4.9, evDeliveries: 2460, fuelSavedLiters: 49200 },
    { month: "Apr", co2SavedTon: 3.4, co2EmissionTon: 4.3, evDeliveries: 2780, fuelSavedLiters: 55600 },
    { month: "May", co2SavedTon: 3.9, co2EmissionTon: 3.8, evDeliveries: 3100, fuelSavedLiters: 62000 },
    { month: "Jun", co2SavedTon: 4.2, co2EmissionTon: 3.5, evDeliveries: 3320, fuelSavedLiters: 66400 },
    { month: "Jul", co2SavedTon: 4.5, co2EmissionTon: 3.1, evDeliveries: 3560, fuelSavedLiters: 71200 },
    { month: "Aug", co2SavedTon: 4.9, co2EmissionTon: 2.8, evDeliveries: 3820, fuelSavedLiters: 76400 },
    { month: "Sep", co2SavedTon: 5.1, co2EmissionTon: 2.5, evDeliveries: 4010, fuelSavedLiters: 80200 },
    { month: "Oct", co2SavedTon: 5.4, co2EmissionTon: 2.2, evDeliveries: 4250, fuelSavedLiters: 85000 },
    { month: "Nov", co2SavedTon: 5.8, co2EmissionTon: 1.9, evDeliveries: 4480, fuelSavedLiters: 89600 },
    { month: "Dec", co2SavedTon: 6.2, co2EmissionTon: 1.5, evDeliveries: 4750, fuelSavedLiters: 95000 },
  ],
  emissionData: [
    { category: "CO2 Saved", value: 45.62 },
    { category: "Remaining Emission", value: 16.78 },
  ],
  chartConfig: {
    lineChart: { label: "Monthly CO2 Saved (Ton)", dataKey: "co2SavedTon", borderColor: "#EAB308" },
    barChart: { label: "EV Deliveries", dataKey: "evDeliveries", backgroundColor: "#4CAF50" },
    pieChart: { label: "CO2 Reduction Ratio", colors: ["#4CAF50", "#EF4444"] },
  },
};

// Brand palette (per manager spec)
export const palette = {
  co2Saved: "#EAB308",      // yellow
  co2Emission: "#EF4444",   // red
  evDeliveries: "#4CAF50",  // green
  text: "#4A4A4A",          // "black" replacement
  pie: ["#4CAF50", "#EF4444"],
};

// Main chart shape: grouped bar (saved + emission) + line (EV deliveries)
export const chartData = apiResponse.monthlyData.map((d) => ({
  month: d.month,
  co2Saved: d.co2SavedTon,
  co2Emission: d.co2EmissionTon,
  ev: d.evDeliveries,
}));

// Pie chart data
export const pieData = apiResponse.emissionData;

// Side panel — yearly totals from summary
export const totalImpact = [
  { icon: "co2",  label: "Total CO\u2082 Saved",   value: `${apiResponse.summary.totalCO2SavedTon}`,                              sub: "Metric Tons" },
  { icon: "tree", label: "Equivalent to Planting", value: `~${apiResponse.summary.treesEquivalent.toLocaleString()}`,            sub: "Trees" },
  { icon: "fuel", label: "Equivalent to Avoiding", value: `~${apiResponse.summary.dieselSavedLiters.toLocaleString()}`,          sub: "Liters of Diesel" },
  { icon: "car",  label: "Total EV Deliveries",    value: `~${apiResponse.summary.totalEVDeliveries.toLocaleString()}`,          sub: "Deliveries this Year" },
];

// Deliveries Replaced calculation
const avgFuelPerDelivery = apiResponse.summary.dieselSavedLiters / apiResponse.summary.totalEVDeliveries;
export const deliveriesReplaced = {
  totalReplaced: apiResponse.summary.totalEVDeliveries,
  avgFuelPerDelivery: avgFuelPerDelivery.toFixed(2),
  monthly: apiResponse.monthlyData.map((d) => ({ month: d.month, replaced: d.evDeliveries })),
  peakMonth: apiResponse.monthlyData.reduce((a, b) => (b.evDeliveries > a.evDeliveries ? b : a)),
};
