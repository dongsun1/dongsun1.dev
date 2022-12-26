---
title: "[Next.js] 모든 파일에 동적으로 meta tag를 넣는 법"
desc: '오늘은 Next.js에서 모든 파일에 동적으로 meta tag를 넣는 방법에 대해 포스팅하겠다.
구글링을 열심히 해봤지만 마땅히 쓸만한 정보를 찾지 못했다.
그러다 vercel에서 일하는 개발자 블로그 코드를 참고해서 개발했다.
https://github.com/leerob/leerob.io'
date: 2022/12/26
category: Next.js
---

오늘은 Next.js에서 모든 파일에 동적으로 meta tag를 넣는 방법에 대해 포스팅하겠다.

구글링을 열심히 해봤지만 마땅히 쓸만한 정보를 찾지 못했다.
#
그러다 Next.js를 만든 회사 vercel에서 일하는 개발자 블로그 코드를 참고해서 개발했다.

Next.js를 만든 개발자가 만든 블로그이기 때문에 정석 방법이라고 생각한다.

https://github.com/leerob/leerob.io

## Container Component

먼저 Container Component를 만든다.

```javascript
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
        <meta property="og:url" content={`https://dongsun-dev.vercel.app${router.asPath}`} />
        <link rel="canonical" href={`https://dongsun-dev.vercel.app${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.desc} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      {children}
    </>
  );
}
```

meta tag에 들어갈 title, desc, image, type은 고정하고 customMeta로 덮어씌운다.
#
예를 들어 customMeta가 아래와 같을 때 meta tag에 덮어씌워 meta.title이 'blog title'이 된다.
```javascript
const customMeta = {
  title: 'blog title'
}

const meta = {
    title: 'dongsun1 blog',
    desc: `Front-end developer`,
    image: '',
    type: 'website',
    ...customMeta,
  };

// meta.title => 'blog title'
```

## Container 사용법
```javascript
export default function Index(...) {
  ...

  return (
    <Container title='blog title' desc='blog desc' image={...} type='...'>
      ...
    </Container>
  );
}
```

이런식으로 모든 페이지 컴포넌트를 Container 컴포넌트로 감싸서 title, desc, image, type을 넘겨주면 페이지마다 동적으로 meta tag를 만들 수 있다.


### 예시
```javascript
export default function PostPage({ post }: { post: IPost }) {
  const { theme = 'dark' } = useTheme();

  const {
    frontMatter: { category, date, title, desc },
    content,
  } = post;

  const formatDate = moment(new Date(date)).format('MMM DD, YYYY');

  return (
    <Container title={title} desc={desc} date={new Date(date).toISOString()}>
      ...
    </Container>
  );
}
```

실제로 내가 사용하고 있는 코드다.

props로 post 데이터를 받고 Container에 title, desc, date를 넘겨준다.

date를 넘겨줄 때 주의해야 할 점은 toISOString()으로 보내줘야 한다는 점이다.
