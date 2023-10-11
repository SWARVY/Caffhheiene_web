import PostList from '@/containers/posts/PostList'
import { type Post } from '@/contentlayer/generated'
import { getAllPost } from '@/utils/getPost'

export default function PostWrapper() {
  const allPosts: Array<[number, Post]> = Array.from(
    getAllPost(),
    (post, idx) => [idx, post]
  )

  return (
    <div className="font-NanumBarunpen_Rg grid gap-10">
      <PostList posts={allPosts} postLen={allPosts.length} />
    </div>
  )
}
