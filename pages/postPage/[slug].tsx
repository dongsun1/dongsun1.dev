import moment from 'moment';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, getPostBySlug } from '../../lib/matter-util';

type TRouter = ReturnType<typeof useRouter> & {
  query: {
    slug: string;
  };
};

export default function PostPage({ post }: any) {
  console.info(post);
  const {
    frontMatter: { category, date, title },
    content,
  } = post;

  const formatDate = moment(date).format('MMM MM, YYYY');

  return (
    <div className="container px-32 py-20">
      <div className="w-5/6">
        <div className="border-b pb-2 mb-8">
          <h1 className="text-5xl font-bold pb-2">{title}</h1>
          <div>
            {formatDate} | {category}
          </div>
        </div>
        <ReactMarkdown
          className="prose max-w-none prose-p:m-0 prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent"
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, style, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter language={match[1]} {...props}>
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
      </div>
    </div>
  );
}

interface IPath {
  params: {
    slug: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.reduce<IPath[]>((acc, { slug }) => {
    acc.push({ params: { slug } });
    return acc;
  }, []);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const post = await getPostBySlug(slug as string);
  return {
    props: {
      post,
    },
  };
};