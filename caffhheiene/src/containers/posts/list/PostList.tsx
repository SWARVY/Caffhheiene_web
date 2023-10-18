import PostItem from '@/containers/posts/list/PostItem'
import { type Post } from '@/contentlayer/generated'

interface PostListProps {
  posts: Array<[number, Post]>
  allPostLen: number
}

export default function PostList({ posts, allPostLen }: PostListProps) {
  return (
    <div className="grid gap-10">
      <ul className="grid gap-8">
        {posts?.map(([id, post]) => (
          <PostItem key={id} id={allPostLen - id - 1} post={post} />
        ))}
      </ul>
    </div>
  )
}
