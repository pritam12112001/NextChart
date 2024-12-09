// types.ts
export type ChartData = {
    name: string;
    value: number;
  };
  
  export type BarChartData = ChartData[];
  
  export type LineChartData = ChartData[];

  export type PieChartData = ChartData[];


  export type SeriesData = {
    name: string;
    data: number[];
  };
  
  export interface StackChartData {
    seriesData: SeriesData[];
    categories: string[]; // X-axis labels
  }
  
//   export type PieChartData = {
//     name: string;
//     value: number;
//   }[];
  
  // A generic ChartProps type to handle multiple chart types
  export type ChartProps = {
    chartType: 'bar' | 'line' | 'pie' | 'stackLine';
    data: BarChartData | LineChartData | PieChartData |StackChartData;
  };
  
