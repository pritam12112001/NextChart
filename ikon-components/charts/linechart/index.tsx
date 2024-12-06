'use client';
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';
import { LineChartProps } from './type'; // Assuming you have defined this type

const EChartLineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current!);

    const option = {
      title: {
        text: 'Sales Over Time',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',  // Use axis for line charts
      },
      xAxis: {
        type: 'category',
        data: data.map((item) => item.name),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: data.map((item) => item.value),
          type: 'line',  // Set chart type to line
          smooth: true,  // Optional: makes the line smooth
          lineStyle: {
            width: 2,  // Optional: Line width
            color: '#4caf50',  // Optional: Customize line color
          },
          symbol: 'circle',  // Optional: Adds markers on the data points
          symbolSize: 8,  // Optional: Size of the marker
        },
      ],
      dataZoom: [
        {
          type: 'inside',  // Zooming using mouse wheel or touchpad
          xAxisIndex: [0], // Apply zoom to the x-axis
        },
        {
          type: 'slider',  // Zooming using a slider
          xAxisIndex: [0],
          start: 0,
          end: 100,  // Adjust slider zoom range
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

export default EChartLineChart;
