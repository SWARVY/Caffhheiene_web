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
    <article className="grid gap-y-12">
      <div className="flex gap-x-12">
        <div className="grid w-full shrink gap-10">
          <header className="grid w-full gap-y-6">
            <h2 className="break-words break-keep text-4xl font-bold dark:text-white sm:text-5xl">
              {curr.title}
            </h2>
            <PostInfo curr={curr} />
            <Image
              className="w-full rounded-xl"
              src={curr.thumbnail}
              alt="Post Thumbnail"
              width={800}
              height={600}
            />
          </header>
          <div className="grid w-full gap-y-10">
            <InternalToc />
            <MdxRenderer post={curr} />
          </div>
        </div>
        <SidebarToc />
      </div>
      <div className="grid">
        <PrevNextButton id={Number(id)} prev={prev} next={next} />
        <PostWriterInfo />
      </div>
      {curr.series ? (
        <SeriesList seriesName={curr.series} series={seriesList} />
      ) : null}
    </article>
  )
}
