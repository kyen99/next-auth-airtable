import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

function _App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default _App
