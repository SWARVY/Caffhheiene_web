import PostItem from '@/containers/posts/PostItem'
import { getAllPost } from '@/utils/getPost'

export default function PostList() {
  const posts = getAllPost()

  return (
    <ul className="grid gap-8">
      {posts.map((post, idx) => (
        <PostItem key={idx} id={posts.length - idx - 1} post={post} />
      ))}
    </ul>
  )
}
