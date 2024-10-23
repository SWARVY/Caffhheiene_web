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

const parseSeries = (name: string) => {
  if (name.includes('series-')) {
    return decodeURI(name).split('-')[1].replaceAll(/_/g, ' ')
  }

  return name
}

export const generateMetadata = async (
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => ({
  title: `기록 | ${props.params.pageNum}페이지 [${parseSeries(props.params.category)}]`,
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
    <section className="space-y-10 p-5 md:p-2 xl:p-0">
      <PostFilters />
      <PostWrapper
        category={params.category}
        pageNum={Number(params.pageNum)}
        selectedPost={data.selectedPost}
        selectedAllPostLen={data.selectedAllPostLen}
      />
    </section>
  )
}
