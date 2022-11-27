import 'react-toastify/dist/ReactToastify.css';

import { NextUIProvider, createTheme } from '@nextui-org/react';

import Dashboard from './modules/dashboard/components/index.js';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer />
    </NextUIProvider>
  );
}

export default App;
