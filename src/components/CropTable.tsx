// src/components/CropTable.tsx
import { Table, Title } from '@mantine/core';
import rawData from '../data/crops.json';

type CropRecord = {
  Year: string;
  'Crop Name': string;
  'Crop Production (UOM:t(Tonnes))': string | number;
};

type YearlyExtremes = {
  year: string;
  maxCrop: string;
  minCrop: string;
};

const parseProduction = (value: string | number): number =>
  typeof value === 'number'
    ? value
    : value === '' || isNaN(Number(value))
    ? 0
    : Number(value);

const transformData = (data: CropRecord[]): YearlyExtremes[] => {
  const groupedByYear: Record<string, CropRecord[]> = {};

  data.forEach((entry) => {
    const year = entry.Year;
    if (!groupedByYear[year]) {
      groupedByYear[year] = [];
    }
    groupedByYear[year].push(entry);
  });

  const summary: YearlyExtremes[] = [];

  for (const year in groupedByYear) {
    const crops = groupedByYear[year];

    let maxCrop = crops[0];
    let minCrop = crops[0];

    for (const crop of crops) {
      const currentProd = parseProduction(crop['Crop Production (UOM:t(Tonnes))']);
      const maxProd = parseProduction(maxCrop['Crop Production (UOM:t(Tonnes))']);
      const minProd = parseProduction(minCrop['Crop Production (UOM:t(Tonnes))']);

      if (currentProd > maxProd) maxCrop = crop;
      if (currentProd < minProd) minCrop = crop;
    }

    summary.push({
      year: year.replace('Financial Year (Apr - Mar), ', ''),
      maxCrop: maxCrop['Crop Name'],
      minCrop: minCrop['Crop Name'],
    });
  }

  return summary.sort((a, b) => Number(a.year) - Number(b.year));
};

const CropTable = () => {
  const processedData = transformData(rawData);

  const rows = processedData.map((entry) => (
    <Table.Tr key={entry.year}>
      <Table.Td>{entry.year}</Table.Td>
      <Table.Td>{entry.maxCrop}</Table.Td>
      <Table.Td>{entry.minCrop}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Title order={3} mb="sm">Crop Production Extremes by Year</Title>
      <Table striped withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Max Production Crop</Table.Th>
            <Table.Th>Min Production Crop</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};

export default CropTable;
