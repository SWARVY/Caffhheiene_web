'use client'

import PostList from '@/containers/posts/PostList'
import PostPagination from '@/containers/posts/PostPagination'
import { type Post } from '@/contentlayer/generated'
import { getAllPost, getSelectedPagePost } from '@/utils/getPost'
import { useEffect, useState } from 'react'

export default function PostWrapper() {
  const allPosts: Array<[number, Post]> = Array.from(
    getAllPost(),
    (post, idx) => [idx, post]
  )
  const [page, setPage] = useState<number>(1)
  const [posts, setPosts] = useState<Array<[number, Post]>>()

  useEffect(() => {
    setPosts(getSelectedPagePost(allPosts, page))
  }, [page])

  return (
    <div className="grid gap-10">
      {posts !== undefined ? (
        <PostList posts={posts} postLen={allPosts.length} />
      ) : (
        <></>
      )}
      {allPosts !== undefined ? (
        <PostPagination
          postLen={allPosts.length}
          currPage={page}
          setPage={setPage}
        />
      ) : (
        <></>
      )}
    </div>
  )
}
