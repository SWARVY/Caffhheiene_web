import PostList from '@/containers/posts/PostList';
import PostFilters from '@/containers/posts/PostFilters';

export default function posts() {
  return (
    <div className="grid gap-10">
      <PostFilters />
      <PostList />
    </div>
  );
}
