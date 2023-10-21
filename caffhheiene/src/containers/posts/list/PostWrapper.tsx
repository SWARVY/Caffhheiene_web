'use client'

import { type Post } from '@/contentlayer/generated'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import PostList from './PostList'
import PostPagination from './PostPagination'

interface PostWrapperProps {
  data: Array<[number, Post]>
}

export default function PostWrapper({ data }: PostWrapperProps) {
  const pathName = usePathname().split('/')
  const [targetCategory, setTargetCategory] = useState<string>('all')
  const [targetPageNum, setTargetPageNum] = useState<number>(1)
  const [posts, setPosts] = useState<Array<[number, Post]>>([])

  useEffect(() => {
    setTargetCategory(pathName[2])
    setTargetPageNum(Number(pathName[3]))

    if (targetCategory === 'all') {
      setPosts(data)
    } else {
      const selectedAllPostData = data.filter(([_, { category }]) => {
        const lowerCategory = category.map((item) => item.toLowerCase())
        const anotherTargetCategory = targetCategory + '\r'

        return (
          lowerCategory.includes(targetCategory) ||
          lowerCategory.includes(anotherTargetCategory)
        )
      })
      setPosts(selectedAllPostData)
    }
  }, [])

  return (
    <div className="grid gap-10">
      <PostList posts={posts} allPostLen={posts.length} />
      <PostPagination
        category={targetCategory}
        pageNum={targetPageNum}
        allPostLen={posts.length}
      />
    </div>
  )
}
