// 'use client';
//
// import customAtomDark from '@/containers/posts/style/customAtomDark';
// import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import '@/containers/posts/style/reset.css';
//
// interface MarkdownRendererProps {
//   content: string;
// }
//
// export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
//   return (
//     <Markdown
//       className="markdown"
//       remarkPlugins={[remarkGfm]}
//       components={{
//         code({ node, className, children, ...props }) {
//           const match = /language-(\w+)/.exec(className ?? '');
//           return match != null ? (
//             <SyntaxHighlighter style={customAtomDark as any} PreTag="div" language={match[1]}>
//               {String(children).replace(/\n$/, '')}
//             </SyntaxHighlighter>
//           ) : (
//             <code className={className ?? ''} {...props}>
//               {children}
//             </code>
//           );
//         },
//       }}
//     >
//       {content}
//     </Markdown>
//   );
// }
