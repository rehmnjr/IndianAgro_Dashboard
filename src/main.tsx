import ReactDOM from 'react-dom/client';
import {
  MantineProvider,
  ColorSchemeScript,
  createTheme,
} from '@mantine/core';

import '@mantine/core/styles.css';
import App from './App';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Inter, sans-serif',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ColorSchemeScript defaultColorScheme="light" />
    <MantineProvider
      theme={theme}
      defaultColorScheme="light" 
    >
      <App />
    </MantineProvider>
  </>
);
