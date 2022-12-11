import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Toc from '../../components/toc';
import { getPostBySlug } from '../api/getPostBySlug/[slug]';
import { vscDarkPlus, coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from 'next-themes';
import Utterances from '../../components/utterances';
import styled from '@emotion/styled';

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

interface IPost {
  frontMatter: {
    [key: string]: string;
  };
  content: string;
}

export default function PostPage({ post }: { post: IPost }) {
  const { theme = 'dark' } = useTheme();

  const {
    frontMatter: { category, date, title },
    content,
  } = post;

  const formatDate = moment(new Date(date)).format('MMM DD, YYYY');

  return (
    <div className="container flex mx-auto w-full px-4 lg:px-16 lg:py-8">
      <div className="w-full lg:px-16">
        <div className="border-b pb-2 mb-8">
          <h1 className="text-4xl font-bold pb-2">{title}</h1>
          <div>
            {formatDate} | {category}
          </div>
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
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { slug } = params as IParams;
    const post = await getPostBySlug({ slug });
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
