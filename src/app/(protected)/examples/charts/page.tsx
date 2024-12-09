// export default function Charts() {

//   return (
//     <>

//     </>
//   );
// }

import React from 'react';
import ChartRenderer from '@/components/ikon-components/charts';
import { BarChartData, LineChartData, PieChartData,StackChartData } from '@/components/ikon-components/charts/type';
//import ChartRenderer from './ChartRenderer'; // Adjust the import path as needed
//import { BarChartData, LineChartData } from './type'; // Make sure the path is correct

const ChartData: React.FC = () => {
  // Example data for BarChart
  const barChartData: BarChartData = [
    { name: 'Mon', value: 100 },
    { name: 'Tue', value: 200 },
    { name: 'Wed', value: 150 },
    { name: 'Thu', value: 300 },
    { name: 'Fri', value: 250 },
  ];

  // Example data for LineChart
  const lineChartData: LineChartData = [
    { name: 'Jan', value: 120 },
    { name: 'Feb', value: 180 },
    { name: 'Mar', value: 150 },
    { name: 'Apr', value: 250 },
    { name: 'May', value: 220 },
  ];

  const pieChartData: PieChartData = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' }
  ];


  const stackedLineData: StackChartData = {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    seriesData: [
      {
        name: 'Email',
        data: [120, 132, 101, 134, 90],
      },
      {
        name: 'Video Ads',
        data: [220, 182, 191, 234, 290],
      },
      {
        name: 'Direct',
        data: [150, 232, 201, 154, 190],
      },
    ],
  };

  return (
    <div className="max-h-[500px] overflow-y-auto">
      <h1>Chart Example</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render Bar Chart */}
        <ChartRenderer chartType="bar" data={barChartData} />

        {/* Render Line Chart */}
        <ChartRenderer chartType="line" data={lineChartData} />

        <ChartRenderer chartType="pie" data = {pieChartData} />

        <ChartRenderer chartType="stackLine" data = {stackedLineData} />

      </div>
    </div>
  );
};

export default ChartData;
