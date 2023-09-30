import { SUB_TITLE } from '@/constants/title';
import { getRecentlyPostData } from '@/utils/getPostData';
import React from 'react';
import Card from '@/components/Card';

export default function RecentlyPost() {
  const posts = getRecentlyPostData();

  return (
    <div className="flex-col w-full mt-3">
      <h1 className="text-4xl font-bold italic">{SUB_TITLE.recentlyPosts}</h1>
      <div className="mt-8 grid grid-cols-2 gap-4">
        {posts.map((post, idx) => (
          <Card key={idx} id={idx} post={post} />
        ))}
      </div>
    </div>
  );
}
