import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import Index from './index'

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="gP5gGQwXgain37Oh_AZhWox-igJHBD55-3MvNjlAS9s" />
      </Head>
      <body>
        <Main />
        <Index />
      </body>
    </Html>
  )
}

