---
title: "[Next.js] 사이트맵 제출하기"
desc: '사이트맵 만드는 방법은 여러가지가 있다. next-sitemap을 써봤지만 제출 성공이 되지 않았고 xml-sitemaps 사이트를 활용하자니 블로그 글 게시할때마다 등록해야된다고 생각해서 직접 만들었다. 먼저 pages 디렉토리 안에 server-sitemap.xml.tsx 파일을 만든다.'
date: 2022/12/16
category: Next.js
---

## 사이트맵 만드는 방법

사이트맵 만드는 방법은 여러가지가 있다.

1. next-sitemap 라이브러리
2. [xml-sitemaps](https://www.xml-sitemaps.com/) 사이트 활용
3. 직접 만들기

next-sitemap을 써봤지만 제출 성공이 되지 않았고 xml-sitemaps 사이트를 활용하자니 블로그 글 게시할때마다 등록해야된다고 생각해서 직접 만들었다.

## 사이트맵 만들기

먼저 pages 디렉토리 안에 server-sitemap.xml.tsx 파일을 만든다.

```javascript
// pages/server-sitemap.xml.tsx
import { GetServerSideProps } from 'next';
import { getAllPosts } from './api/getAllPosts';

const createSitemap = (slugs: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://dongsun1-dev.vercel.app/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = await getAllPosts();

  const allPages = [...posts.map(({ slug }) => `postPage/${slug}`), ...['', 'resume', 'categories']];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {},
  };
};

export default function Site() {
  return null;
}
```

slug 배열을 받아 사이트맵을 만들어주는 createSitemap 함수를 선언한 뒤 getServerSiteProps 함수에서 모든 페이지의 경로를 담은 allPages 변수를 넘겨준다.
#
그러면 http://localhost:3000/server-sitemap.xml 들어가면 아래와 같은 sitemap을 볼 수 있다.

![server-sitemap.xml](https://ifh.cc/g/b7y30f.jpg)

## robots.txt
robots.txt란 크롤러가 내 URL에 있는 정보들을 가져갈 수 있도록 등록을 해주는 파일이라고 생각하면 된다.

robots.txt 파일을 root 디렉토리에 만들어준다.

```javascript
# *
User-agent: *
Allow: /

# Host
Host: https://dongsun1-dev.vercel.app/

# Sitemaps
Sitemap: https://dongsun1-dev.vercel.app/server-sitemap.xml

```

모든 User-agent에 대해서 허용하고 sitemap의 URL까지 알려주면 내 도메인에 대한 sitemap을 가져갈 수 있도록 오픈한 것이다.

이제 배포를 하고 확인해보자!

![배포](https://ifh.cc/g/xGzsXz.png)

## 사이트맵 제출하기

잘 만들어졌으면 구글 서치 콘솔에 접속해서 Sitemaps를 클릭한다.
![사이트맵](https://ifh.cc/g/wDy7KN.png)

클릭한 뒤 사이트맵을 제출한다.

![사이트맵제출](https://ifh.cc/g/gSQtdT.png)

아래와 같이 상태가 성공이라면 끝이다!
![사이트맵제출성공](https://ifh.cc/g/vQaP6p.png)

성공하더라도 검색이 가능하려면 최대 2주정도 시간이 걸린다고 한다. 아직 등록한지 얼마 안되서 검색이 잘 안되는데 좀 더 기다려봐야겠다.