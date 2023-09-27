import { TestPostData } from '@/containers/main/TestSources/TestPostData';
import React from 'react';
import Card from '@/components/Card';

export default function RecentlyPost() {
  return (
    <div className="flex flex-col w-full mt-3 text-start">
      <div className="mt-8 grid grid-cols-2 gap-4">
        {TestPostData.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </div>
  );
}
