import type { AppProps } from 'next/app';
import Layout from '../layouts/default';
import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="h-screen">
        <Head>
          <meta name="google-site-verification" content="S5sCMf0g7PdO57UHYdEm9Mx5VYoxT12OvhsiUJU-rlk" />
        </Head>
        <Layout>
          <NextNProgress color="rgb(34 197 94)" height={2} options={{ showSpinner: false }} />
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
