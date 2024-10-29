import Introduce from '@/containers/main/Introduce'
import RecentlyPost from '@/containers/main/RecentlyPost'

export default function Page() {
  return (
    <div className="flex flex-col w-full p-5 gap-y-10 md:p-3 xl:p-0">
      <Introduce />
      <RecentlyPost />
    </div>
  )
}
