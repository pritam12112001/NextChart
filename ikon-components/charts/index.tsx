
import React from 'react';
import EChartBarChart from './barchart/index';
import { ChartData } from './barchart/type';

const HomePage: React.FC = () => {
  // Example data
  const chartData: ChartData[] = [
    { name: 'Mon', value: 100 },
    { name: 'Tue', value: 200 },
    { name: 'Wed', value: 150 },
    { name: 'Thu', value: 300 },
    { name: 'Fri', value: 250 },
  ];

  return (
    <div>
      <h1>Sales by Day</h1>
      <EChartBarChart data={chartData} />
    </div>
  );
};

export default HomePage;


// import React from 'react';
// import EChartBarChart from './barchart/index';

// import EChartLineChart from './linechart/index';

// export type ChartType = 'bar' | 'line';

// interface ChartProps {
//   chartType: ChartType;
//   data: any; // Use `any` or define stricter types based on `chartType`
// }

// const Chart: React.FC<ChartProps> = ({ chartType, data }) => {
//   switch (chartType) {
//     case 'bar':
//       return <EChartBarChart data={data} />;
//     case 'line':
//       return <EChartLineChart data={data} />;
//     default:
//       return <div>Unsupported chart type</div>;
//   }
// };

// export default Chart;