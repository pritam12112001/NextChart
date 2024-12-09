import React from 'react';
import EChartBarChart from './bar-charts/index';
import EChartLineChart from './line-charts';
import EChartPieChart from './pie-charts';
import { BarChartData, LineChartData, PieChartData, StackChartData, ChartProps } from './type';
import EChartStackedLineChart from './stacked-line-charts';


const ChartRenderer: React.FC<ChartProps> = ({ chartType, data }) => {
  switch (chartType) {
    case 'bar':
      return <EChartBarChart data={data as BarChartData} />;
    case 'line':
      return <EChartLineChart data={data as LineChartData} />;
    case 'pie':
      return <EChartPieChart data={data as PieChartData} />;
    case 'stackLine':
      return <EChartStackedLineChart data={data as StackChartData} />;
    default:
      return null;
  }
};

export default ChartRenderer;




// const LineChart: React.FC = () => {
//   // Example data
//   const barChartData: LineChartData[] = [
//     { name: 'Mon', value: 100 },
//     { name: 'Tue', value: 200 },
//     { name: 'Wed', value: 150 },
//     { name: 'Thu', value: 300 },
//     { name: 'Fri', value: 250 },
//   ];

//   return (
//     <div>
//       <h1>Sales by Day</h1>
//       <EChartLineChart data={barChartData} />
//     </div>
//   );
// };

// export default LineChart;