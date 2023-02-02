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
  // const { data: { paths } = {} } = await axios.get('/api/getPostPaths');

  return {
    paths: [
      { params: { slug: '63bb7a009933a949a4c16285' } },
      { params: { slug: '63bbc50d9933a949a4c16286' } },
      { params: { slug: '63bbc6499933a949a4c16287' } },
      { params: { slug: '63bbc6799933a949a4c16288' } },
      { params: { slug: '63bbc6be9933a949a4c16289' } },
      { params: { slug: '63bbc7429933a949a4c1628b' } },
      { params: { slug: '63bd247d9933a949a4c1628c' } },
      { params: { slug: '63bd259a9933a949a4c1628e' } },
      { params: { slug: '63bd25c99933a949a4c1628f' } },
      { params: { slug: '63bd25e99933a949a4c16290' } },
      { params: { slug: '63bd26069933a949a4c16291' } },
      { params: { slug: '63bd261f9933a949a4c16292' } },
      { params: { slug: '63bd26349933a949a4c16293' } },
      { params: { slug: '63bd264e9933a949a4c16294' } },
      { params: { slug: '63bd26689933a949a4c16295' } },
      { params: { slug: '63bd26849933a949a4c16296' } },
      { params: { slug: '63bd26a89933a949a4c16297' } },
      { params: { slug: '63bd26c29933a949a4c16298' } },
      { params: { slug: '63bd26dd9933a949a4c16299' } },
      { params: { slug: '63bd26f69933a949a4c1629a' } },
      { params: { slug: '63bd270f9933a949a4c1629b' } },
      { params: { slug: '63bd272a9933a949a4c1629c' } },
      { params: { slug: '63bd274b9933a949a4c1629d' } },
      { params: { slug: '63bd276c9933a949a4c1629e' } },
      { params: { slug: '63bd27829933a949a4c1629f' } },
      { params: { slug: '63bd279e9933a949a4c162a0' } },
      { params: { slug: '63bd27b79933a949a4c162a1' } },
      { params: { slug: '63bd27d39933a949a4c162a2' } },
      { params: { slug: '63bd27ec9933a949a4c162a3' } },
      { params: { slug: '63bd28039933a949a4c162a4' } },
      { params: { slug: '63bd281c9933a949a4c162a5' } },
      { params: { slug: '63bd28349933a949a4c162a6' } },
      { params: { slug: '63bd284e9933a949a4c162a7' } },
      { params: { slug: '63bd28659933a949a4c162a8' } },
      { params: { slug: '63bd287d9933a949a4c162a9' } },
      { params: { slug: '63bd28999933a949a4c162aa' } },
      { params: { slug: '63bf8ac878e30a0d278d75e1' } },
      { params: { slug: '63c89dec78e30a0d278d75e2' } },
      { params: { slug: '63da21011018b14058d12ce9' } },
    ],
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
