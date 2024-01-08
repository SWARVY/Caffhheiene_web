import SubTitle from '@/components/SubTitle'
import { SUB_TITLE } from '@/constants/title'
import { getRecentPost } from '@/utils/getPost'
import React from 'react'
import Card from '@/components/Card'

export default function RecentlyPost() {
  const { posts, allPostLen } = getRecentPost()

  return (
    <div className="mt-3 w-full flex-col">
      <SubTitle title={SUB_TITLE.recentlyPosts} />
      <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {posts.map(([id, post]) => (
          <Card key={id} id={allPostLen - id - 1} post={post} />
        ))}
      </div>
    </div>
  )
}
