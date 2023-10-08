import PostFilters from '@/containers/posts/PostFilters'
import dynamic from 'next/dynamic'

const DynamicPostWrapper = dynamic(
  async () => await import('@/containers/posts/PostWrapper')
)

export default function posts() {
  return (
    <div className="grid gap-10">
      <PostFilters />
      <DynamicPostWrapper />
    </div>
  )
}
