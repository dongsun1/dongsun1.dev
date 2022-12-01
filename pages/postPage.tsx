import moment from 'moment';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type TRouter = ReturnType<typeof useRouter> & {
  query: {
    post: string;
  };
};

export default function PostPage() {
  const { query } = useRouter() as TRouter;

  const {
    frontMatter: { category, date, title },
    content,
  } = JSON.parse(query.post);

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
          className="prose max-w-none prose-p:m-0"
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, style, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
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
