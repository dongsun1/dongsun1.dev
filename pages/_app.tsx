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
// CS (운영체제, 네트워크)
// Next.js rendering 방식
// Vanilla JS SPA
// 프로그래머스 테스트 후기

// **Development**
// React Query
// Search
// Related posts

// Commit Rule
// feat : 새로운 기능에 대한 커밋
// fix : 버그 수정에 대한 커밋
// build : 빌드 관련 파일 수정에 대한 커밋
// chore : 그 외 자잘한 수정에 대한 커밋
// ci : CI관련 설정 수정에 대한 커밋
// docs : 문서 수정에 대한 커밋
// style : 코드 스타일 혹은 포맷 등에 관한 커밋
// refactor :  코드 리팩토링에 대한 커밋
// test : 테스트 코드 수정에 대한 커밋
