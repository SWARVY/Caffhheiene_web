import { type Post } from '@/contentlayer/generated'
import { type MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import '../style/reset.css'

interface MdxRendererProps {
  post: Post
}

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link
      href={href as string}
      className="text-lg text-gray-400 no-underline transition duration-150 ease-in hover:text-black dark:text-gray-300">
      {children}
    </Link>
  ),
  strong: ({ children }) => (
    <strong className="dark:text-white">{children}</strong>
  ),
  h1: ({ children }) => (
    <h1 className="hover:underline-offset-3 hover:underline dark:text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => <h2 className="dark:text-white">{children}</h2>,
  h3: ({ children }) => <h3 className="dark:text-white">{children}</h3>,
}

export default function MdxRenderer({ post }: MdxRendererProps) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="prose prose-neutral max-w-3xl dark:text-white">
      {post.body.code !== undefined && (
        <MDXContent components={mdxComponents} />
      )}
    </div>
  )
}
