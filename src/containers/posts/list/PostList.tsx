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
    <ul ref={scope} className="w-full space-y-8">
      {posts?.map(([id, post]) => (
        <PostItem key={post.url} id={allPostLen - id - 1} post={post} />
      ))}
    </ul>
  )
}
