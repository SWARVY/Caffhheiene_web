import PostList from '@/containers/posts/PostList';
import PostTags from '@/containers/posts/PostTags';

export default function posts() {
  return (
    <div className="grid gap-10">
      <PostTags />
      <PostList />
    </div>
  );
}
