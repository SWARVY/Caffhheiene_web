import PostFilters from '@/containers/posts/list/PostFilters'
import PostWrapper from '@/containers/posts/list/PostWrapper'
import { getAllPost } from '@/utils/getPost'

export default function posts() {
  const allPosts = getAllPost()

  return (
    <div className="grid gap-10">
      <PostFilters />
      <PostWrapper data={allPosts} />
    </div>
  )
}
