import PostWriterInfo from '@/containers/posts/detail/PostWriterInfo'
import PrevNextButton from '@/containers/posts/detail/PrevNextButton'
import { getPostContent, getSelectedSeriesPost } from '@/utils/getPost'
import Image from 'next/image'

import InternalToc from './InternalToc'
import mdxComponents from './MdxComponents'
import MDXContent from './MdxContent'
import PostInfo from './PostInfo'
import SeriesList from './SeriesList'
import SidebarToc from './SidebarToc'

export default function PostDetail({ id }: { id: string }) {
  const { prev, curr, next } = getPostContent(Number(id))
  const seriesList = curr.series ? getSelectedSeriesPost(curr.series) : []

  return (
    <div className="space-y-12">
      <div className="flex gap-x-12">
        <div className="grid w-full shrink gap-y-10">
          <div className="w-full space-y-6">
            <h2 className="text-4xl font-bold break-words break-keep sm:text-5xl dark:text-white">
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
            <MDXContent content={curr.content} components={mdxComponents} />
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
