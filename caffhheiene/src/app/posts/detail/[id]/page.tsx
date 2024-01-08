import PostComments from '@/containers/posts/detail/PostComments'
import PostDetail from '@/containers/posts/detail/PostDetail'

export default function postDetail({ params }: { params: { id: string } }) {
  return (
    <div className="grid w-full justify-items-center gap-10">
      <PostDetail id={params.id} />
      <PostComments />
    </div>
  )
}
