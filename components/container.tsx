import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Container(props: any) {
  const { children, ...customMeta } = props;

  const router = useRouter();
  const meta = {
    title: 'dongsun1 blog',
    desc: `Front-end developer`,
    image: '',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.desc} name="description" />
        <meta property="og:url" content={`https://dongsun.dev${router.asPath}`} />
        <link rel="canonical" href={`https://dongsun.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="dongsun1 blog" />
        <meta property="og:description" content={meta.desc} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      {children}
    </>
  );
}
