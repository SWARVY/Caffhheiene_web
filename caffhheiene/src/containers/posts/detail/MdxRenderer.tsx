import { type Post } from '@/contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import mdxComponents from './MdxComponents'
import '../style/reset.css'

interface MdxRendererProps {
  post: Post
}

export default function MdxRenderer({ post }: MdxRendererProps) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="prose prose-neutral max-w-3xl font-BlogPost dark:text-white">
      {post.body.code !== undefined && (
        <MDXContent components={mdxComponents} />
      )}
    </div>
  )
}
