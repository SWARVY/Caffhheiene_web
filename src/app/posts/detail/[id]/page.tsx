import PostComments from '@/containers/posts/detail/PostComments'
import PostDetail from '@/containers/posts/detail/PostDetail'
import { getSelectedPostDetail } from '@/utils/getPost'
import { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: {
    id: string
  }
}

export const generateMetadata = async (
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { title, description, thumbnail } = getSelectedPostDetail(
    Number(props.params.id)
  )

  return {
    title,
    description,
    openGraph: {
      ...(await parent).openGraph,
      title,
      description,
      url: `https://caffhheiene.vercel.app/posts/detail/${props.params.id}`,
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

export default async function postDetail({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="flex flex-col gap-y-10 p-5 md:p-2 xl:p-0">
      <PostDetail id={params.id} />
      <PostComments />
    </div>
  )
}
