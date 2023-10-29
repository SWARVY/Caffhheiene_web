import PostFilters from '@/containers/posts/list/PostFilters'
import PostWrapper from '@/containers/posts/list/PostWrapper'
import { getSelectedCategoryPost } from '@/utils/getPost'

export default function posts({ params }: { params: { category: string } }) {
  const selectedPosts = getSelectedCategoryPost(params.category)

  return (
    <div className="grid gap-10">
      <PostFilters />
      <PostWrapper data={selectedPosts} />
    </div>
  )
}
