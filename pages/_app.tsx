import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { ThemeProvider, Global } from 'theme-ui'
import { theme } from '../theme'
import 'tippy.js/dist/tippy.css';
import { useEffect } from 'react'
import { generateTooltips } from '../lib/util/tooltip'

const captureIt = localFont({
  src: '../lib/assets/font/capture-it.woff',
  variable: '--font-capture-it',
  display: 'swap',
  fallback: ['Times New Roman'],
})

const specialElite = localFont({
  src: '../lib/assets/font/special-elite.woff',
  variable: '--font-special',
  display: 'swap',
  fallback: ['Arial'],
})

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    generateTooltips();
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={{
          'h1,h2,h3,h4,h5,h6': {
            my: 0,
            fontFamily: 'var(--font-capture-it)',
            fontWeight: 'normal',
          },
          'h1': { fontSize: [5, 6] },
          'h2': { fontSize: [4, 5] },
          'h3': { fontSize: [3, 4] },
          'h4': { fontSize: [2, 3] },
          'h5': { fontSize: [1, 2] },
          'h6': { fontSize: [0, 1] },
          'a': {
              color: 'black',
              textDecoration: 'none',
          },
          '@media print': {
            'h1': { fontSize: 6 },
            'h2': { fontSize: 5 },
            'h3': { fontSize: 4 },
            'h4': { fontSize: 3 },
            'h5': { fontSize: 2 },
            'h6': { fontSize: 1 },
          },
          '.tippy-box': {
            bg: 'black',
            color: 'white',
            fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
          },
          '.tippy-content': {},
          '.tippy-arrow': {
            color: 'black',
          }
        }} />
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
