'use client';
import customAtomDark from '@/containers/posts/style/customAtomDark';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';

interface TailwindMarkdownRendererProps {
  content: string;
}

export default function TailwindMarkdownRenderer({ content }: TailwindMarkdownRendererProps) {
  return (
    <div className="prose prose-blue">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className ?? '');
            return match != null ? (
              <SyntaxHighlighter style={customAtomDark as any} PreTag="div" language={match[1]}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className ?? ''} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
