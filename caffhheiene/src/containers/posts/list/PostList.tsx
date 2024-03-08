'use client'

import PostItem from '@/containers/posts/list/PostItem'
import { type Post } from '@/contentlayer/generated'
import useStaggerAnimation from '@/hooks/useStaggerAnimation'

interface PostListProps {
  posts: Array<[number, Post]>
  allPostLen: number
}

export default function PostList({ posts, allPostLen }: PostListProps) {
  const scope = useStaggerAnimation()

  return (
    <div className="grid w-full gap-10">
      <ul ref={scope} className="grid w-full gap-8">
        {posts?.map(([id, post]) => (
          <PostItem id={allPostLen - id - 1} post={post} />
        ))}
      </ul>
    </div>
  )
}
