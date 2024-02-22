import { MAIN_SETTING } from '@/constants/mainSetting'
import POST_SETTING from '@/constants/postSetting'
import { allPosts, type Post } from '@/contentlayer/generated'

interface Category {
  name: string
  amount: number
}

export const getAllPostLength = () => allPosts.length

export const getAllPost = (): Array<[number, Post]> =>
  allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post, idx) => [idx, post])

export const getAllCategory = () => {
  const categories: Category[] = [{ name: 'All', amount: 0 }]

  allPosts.forEach(({ category }) => {
    category.forEach((categoryItem) => {
      const target = categories.findIndex(
        (item) =>
          item.name === categoryItem || item.name === `${categoryItem}\r`
      )

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

export const getRecentPost = (): {
  posts: Array<[number, Post]>
  allPostLen: number
} => {
  const sortedPostData = getAllPost()

  return {
    posts: sortedPostData.slice(0, MAIN_SETTING.recentlyPostDataAmount),
    allPostLen: sortedPostData.length,
  }
}

export const getPostContent = (id: number) => {
  const purePostData = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return {
    prev: purePostData[purePostData.length - id + 1] ?? null,
    curr: purePostData[purePostData.length - id],
    next: purePostData[purePostData.length - id - 1] ?? null,
  }
}

export const getSelectedPostDetail = (id: number) => {
  const selectedPost = getAllPost().find(
    ([idx]) => idx === getAllPostLength() - id
  ) ?? [0, { title: '', description: '', thumbnail: '' }]

  return {
    title: selectedPost[1].title,
    description: selectedPost[1].description,
    thumbnail: selectedPost[1].thumbnail,
  }
}

export const getSelectedCategoryPost = (category: string, pageNum: number) => {
  const posts = getAllPost()
  const lastCategory = `${category}\r`

  if (category === 'all') {
    const selectedPostData = posts

    return {
      selectedPost: selectedPostData.slice(
        (pageNum - 1) * POST_SETTING.contentsPerPage,
        pageNum * POST_SETTING.contentsPerPage
      ),
      selectedAllPostLen: selectedPostData.length,
    }
  }

  const selectedPostData = posts.filter(([, post]) => {
    const lowerCategory = post.category.map((currCategory) =>
      currCategory.toLowerCase()
    )
    return (
      lowerCategory.includes(category) || lowerCategory.includes(lastCategory)
    )
  })

  return {
    selectedPost: selectedPostData.slice(
      (pageNum - 1) * POST_SETTING.contentsPerPage,
      pageNum * POST_SETTING.contentsPerPage
    ),
    selectedAllPostLen: selectedPostData.length,
  }
}
