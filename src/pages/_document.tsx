import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" crossOrigin="https://fonts.gstatic.com" />
          <meta charSet="utf-8" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500&family=Nunito+Sans:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
