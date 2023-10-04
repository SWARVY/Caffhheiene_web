import PostComments from '@/containers/posts/PostComments';
import PostDetail from '@/containers/posts/PostDetail';

export default function postDetail({ params }: { params: { id: string } }) {
  return (
    <div className="grid gap-10">
      <PostDetail id={params.id} />
      <PostComments />
    </div>
  );
}
