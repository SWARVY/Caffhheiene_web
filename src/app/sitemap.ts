import POST_SETTING from '@/constants/postSetting'
import { USER } from '@/constants/user'
import { getAllCategory, getAllPostLength } from '@/utils/getPost'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const postLength = getAllPostLength()
  const { categories, series } = getAllCategory()

  return [
    {
      url: USER.URL,
      lastModified: new Date(),
    },

    {
      url: `${USER.URL}/projects`,
      lastModified: new Date(),
    },

    {
      url: `${USER.URL}/studies`,
      lastModified: new Date(),
    },

    ...Array.from({ length: postLength }, (_, idx) => idx + 1).map(
      (postIdx) => ({
        url: `${USER.URL}/posts/detail/${postIdx}`,
        lastModified: new Date(),
      })
    ),

    ...categories
      .map((category) => {
        const calculated = {
          div: category.amount / POST_SETTING.contentsPerPage,
          mod: category.amount % POST_SETTING.contentsPerPage,
        }
        const pageLen = calculated.mod > 0 ? calculated.div + 1 : calculated.div

        return Array.from({ length: pageLen }, (_, idx) => idx + 1).map(
          (pageIdx) => ({
            url: `${USER.URL}/${category.name.toLowerCase()}/${pageIdx}`,
            lastModified: new Date(),
          })
        )
      })
      .flat(),

    ...series
      .map((seriesItem) => {
        const calculated = {
          div: seriesItem.amount / POST_SETTING.contentsPerPage,
          mod: seriesItem.amount % POST_SETTING.contentsPerPage,
        }
        const pageLen = calculated.mod > 0 ? calculated.div + 1 : calculated.div

        return Array.from({ length: pageLen }, (_, idx) => idx + 1).map(
          (pageIdx) => ({
            url: `${USER.URL}/${seriesItem.name}/${pageIdx}`,
            lastModified: new Date(),
          })
        )
      })
      .flat(),
  ]
}
