import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const captureIt = localFont({
  src: '../public/font/capture-it.woff',
  variable: '--font-capture-it',
  display: 'swap',
})

const specialElite = localFont({
  src: '../public/font/special-elite.woff',
  variable: '--font-special',
  display: 'swap',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${specialElite.variable} ${captureIt.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
