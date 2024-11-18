import PrevNextButton from '@/containers/posts/detail/PrevNextButton'
import { getPostContent, getSelectedSeriesPost } from '@/utils/getPost'
import Image from 'next/image'

import InternalToc from './InternalToc'
import MDX from './MdxComponents'
import MDXContent from './MdxContent'
import PostInfo from './PostInfo'
import PostWriterInfo from './PostWriterInfo'
import SeriesList from './SeriesList'
import SidebarToc from './SidebarToc'

export default function PostDetail({ id }: { id: string }) {
  const { prev, curr, next } = getPostContent(Number(id))
  const seriesList = curr.series ? getSelectedSeriesPost(curr.series) : []

  return (
    <div className="space-y-12 lg:mt-4">
      <div className="flex gap-x-12">
        <div className="w-full space-y-10">
          <div className="w-full space-y-6">
            <h2 className="break-words break-keep text-4xl font-bold sm:text-5xl dark:text-white">
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
          </div>
          <div className="grid w-full grid-cols-1 gap-y-10">
            <InternalToc />
            <MDXContent content={curr.content} components={MDX} />
          </div>
        </div>
        <SidebarToc />
      </div>
      <PrevNextButton id={Number(id)} prev={prev} next={next} />
      <PostWriterInfo />
      {curr.series ? (
        <SeriesList seriesName={curr.series} series={seriesList} />
      ) : null}
    </div>
  )
}
