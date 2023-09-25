import React from 'react';
import MainUserDescription from '@/app/main/MainUserDescription';
import MainRecentlyPost from '@/app/main/MainRecentlyPost';

export default function Page() {
  return (
    <div className="flex flex-col mt-4 z-10 w-full items-center justify-center gap-3 lg:flex">
      <MainUserDescription />
      <MainRecentlyPost />
    </div>
  );
}
