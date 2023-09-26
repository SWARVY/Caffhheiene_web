import React from 'react';
import UserDescription from '@/containers/main/UserDescription';
import RecentlyPost from '@/containers/main/RecentlyPost';

export default function Page() {
  return (
    <div className="flex-col mt-4 z-10 w-full items-center justify-center gap-3 lg:flex">
      <UserDescription />
      <RecentlyPost />
    </div>
  );
}
