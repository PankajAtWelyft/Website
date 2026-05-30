// Quarterly CO2 saved (metric tons) and EV utilisation (%)
export const chartData = [
  { quarter: "Q1 FY23", co2: 50,   ev: 10 },
  { quarter: "Q2 FY23", co2: 120,  ev: 13 },
  { quarter: "Q3 FY23", co2: 210,  ev: 17 },
  { quarter: "Q4 FY23", co2: 320,  ev: 22 },
  { quarter: "Q1 FY24", co2: 450,  ev: 28 },
  { quarter: "Q2 FY24", co2: 610,  ev: 36 },
  { quarter: "Q3 FY24", co2: 800,  ev: 45 },
  { quarter: "Q4 FY24", co2: 1050, ev: 55 },
  { quarter: "Q1 FY25", co2: 1300, ev: 65 },
  { quarter: "Q2 FY25", co2: 1550, ev: 75 },
  { quarter: "Q3 FY25", co2: 1750, ev: 85 },
  { quarter: "Q4 FY25", co2: 1950, ev: 95 },
];

export const totalImpact = [
  { icon: "co2",  label: "Total CO\u2082 Saved",   value: "1,950",    sub: "Metric Tons" },
  { icon: "tree", label: "Equivalent to Planting", value: "~88,600",  sub: "Trees" },
  { icon: "fuel", label: "Equivalent to Avoiding", value: "~846,000", sub: "Liters of Diesel" },
  { icon: "car",  label: "Equivalent to Removing", value: "~2,070",   sub: "Cars off the Road for a Year" },
];
