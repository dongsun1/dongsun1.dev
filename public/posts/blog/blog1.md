---
title: "[Next.js] 마크다운 파일 불러오는 법"
desc: '오늘은 Next.js에서 마크다운 파일을 불러오는 방법에 대해 포스팅하겠다.
나같은 경우는 public/posts 디렉토리 내에서 마크다운 파일을 관리한다.
먼저 gray-matter를 install해준다.
gray-matter란 마크다운 파일로 블로그를 만들경우 거의 필수로 사용되어지는 라이브러리이다.'
date: 2022/12/12
category: Next.js
---

오늘은 Next.js에서 마크다운 파일을 불러오는 방법에 대해 포스팅하겠다.

나같은 경우는 public/posts 디렉토리 내에서 마크다운 파일을 관리한다.

![public/posts](https://ifh.cc/g/pwBwYF.png)

## gray-matter

>npm install --save gray-matter

먼저 gray-matter를 install해준다.

gray-matter란 마크다운 파일로 블로그를 만들경우 거의 필수로 사용되어지는 라이브러리이다.

스트링 또는 텍스트파일의 front-matter를 파싱해준다.
#
ex) .md
```javascript
---
title: "title"
desc: 'desc'
date: 2022/12/12
category: Algorithm
---
## 컨텐츠
```

결과
```javascript
{
  content: '## 컨텐츠',
  data: {
    title: "title"
    desc: 'desc'
    date: 2022/12/12
    category: Algorithm
  }
}
```

## 마크다운 불러오는 함수

```javascript
// getAllPosts.ts
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(postsDirectory + '/posts');

  const posts = files.map((fileName) => {
    const file = fs.readFileSync(`${postsDirectory}/posts/${fileName}`, 'utf-8');
    const { data: frontMatter, content } = matter(file);

    return {
      frontMatter,
      slug: fileName.replace(/\.md/, ''),
      content,
    };
  });

  posts.sort(({ frontMatter: { date: a } }, { frontMatter: { date: b } }) => new Date(b).getTime() - new Date(a).getTime());

  return posts;
}
```

fs와 path를 활용해서 public/posts 디렉토리 안에 있는 모든 파일이름을 불러온다.
#
그 후 filename으로 파일 하나씩 찾으면서 matter함수를 사용해서 frontMatter와 content를 구분한 뒤 posts에 담아준다.
#
최신순으로 정렬하기 위해 sort한 뒤 return한다.

## 마크다운 불러오기

```javascript
// index.tsx
import { GetServerSideProps } from 'next';
import { IPost } from '../interfaces/post.interface';
import { getAllPosts } from './api/getAllPosts';

export default function Index({ posts }: { posts: IPost[] }) {
  return ...;
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const posts = await getAllPosts();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
```

SSR을 사용한다면 getServerSideProps, SSG라면 getStaticProps를 사용해서 props에 posts를 담아서 return해준다.

## 개선사항

public/posts 디렉토리내에 마크다운 파일들이 많아지면 많아질수록 관리하기가 힘들어질 것이다.

이를 개선하기 위해 카테고리별로 폴더를 찢어서 관리하면 좋을 것 같다는 생각이 들었다.

![public/posts](https://ifh.cc/g/1FshXp.png)

### 개선된 함수

```javascript
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { IPost } from '../../interfaces/post.interface';

const recursiveGetPosts = (filePath: string) => {
  const postsDirectory = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(postsDirectory + filePath);

  const posts = files.reduce<IPost[]>((acc, fileName) => {
    if (!fileName.includes('.md')) {
      acc.push(...recursiveGetPosts(`${filePath}/${fileName}`));
    } else {
      const file = fs.readFileSync(`${postsDirectory}/${filePath}/${fileName}`, 'utf-8');
      const { data: frontMatter, content } = matter(file);

      acc.push({
        frontMatter,
        slug: fileName.replace(/\.md/, ''),
        content,
      });
    }
    return acc;
  }, []);

  return posts;
};

export async function getAllPosts() {
  const posts = recursiveGetPosts('/posts');

  posts.sort(({ frontMatter: { date: a } }, { frontMatter: { date: b } }) => new Date(b).getTime() - new Date(a).getTime());

  return posts;
}
```

하드코딩으로 카테고리별 조회를 해도 되지만 그렇게 조회하면 개발자 답지 않다고 생각했다.
#
그래서 생각한 방법으로 재귀함수를 활용해서 디렉토리 끝까지 들어가 모든 마크다운 파일들을 가져오도록 하였다.
#
fileName에 .md가 포함되어 있지 않다면 디렉토리라고 판단하고 filePath에 fileName을 붙혀 다시 한번 함수를 돌린다.
#
이렇게 하면 public/posts안에 100번째 디렉토리에 있는 마크다운 파일도 가져올 수 있다!