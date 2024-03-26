import { USER } from '@/constants/user'
import MdxRenderer from '@/containers/posts/detail/MdxRenderer'
import PostWriterInfo from '@/containers/posts/detail/PostWriterInfo'
import PrevNextButton from '@/containers/posts/detail/PrevNextButton'
import Tag from '@/components/Tag'
import { getPostContent, getSelectedSeriesPost } from '@/utils/getPost'
import { CalendarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { SwatchIcon, TagIcon, UserIcon } from '@heroicons/react/16/solid'
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
          <header className="grid w-full gap-y-6">
            <h2 className="break-words break-keep text-4xl font-bold dark:text-white sm:text-5xl">
              {curr.title}
            </h2>
            <section className="flex items-center gap-x-2">
              <Image
                className="rounded-full ring-2 ring-ochre"
                src={USER.profileImg}
                width={60}
                height={60}
                alt="user profile img"
              />
              <div className="grid gap-2 p-1">
                <section className="flex items-center gap-2">
                  <div className="flex items-center gap-x-2">
                    <UserIcon className="h-4 w-4 fill-ochre_light dark:fill-ochre" />
                    <p className="text-sm font-semibold dark:text-white">
                      {USER.name}
                    </p>
                  </div>
                  <time className="flex items-center gap-x-1">
                    <CalendarIcon className="h-4 w-4 fill-ochre_light dark:fill-ochre" />
                    <span className="mt-1.5 font-BlogDeco text-sm font-bold">
                      {curr.date}
                    </span>
                  </time>
                </section>
                <section className="flex items-center gap-x-2">
                  <div className="flex items-center gap-2 font-BlogContent">
                    <TagIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
                    {curr.category.map((tag: string) => (
                      <Tag key={tag} tag={tag} />
                    ))}
                  </div>
                  <div
                    className={`${curr.series ? 'flex items-center gap-2' : 'hidden'}`}>
                    <SwatchIcon className="h-4 w-4 fill-ochre_light dark:fill-ochre" />
                    <p className="text-sm font-bold">{curr.series}</p>
                  </div>
                </section>
              </div>
            </section>
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
