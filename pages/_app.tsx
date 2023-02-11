import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { ThemeProvider, Global } from 'theme-ui'
import { theme } from '../theme'

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
    <>
      <Global styles={{
        'h1': { fontSize: 6 },
        'h2': { fontSize: 5 },
        'h3': { fontSize: 4 },
        'h4': { fontSize: 3 },
        'h5': { fontSize: 2 },
        'h6': { fontSize: 1 },
      }} />
      <ThemeProvider theme={theme}>
        <div className={`${specialElite.variable} ${captureIt.variable}`} sx={{
          fontFamily: 'var(--font-special)',
          
        }}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
