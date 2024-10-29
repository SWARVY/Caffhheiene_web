import Card from '@/components/Card'
import SubTitle from '@/components/SubTitle'
import { getRecentPost } from '@/utils/getPost'
import React from 'react'

import MainPost from './MainPost'

export default function RecentlyPost() {
  const { mainPost, subPosts, postAmount } = getRecentPost()

  return (
    <div className="flex flex-col items-center w-full gap-y-20">
      <div className="space-y-6 size-full">
        <SubTitle title="Featured" />
        <MainPost
          key={mainPost[0]}
          id={postAmount - mainPost[0] - 1}
          post={mainPost[1]}
        />
      </div>
      <div className="space-y-6 size-full">
        <SubTitle title="Latest" />
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
          {subPosts.map(([id, post]) => (
            <Card key={id} id={postAmount - id - 1} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
