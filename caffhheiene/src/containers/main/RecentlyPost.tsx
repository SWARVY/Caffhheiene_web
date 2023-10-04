import SubTitle from '@/components/SubTitle';
import { SUB_TITLE } from '@/constants/title';
import { getRecentPost } from '@/utils/getPost';
import React from 'react';
import Card from '@/components/Card';

export default function RecentlyPost() {
  const posts = getRecentPost();

  return (
    <div className="mt-3 w-full flex-col">
      <SubTitle subTitle={SUB_TITLE.recentlyPosts} />
      <div className="mt-8 grid grid-cols-2 gap-4">
        {posts.map((post, idx) => (
          <Card key={idx} id={posts.length - idx - 1} post={post} />
        ))}
      </div>
    </div>
  );
}
