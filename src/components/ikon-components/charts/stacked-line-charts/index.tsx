// EChartStackedLineChart.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartStackedLineChartProps } from './type';

const EChartStackedLineChart: React.FC<{ data: EChartStackedLineChartProps }> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current!);

    const option = {
      title: {
        text: 'Stacked Line Chart',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: data.seriesData.map((item) => item.name),
        top: '5%',
        padding: [10, 0, 10, 0],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
    //   toolbox: {
    //     feature: {
    //       saveAsImage: {},
    //     },
    //   },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.categories,
      },
      yAxis: {
        type: 'value',
      },
      series: data.seriesData.map((series) => ({
        name: series.name,
        type: 'line',
        stack: 'Total', // This is necessary for stacking the lines
        data: series.data,
      })),
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default EChartStackedLineChart;
