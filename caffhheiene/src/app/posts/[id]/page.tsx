import PostDetail from '@/containers/posts/PostDetail';

export default function postDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <PostDetail id={params.id} />
    </div>
  );
}
