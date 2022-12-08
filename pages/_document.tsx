import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="google-site-verification" content="nv7qsrbYqeJ5cvSe_k2wtBI9fHhFeXIhv1ndyuNRNwM" />
          <link href="/favicon.ico" rel="shortcut icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap" rel="stylesheet" />
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
