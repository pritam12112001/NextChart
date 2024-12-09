'use client';
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';
import { PieChartProps } from './type';



const EChartPieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current!);

    const option = {
      title: {
        text: 'Sales Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
    //   legend: {
    //     orient: 'vertical',
    //     left: 'left'
    //   },
    //   xAxis: {
    //     type: 'category',
    //     data: data.map((item) => item.name),
    //   },
    //   yAxis: {
    //     type: 'value',
    //   },
      series: [
        {
          radius: '50%',
          data: data.map((item) => ({
            name: item.name,  // Pass the name of the item here
            value: item.value,  // Pass the value for the pie chart
          })),
          type: 'pie',
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        
      ],
      
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default EChartPieChart;