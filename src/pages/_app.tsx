import themes from '@/assets/styles/themes/themes';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/global';

import * as S from './styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <S.Container>
        <GlobalStyles />
        <Component {...pageProps} />
      </S.Container>
    </ThemeProvider>
  );
}
