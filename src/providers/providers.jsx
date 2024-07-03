import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function Providers({ children }) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
