import Carousel from '@/containers/main/Carousel'
import Introduce from '@/containers/main/Introduce'
import RecentlyPost from '@/containers/main/RecentlyPost'

export default function Page() {
  return (
    <div className="grid w-full space-y-20">
      <Introduce />
      <Carousel />
      <RecentlyPost />
    </div>
  )
}
