'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export default function PostComments() {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <Giscus
      id="comments"
      repo="SWARVY/Caffhheiene_web"
      repoId="R_kgDOJyONKw"
      category="Announcements"
      categoryId="DIC_kwDOJyONK84CZyFe"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={currentTheme === 'dark' ? 'noborder_gray' : 'noborder_light'}
      lang="ko"
      loading="lazy"
    />
  )
}
