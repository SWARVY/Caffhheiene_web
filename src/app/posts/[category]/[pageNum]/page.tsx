import POST_SETTING from '@/constants/postSetting'
import PostWrapper from '@/containers/posts/list/PostWrapper'
import { getAllCategory, getSelectedCategoryPost } from '@/utils/getPost'
import { Metadata, ResolvingMetadata } from 'next'

interface PageParams {
  category: string
  pageNum: string
}

interface PageProps {
  params: Promise<PageParams>
}

const parseSeries = (name: string) => {
  if (name.includes('series-')) {
    return decodeURI(name).split('-')[1].replaceAll(/_/g, ' ')
  }

  return name
}

export const generateMetadata = async (
  props: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { pageNum, category } = await props.params

  return {
    title: `기록 | ${pageNum}페이지 [${parseSeries(category)}]`,
    description: `신현호 기술서재 / ${pageNum}페이지[${category}]`,
    alternates: {
      canonical: `https://caffhheiene.vercel.app/posts/${category}/${pageNum}`,
    },
    openGraph: {
      ...(await parent).openGraph,
      title: `기록 | ${pageNum}페이지 [${category}]`,
      description: `신현호 기술서재 / ${pageNum}페이지[${category}]`,
      url: `https://caffhheiene.vercel.app/posts/${category}/${pageNum}`,
    },
  }
}

export async function generateStaticParams() {
  const { categories } = getAllCategory()
  const staticParams: PageParams[] = []

  categories.forEach((category) => {
    const calculated = {
      div: category.amount / POST_SETTING.contentsPerPage,
      mod: category.amount % POST_SETTING.contentsPerPage,
    }
    const pageLen = calculated.mod > 0 ? calculated.div + 1 : calculated.div

    for (let i = 1; i <= pageLen; i += 1) {
      staticParams.push({ category: category.name, pageNum: i.toString() })
    }
  })

  return staticParams
}

export default async function posts({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { category, pageNum } = await params
  const { selectedPost, selectedAllPostLen } = getSelectedCategoryPost(
    category,
    Number(pageNum)
  )

  return (
    <>
      <h1 className="hidden">{`기록 | ${pageNum}페이지 [${parseSeries(category)}]`}</h1>
      <PostWrapper
        category={category}
        pageNum={Number(pageNum)}
        selectedPost={selectedPost}
        selectedAllPostLen={selectedAllPostLen}
      />
    </>
  )
}
