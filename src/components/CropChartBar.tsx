import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import rawData from '../data/crops.json';
import { Title } from '@mantine/core';

type CropRecord = {
  Year: string;
  'Crop Name': string;
  'Crop Production (UOM:t(Tonnes))': string | number;
};

const parseProduction = (value: string | number): number =>
  typeof value === 'number'
    ? value
    : value === '' || isNaN(Number(value))
    ? 0
    : Number(value);

const getCropAverages = (data: CropRecord[]): Record<string, number> => {
  const totals: Record<string, number> = {};
  const counts: Record<string, number> = {};

  for (const entry of data) {
    const crop = entry['Crop Name'];
    const production = parseProduction(entry['Crop Production (UOM:t(Tonnes))']);

    if (!totals[crop]) {
      totals[crop] = 0;
      counts[crop] = 0;
    }

    totals[crop] += production;
    counts[crop] += 1;
  }

  const averages: Record<string, number> = {};
  for (const crop in totals) {
    averages[crop] = totals[crop] / counts[crop];
  }

  return averages;
};

const CropBarChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);
    const cropAverages = getCropAverages(rawData);

    const cropNames = Object.keys(cropAverages);
    const averageValues = Object.values(cropAverages);

    chart.setOption({
      title: {
        text: 'Average Crop Production (All Years)',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: cropNames,
        axisLabel: {
          rotate: 45,
          interval: 0,
        },
      },
      yAxis: {
        type: 'value',
        name: 'Avg Production (Tonnes)',
      },
      series: [
        {
          type: 'bar',
          data: averageValues,
          itemStyle: {
            color: '#228be6',
          },
        },
      ],
    });

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Title order={3} mb="sm">Average Crop Production Bar Chart</Title>
      <div ref={chartRef} style={{ width: '100%', height: '450px' }} />
    </>
  );
};

export default CropBarChart;
