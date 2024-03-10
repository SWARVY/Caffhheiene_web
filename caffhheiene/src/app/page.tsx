import Introduce from '@/containers/main/Introduce'
import RecentlyPost from '@/containers/main/RecentlyPost'

export default function Page() {
  return (
    <div className="grid w-full max-w-3xl gap-y-20 p-5 xl:p-0">
      <Introduce />
      <RecentlyPost />
    </div>
  )
}
