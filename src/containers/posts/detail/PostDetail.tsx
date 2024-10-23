import MdxRenderer from '@/containers/posts/detail/MdxRenderer'
import PostWriterInfo from '@/containers/posts/detail/PostWriterInfo'
import PrevNextButton from '@/containers/posts/detail/PrevNextButton'
import { getPostContent, getSelectedSeriesPost } from '@/utils/getPost'
import Image from 'next/image'
import InternalToc from './InternalToc'
import SidebarToc from './SidebarToc'
import SeriesList from './SeriesList'
import PostInfo from './PostInfo'

export default function PostDetail({ id }: { id: string }) {
  const { prev, curr, next } = getPostContent(Number(id))
  const seriesList = curr.series ? getSelectedSeriesPost(curr.series) : []

  return (
    <div className="space-y-12">
      <div className="flex gap-x-12">
        <div className="grid w-full shrink gap-y-10">
          <div className="w-full space-y-6">
            <h2 className="break-words break-keep text-4xl font-bold dark:text-white sm:text-5xl">
              {curr.title}
            </h2>
            <PostInfo curr={curr} />
            <Image
              className="w-full border border-black"
              src={curr.thumbnail}
              alt="Post Thumbnail"
              width={800}
              height={600}
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-y-10">
            <InternalToc />
            <MdxRenderer post={curr} />
          </div>
        </div>
        <SidebarToc />
      </div>
      <div>
        <PrevNextButton id={Number(id)} prev={prev} next={next} />
        <PostWriterInfo />
      </div>
      {curr.series ? (
        <SeriesList seriesName={curr.series} series={seriesList} />
      ) : null}
    </div>
  )
}
