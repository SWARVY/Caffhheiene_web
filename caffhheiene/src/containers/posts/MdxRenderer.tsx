import { type Post } from '@/contentlayer/generated'
import { type MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import './style/reset.css'

interface MdxRendererProps {
  post: Post
}

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
}

export default function MdxRenderer({ post }: MdxRendererProps) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="prose prose-neutral">
      <MDXContent components={mdxComponents} />
    </div>
  )
}
