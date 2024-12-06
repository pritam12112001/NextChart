'use client';
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';
import { BarChartProps } from './type';


const EChartBarChart: React.FC<BarChartProps> = ({ data }) => {
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
          type: 'bar',
        },
      ],
      dataZoom: [
        {
          type: 'inside',  // For zooming using mouse wheel or touchpad
          xAxisIndex: [0], // Apply to the xAxis
        },
        {
          type: 'slider',  // For zooming using a slider (visible on the chart)
          xAxisIndex: [0],
          start: 0,        // Initial zoom start
          end: 100         // Initial zoom end (0-100%)
        }
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default EChartBarChart;
