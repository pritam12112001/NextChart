export type BarChartData = { name: string; value: number };
// export type PieChartData = { name: string; value: number };
export type LineChartData = { name: string; value: number };

// Union type for all chart data
export type ChartData = BarChartData | LineChartData;