import type { AppProps } from 'next/app';
import Layout from '../layouts/default';
import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import Loader from 'react-spinners/RotateLoader';
import styled from '@emotion/styled';

type Custom = {
  version?: number;
};

const StyledDiv = styled.div<Custom>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div className="h-screen">
        <Head>
          <meta name="google-site-verification" content="S5sCMf0g7PdO57UHYdEm9Mx5VYoxT12OvhsiUJU-rlk" />
        </Head>
        <Layout>
          {loading ? (
            <StyledDiv>
              <Loader color={'rgb(34 197 94)'} loading={true} size={15} speedMultiplier={0.4} />
            </StyledDiv>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </div>
    </ThemeProvider>
  );
}
