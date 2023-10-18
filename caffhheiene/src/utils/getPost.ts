import { MAIN_SETTING } from '@/constants/mainSetting'
import { POST_SETTING } from '@/constants/postSetting'
import { allPosts, type Post } from '@/contentlayer/generated'

interface Category {
  name: string
  amount: number
}

export function getAllPostLength() {
  return allPosts.length
}

export function getAllPost(): Array<[number, Post]> {
  return allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post, idx) => [idx, post])
}

export function getSelectedPost(targetCategory: string, targetPageNum: number) {
  const sortedPostData = getAllPost()

  if (targetCategory === 'all') {
    return {
      posts: sortedPostData.slice(
        (targetPageNum - 1) * POST_SETTING.contentsPerPage,
        targetPageNum * POST_SETTING.contentsPerPage
      ),
      selectedPostsLength: sortedPostData.length,
    }
  }

  const selectedAllPostData = sortedPostData.filter(([_, { category }]) => {
    const lowerCategory = category.map((item) => item.toLowerCase())
    const anotherTargetCategory = targetCategory + '\r'

    return (
      lowerCategory.includes(targetCategory) ||
      lowerCategory.includes(anotherTargetCategory)
    )
  })

  return {
    posts: selectedAllPostData.slice(
      targetPageNum - 1 * POST_SETTING.contentsPerPage,
      targetPageNum * POST_SETTING.contentsPerPage
    ),
    selectedPostsLength: selectedAllPostData.length,
  }
}

export function getAllCategory() {
  const categories: Category[] = [{ name: 'All', amount: 0 }]

  allPosts.forEach(({ category }) => {
    category.forEach((categoryItem) => {
      const target = categories.findIndex((item) => item.name === categoryItem)

      if (target === -1) {
        categories.push({ name: categoryItem, amount: 1 })
      } else {
        categories[target].amount += 1
      }
    })
    categories[0].amount += 1
  })

  return categories
}

export function getRecentPost(): {
  posts: Array<[number, Post]>
  allPostLen: number
} {
  const sortedPostData = getAllPost()

  return {
    posts: sortedPostData.slice(0, MAIN_SETTING.recentlyPostDataAmount),
    allPostLen: sortedPostData.length,
  }
}

export function getPostContent(id: number) {
  const purePostData = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return {
    prev: purePostData[purePostData.length - id + 1] ?? null,
    curr: purePostData[purePostData.length - id],
    next: purePostData[purePostData.length - id - 1] ?? null,
  }
}
