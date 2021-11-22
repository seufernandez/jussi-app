import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { ItemsProvider } from '../services/hooks/useSearch';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ItemsProvider>
        <Component {...pageProps} />
      </ItemsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
