import type { AppProps } from 'next/app';
import Layout from '../layouts/default';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import NextProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <div className="h-screen">
        <Layout>
          <NextProgress color="rgb(34 197 94)" height={2} options={{ showSpinner: false }} />
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

//TODO
//블로그 만들기 포스팅
//페이지네이션 useState 비동기 처리 문제 포스팅
