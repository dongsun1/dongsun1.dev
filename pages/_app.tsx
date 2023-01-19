import type { AppProps } from 'next/app';
import Layout from 'layouts/default';
import 'styles/globals.css';
import { ThemeProvider } from 'next-themes';
import NextProgress from 'nextjs-progressbar';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Head>
        <title>dongsun1 blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <NextProgress color="rgb(34 197 94)" height={2} options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

// TODO

// **Posting**
// 2022 회고
// CS

// **Develop**
// React Query
// Search
// Related posts
