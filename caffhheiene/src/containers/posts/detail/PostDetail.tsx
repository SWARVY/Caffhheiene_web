import { USER } from '@/constants/user'
import MdxRenderer from '@/containers/posts/detail/MdxRenderer'
import PostWriterInfo from '@/containers/posts/detail/PostWriterInfo'
import PrevNextButton from '@/containers/posts/detail/PrevNextButton'
import Tag from '@/components/Tag'
import { getPostContent, getSelectedSeriesPost } from '@/utils/getPost'
import { CalendarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import InternalToc from './InternalToc'
import SidebarToc from './SidebarToc'
import SeriesList from './SeriesList'

export default function PostDetail({ id }: { id: string }) {
  const { prev, curr, next } = getPostContent(Number(id))
  const seriesList = curr.series ? getSelectedSeriesPost(curr.series) : []

  return (
    <article className="grid gap-y-12">
      <div className="flex gap-x-12">
        <div className="grid w-full shrink gap-10">
          <header className="grid w-full gap-y-3">
            <h2 className="break-words break-keep text-4xl font-bold dark:text-white sm:text-5xl">
              {curr.title}
            </h2>
            <div className="grid gap-4 p-1">
              <div className="flex items-center gap-3">
                <p className="text-lg font-semibold dark:text-white">
                  {USER.name}
                </p>
                <time className="flex items-center gap-x-1">
                  <CalendarIcon className="h-4 w-4 fill-ochre_light dark:fill-ochre" />
                  <span className="text-md text-gray-400 dark:text-gray-300">
                    {curr.date}
                  </span>
                </time>
              </div>
              <div className="flex gap-2 font-BlogContent">
                {curr.category.map((tag: string) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
            </div>
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
