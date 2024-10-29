import Introduce from '@/containers/main/Introduce'
import RecentlyPost from '@/containers/main/RecentlyPost'

export default function Page() {
  return (
    <div className="w-full p-5 space-y-10 md:p-2 xl:p-0">
      <Introduce />
      <RecentlyPost />
    </div>
  )
}
