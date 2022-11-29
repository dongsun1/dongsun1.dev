import type { AppProps } from 'next/app';
import Layout from '../layouts/default';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
