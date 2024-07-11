import MAIN_SETTING from '@/constants/mainSetting'
import POST_SETTING from '@/constants/postSetting'
import { allPosts, type Post } from '@/contentlayer/generated'

export interface Tag {
  name: string
  amount: number
}

export const getAllPostLength = () => allPosts.length

export const getAllPost = (): Array<[number, Post]> =>
  allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post, idx) => [idx, post])

export const getAllCategory = () => {
  const categories: Tag[] = [{ name: 'All', amount: 0 }]
  const seriesList: Tag[] = []

  allPosts.forEach(({ category, series }) => {
    category.forEach((categoryItem) => {
      const parsedCategory = categoryItem.replace(/ /g, '_')
      const target = categories.findIndex(
        (item) =>
          item.name === parsedCategory || item.name === `${parsedCategory}\r`
      )

      if (target === -1) {
        categories.push({ name: parsedCategory, amount: 1 })
      } else {
        categories[target].amount += 1
      }
    })

    if (series) {
      const parsedSeries = `series-${series.replace(/ /g, '_')}`
      const target = seriesList.findIndex((item) => item.name === parsedSeries)

      if (target === -1) {
        seriesList.push({ name: parsedSeries, amount: 1 })
      } else {
        seriesList[target].amount += 1
      }
    }
    categories[0].amount += 1
  })

  return { categories, series: seriesList }
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

export const getSelectedSeriesPost = (series: string) => {
  const purePostData: [number, Post][] = allPosts
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((post, idx) => [idx, post])
  const parsedSeries = series.replaceAll(/_/g, ' ')

  return purePostData.filter(([, post]) => post.series === parsedSeries)
}

export const getSelectedCategoryPost = (category: string, pageNum: number) => {
  const posts = getAllPost()
  const decodedCategory = decodeURI(category).replaceAll(/_/g, ' ')
  const lastCategory = `${decodeURI(category)}\r`

  if (category.includes('series-')) {
    const selectedPostData = posts.filter(
      ([, post]) => `series-${post.series}` === decodedCategory
    )

    return {
      selectedPost: selectedPostData.slice(
        (pageNum - 1) * POST_SETTING.contentsPerPage,
        pageNum * POST_SETTING.contentsPerPage
      ),
      selectedAllPostLen: selectedPostData.length,
    }
  }

  if (category === 'all') {
    return {
      selectedPost: posts.slice(
        (pageNum - 1) * POST_SETTING.contentsPerPage,
        pageNum * POST_SETTING.contentsPerPage
      ),
      selectedAllPostLen: posts.length,
    }
  }

  const selectedPostData = posts.filter(([, post]) => {
    const lowerCategory = post.category.map((currCategory) =>
      currCategory.toLowerCase()
    )
    return (
      lowerCategory.includes(decodedCategory) ||
      lowerCategory.includes(lastCategory)
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
