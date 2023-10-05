import PostItem from '@/containers/posts/PostItem';
import { type Post } from '@/contentlayer/generated';

interface PostListProps {
  posts: Array<[number, Post]>;
  postLen: number;
}

export default function PostList({ posts, postLen }: PostListProps) {
  // const scope = useStaggerAnimation(isLoaded, setLoaded);

  return (
    <div className="grid gap-10">
      <ul className="grid gap-8">
        {posts?.map(([id, post]) => (
          <PostItem key={id} id={postLen - id - 1} post={post} />
        ))}
      </ul>
    </div>
  );
}
