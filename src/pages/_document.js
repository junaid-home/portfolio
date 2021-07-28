import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta name="theme-color" content="#242582" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Staatliches&display=swap"
            rel="stylesheet"
          />

          <meta property="og:title" content="Junaid Javed Portfolio" />
          <meta property="og:image" content="/assets/screenshot.png" />
          <meta
            property="og:description"
            content="Junaid Javed portfolio website featuring his best past and recent work."
          />
          <meta property="og:url" content="http://github.com/junaid-home/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
