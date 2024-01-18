import { type Post } from '@/contentlayer/generated'
import { getAllPostLength } from '@/utils/getPost'
import PostList from './PostList'
import PostPagination from './PostPagination'

interface PostWrapperProps {
  category: string
  pageNum: number
  selectedPost: Array<[number, Post]>
  selectedAllPostLen: number
}

export default function PostWrapper({
  category,
  pageNum,
  selectedPost,
  selectedAllPostLen,
}: PostWrapperProps) {
  const allPostLen = getAllPostLength()

  return (
    <div className="grid w-full gap-10">
      <PostList posts={selectedPost} allPostLen={allPostLen} />
      <PostPagination
        category={category}
        pageNum={pageNum}
        selectedAllPostLen={selectedAllPostLen}
      />
    </div>
  )
}
