import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, getPostBySlug } from '../../lib/matter-util';
import { ParsedUrlQuery } from 'querystring';
import Toc from '../../components/toc';

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
  const {
    frontMatter: { category, date, title },
    content,
  } = post;

  const formatDate = moment(date).format('MMM MM, YYYY');

  return (
    <div className="container flex mx-auto px-16 py-8">
      <div className="w-full px-16">
        <div className="border-b pb-2 mb-8">
          <h1 className="text-4xl font-bold pb-2">{title}</h1>
          <div>
            {formatDate} | {category}
          </div>
        </div>
        <div className="flex">
          <ReactMarkdown
            className="w-5/6 prose max-w-none pr-8 prose-p:m-0 prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent"
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
          <Toc />
        </div>
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const post: IPost = await getPostBySlug(slug);

  return {
    props: {
      post,
    },
  };
};
