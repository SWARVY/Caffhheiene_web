import Introduce from '@/containers/main/Introduce'
import RecentlyPost from '@/containers/main/RecentlyPost'

export default function Page() {
  return (
    <div className="w-full space-y-10 p-5 md:p-2 xl:p-0">
      <Introduce />
      <RecentlyPost />
    </div>
  )
}
