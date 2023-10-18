'use client'

import PostList from '@/containers/posts/list/PostList'
import { getAllPostLength, getSelectedPost } from '@/utils/getPost'
import PostPagination from './PostPagination'
import { usePathname } from 'next/navigation'

export default function PostWrapper() {
  const pathName = usePathname().split('/')
  const category = pathName[2].toLowerCase()
  const pageNum = Number(pathName[3])
  const { posts, selectedPostsLength } = getSelectedPost(category, pageNum)
  const allPostLen = getAllPostLength()

  return (
    <div className="grid gap-10">
      <PostList posts={posts} allPostLen={allPostLen} />
      <PostPagination allPostLen={selectedPostsLength} />
    </div>
  )
}
