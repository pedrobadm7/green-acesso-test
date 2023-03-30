import themes from '@/assets/styles/themes/themes';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/global';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import * as S from './styles';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>

  );
}
