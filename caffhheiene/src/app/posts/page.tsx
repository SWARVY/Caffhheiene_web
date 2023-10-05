import PostFilters from '@/containers/posts/PostFilters';
import PostWrapper from '@/containers/posts/PostWrapper';

export default function posts() {
  return (
    <div className="grid gap-10">
      <PostFilters />
      <PostWrapper />
    </div>
  );
}
