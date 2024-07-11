import Introduce from '@/containers/main/Introduce'
import RecentlyPost from '@/containers/main/RecentlyPost'

export default function Page() {
  return (
    <section className="grid w-full max-w-3xl gap-y-20 p-5 md:p-2 xl:p-0">
      <Introduce />
      <RecentlyPost />
    </section>
  )
}
