import SubTitle from '@/components/SubTitle';
import { SUB_TITLE } from '@/constants/title';
import { getRecentlyPostData } from '@/utils/getPostData';
import React from 'react';
import Card from '@/components/Card';

export default function RecentlyPost() {
  const posts = getRecentlyPostData();

  return (
    <div className="flex-col w-full mt-3">
      <SubTitle subTitle={SUB_TITLE.recentlyPosts} />
      <div className="mt-8 grid grid-cols-2 gap-4">
        {posts.map((post, idx) => (
          <Card key={idx} id={idx} post={post} />
        ))}
      </div>
    </div>
  );
}
