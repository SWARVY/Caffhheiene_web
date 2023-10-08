import { type Post } from '@/contentlayer/generated'
import { type MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import './style/reset.css'

interface MdxRendererProps {
  post: Post
}

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link
      href={href as string}
      className="text-lg text-gray-500 no-underline transition duration-150 ease-in hover:text-black">
      {children}
    </Link>
  ),
  h1: ({ children }) => (
    <h1 className="hover:underline-offset-3 hover:underline">{children}</h1>
  ),
}

export default function MdxRenderer({ post }: MdxRendererProps) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="prose prose-neutral w-full">
      {post.body.code && <MDXContent components={mdxComponents} />}
    </div>
  )
}
