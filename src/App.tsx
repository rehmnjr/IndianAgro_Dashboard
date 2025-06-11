import {
  Button,
  Container,
  Space,
  Title,
  Group,
  useMantineColorScheme,
  Paper,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import CropTable from './components/CropTable';
import CropBarChart from './components/CropChartBar';

const App = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Container size="lg" py="xl">
      <Group justify="space-between">
        <Title order={2}>Indian Agriculture Dashboard</Title>
        <Button
          variant="outline"
          onClick={() => toggleColorScheme()}
          leftSection={isDark ? <IconSun size={16} /> : <IconMoon size={16} />}
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Group>

      <Space h="xl" />

      <Paper shadow="sm" radius="md" p="md" withBorder>
        <CropTable />
      </Paper>

      <Space h="xl" />

      <Paper shadow="sm" radius="md" p="md" withBorder>
        <CropBarChart />
      </Paper>
    </Container>
  );
};

export default App;
