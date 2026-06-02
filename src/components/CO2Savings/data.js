// Weekly CO2 savings data (mapped from mock API)
export const apiResponse = {
  week: "12 May 2024 - 18 May 2024",
  summary: {
    totalWeeklyCO2SavedKg: 830,
    averageDailyCO2SavedKg: 118.57,
    highestSavingDay: { day: "Sunday", value: 160 },
    lowestSavingDay: { day: "Monday", value: 80 },
    weeklyGrowthPercentage: 18.7,
  },
  dailyData: [
    { date: "2024-05-12", day: "Monday",    co2SavedKg: 80,  evDeliveries: 120, fuelSavedLiters: 32, treesEquivalent: 4 },
    { date: "2024-05-13", day: "Tuesday",   co2SavedKg: 95,  evDeliveries: 138, fuelSavedLiters: 38, treesEquivalent: 5 },
    { date: "2024-05-14", day: "Wednesday", co2SavedKg: 110, evDeliveries: 155, fuelSavedLiters: 44, treesEquivalent: 6 },
    { date: "2024-05-15", day: "Thursday",  co2SavedKg: 125, evDeliveries: 172, fuelSavedLiters: 50, treesEquivalent: 7 },
    { date: "2024-05-16", day: "Friday",    co2SavedKg: 140, evDeliveries: 188, fuelSavedLiters: 56, treesEquivalent: 8 },
    { date: "2024-05-17", day: "Saturday",  co2SavedKg: 120, evDeliveries: 165, fuelSavedLiters: 48, treesEquivalent: 6 },
    { date: "2024-05-18", day: "Sunday",    co2SavedKg: 160, evDeliveries: 210, fuelSavedLiters: 64, treesEquivalent: 9 },
  ],
  meta: {
    timezone: "Asia/Singapore",
    lastUpdated: "2024-05-18T10:30:00Z",
    status: "Live",
  },
};
// Chart data shaped for CO2Chart component (bar = CO2 kg, line = EV deliveries)
export const chartData = apiResponse.dailyData.map((d) => ({
  quarter: d.day.slice(0, 3),
  co2: d.co2SavedKg,
  ev: d.evDeliveries,
}));
// Side panel — weekly totals derived from summary + dailyData
const totalFuel = apiResponse.dailyData.reduce((s, d) => s + d.fuelSavedLiters, 0);
const totalTrees = apiResponse.dailyData.reduce((s, d) => s + d.treesEquivalent, 0);
const totalDeliveries = apiResponse.dailyData.reduce((s, d) => s + d.evDeliveries, 0);
export const totalImpact = [
  { icon: "co2",  label: "Total CO\u2082 Saved",       value: apiResponse.summary.totalWeeklyCO2SavedKg.toLocaleString(), sub: "Kilograms" },
  { icon: "tree", label: "Equivalent to Planting",     value: `~${totalTrees}`,         sub: "Trees" },
  { icon: "fuel", label: "Equivalent to Avoiding",     value: `~${totalFuel.toLocaleString()}`, sub: "Liters of Diesel" },
  { icon: "car",  label: "Total EV Deliveries",        value: `~${totalDeliveries.toLocaleString()}`, sub: "Deliveries this Week" },
];