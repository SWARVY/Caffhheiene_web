import React from 'react';
import UserDescription from '@/components/main/UserDescription';
import RecentlyPost from '@/components/main/RecentlyPost';

export default function Page() {
  return (
    <div className="flex flex-col mt-4 z-10 w-full items-center justify-center gap-3 lg:flex">
      <UserDescription />
      <RecentlyPost />
    </div>
  );
}
