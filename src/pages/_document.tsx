<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
