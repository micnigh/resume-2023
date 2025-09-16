import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import 'tippy.js/dist/tippy.css';
import { useEffect } from 'react';
import { generateTooltips } from '../lib/util/tooltip';

const captureIt = localFont({
  src: '../lib/assets/font/capture-it.woff',
  variable: '--font-capture-it',
  display: 'swap',
  fallback: ['Times New Roman'],
});

const specialElite = localFont({
  src: '../lib/assets/font/special-elite.woff',
  variable: '--font-special',
  display: 'swap',
  fallback: ['Arial'],
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    generateTooltips();
  }, []);

  return (
    <>
      <div
        className={`${specialElite.variable} ${captureIt.variable} font-special`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;