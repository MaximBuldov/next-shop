import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import cartStore from '@/store/cart-store';
import { Provider, enableStaticRendering } from 'mobx-react';
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

enableStaticRendering(typeof window === 'undefined')

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  return (
    <Provider cartStore={cartStore}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  )
}
