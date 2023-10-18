import PostFilters from '@/containers/posts/list/PostFilters'
import PostWrapper from '@/containers/posts/list/PostWrapper'

export default function posts() {
  return (
    <div className="grid gap-10">
      <PostFilters />
      <PostWrapper />
    </div>
  )
}
