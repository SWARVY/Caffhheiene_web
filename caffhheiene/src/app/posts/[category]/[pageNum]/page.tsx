import PostFilters from '@/containers/posts/list/PostFilters'
import PostWrapper from '@/containers/posts/list/PostWrapper'
import { getSelectedCategoryPost } from '@/utils/getPost'

export default function posts({
  params,
}: {
  params: { category: string; pageNum: string }
}) {
  const data = getSelectedCategoryPost(params.category, Number(params.pageNum))

  return (
    <div className="grid w-full gap-y-10">
      <PostFilters />
      <PostWrapper
        category={params.category}
        pageNum={Number(params.pageNum)}
        selectedPost={data.selectedPost}
        selectedAllPostLen={data.selectedAllPostLen}
      />
    </div>
  )
}
