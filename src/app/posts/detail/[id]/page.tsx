import PostComments from '@/containers/posts/detail/PostComments'
import PostDetail from '@/containers/posts/detail/PostDetail'
import { getAllPostLength, getSelectedPostDetail } from '@/utils/getPost'
import { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: Promise<{
    id: string
  }>
}

export const generateMetadata = async (
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { title, description, thumbnail } = getSelectedPostDetail(
    Number((await props.params).id)
  )

  return {
    title,
    description,
    alternates: {
      canonical: `https://caffhheiene.vercel.app/posts/detail/${(await props.params).id}`,
    },
    openGraph: {
      ...(await parent).openGraph,
      title,
      description,
      url: `https://caffhheiene.vercel.app/posts/detail/${(await props.params).id}`,
      images: [
        {
          url: `https://caffhheiene.vercel.app${thumbnail}`,
          width: 850,
          height: 600,
          alt: `${title} / ${description}`,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return Array.from({ length: getAllPostLength() }, (_, idx) => ({
    id: (idx + 1).toString(),
  }))
}

export default async function postDetail(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  return (
    <div className="flex flex-col gap-y-10 p-5 xl:p-0">
      <PostDetail id={params.id} />
      <PostComments />
    </div>
  )
}
