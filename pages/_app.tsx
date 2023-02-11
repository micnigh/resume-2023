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
        'h1,h2,h3,h4,h5,h6': {
          my: 0,
          fontFamily: 'var(--font-capture-it)',
          fontWeight: 'normal',
        },
        'h1': { fontSize: [5, 7] },
        'h2': { fontSize: [4, 6] },
        'h3': { fontSize: [3, 5] },
        'h4': { fontSize: [2, 4] },
        'h5': { fontSize: [1, 3] },
        'h6': { fontSize: [0, 2] },
        'a': {
            color: 'black',
            textDecoration: 'none',
        },
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
