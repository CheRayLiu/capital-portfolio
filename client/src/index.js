import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClientWithCache = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClientWithCache}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
