import '../style/Intellij-prism.css'
import { type Post } from '@/contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import mdxComponents from './MdxComponents'

interface MdxRendererProps {
  post: Post
}

export default function MdxRenderer({ post }: MdxRendererProps) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div
      id="content"
      className="prose prose-neutral max-w-full overflow-hidden font-BlogPost dark:text-white">
      {post.body.code !== undefined && (
        <MDXContent components={mdxComponents} />
      )}
    </div>
  )
}
