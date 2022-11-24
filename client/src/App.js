import { createTheme, NextUIProvider } from '@nextui-org/react';
import Dashboard from './modules/dashboard/components/index.js';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {},
  },
});

function App() {
  return (
    <NextUIProvider theme={lightTheme}>
      <Dashboard />
    </NextUIProvider>
  );
}

export default App;
