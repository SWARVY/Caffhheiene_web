import PostFilters from '@/containers/posts/list/PostFilters'
import PostWrapper from '@/containers/posts/list/PostWrapper'
import { getSelectedCategoryPost } from '@/utils/getPost'
import { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: {
    category: string
    pageNum: string
  }
}

export const generateMetadata = async (
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => ({
  title: `기록 | ${props.params.pageNum}페이지 [${props.params.category}]`,
  description: `신현호 기술서재 / ${props.params.pageNum}페이지[${props.params.category}]`,
  openGraph: {
    ...(await parent).openGraph,
    title: `기록 | ${props.params.pageNum}페이지 [${props.params.category}]`,
    description: `신현호 기술서재 / ${props.params.pageNum}페이지[${props.params.category}]`,
    url: `https://caffhheiene.vercel.app/posts/${props.params.category}/${props.params.pageNum}`,
  },
})

export default async function posts({
  params,
}: {
  params: { category: string; pageNum: string }
}) {
  const data = getSelectedCategoryPost(params.category, Number(params.pageNum))

  return (
    <div className="grid w-full max-w-3xl gap-y-10">
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
