import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { vscDarkPlus, coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from 'next-themes';
import styled from '@emotion/styled';
import { IPost } from 'interfaces/post.interface';
import axios from 'lib/axios';
import { NoSsr } from '@mui/material';
import dynamic from 'next/dynamic';

const Container = dynamic(import('components/container'));
const Toc = dynamic(import('components/toc'));
const Utterances = dynamic(import('components/utterances'));

const CustomTable = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
  overflow-x: scroll;
  th {
    white-space: nowrap;
  }
  td {
    white-space: nowrap;
  }
`;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function PostPage({ post }: { post: IPost }) {
  const { theme = 'dark' } = useTheme();
  const { category, date, title, desc, content } = post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <Container title={title} desc={desc} date={new Date(date).toISOString()}>
      <div className="container flex mx-auto w-full px-4 lg:px-16 lg:py-8">
        <div className="w-full lg:px-16">
          <div className="border-b pb-2 mb-8">
            <h1 className="text-4xl font-bold pb-2">{title}</h1>
            <NoSsr>
              {formattedDate} | {category}
            </NoSsr>
          </div>
          <div className="flex w-full mb-8">
            <ReactMarkdown
              className="w-full max-width-full lg:w-5/6 text-lg dark:prose-invert prose max-w-none lg:pr-8 prose-p:m-0 prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent"
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({ children }) => (
                  <CustomTable>
                    <table>{children}</table>
                  </CustomTable>
                ),
                code: ({ node, inline, className, children, style, ...props }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter style={theme === 'dark' ? vscDarkPlus : coy} language={match[1]} {...props}>
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
            <Toc />
          </div>
          <Utterances />
        </div>
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: { slugs } = {} } = await axios.get('/api/getSlugs');

  const paths = slugs.map((slug: string) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { slug } = params as IParams;
    const { data: { post } = {} } = await axios.get(`/api/getPostBySlug/${slug}`);

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
