import themes from '@/assets/styles/themes/themes'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../assets/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
