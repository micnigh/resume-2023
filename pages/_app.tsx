import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { ThemeProvider } from '@emotion/react'

const theme = {
  color: {
    primary: '',
    secondary: '',
  }
}

const captureIt = localFont({
  src: '../lib/assets/font/capture-it.woff',
  variable: '--font-capture-it',
  display: 'swap',
})

const specialElite = localFont({
  src: '../lib/assets/font/special-elite.woff',
  variable: '--font-special',
  display: 'swap',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={`${specialElite.variable} ${captureIt.variable}`} css={{
        fontFamily: 'var(--font-special)',
      }}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
