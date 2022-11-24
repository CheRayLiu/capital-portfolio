import { createTheme, NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import Dashboard from './modules/dashboard/components/index.js';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  },
});

function App() {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Dashboard />
    </NextUIProvider>
  );
}

export default App;
