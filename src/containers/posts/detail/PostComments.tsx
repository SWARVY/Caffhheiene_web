'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'
import { useRecoilValue } from 'recoil'

export default function PostComments() {
  const { theme } = useTheme()

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
      theme={theme ? 'noborder_gray' : 'noborder_light'}
      lang="ko"
      loading="lazy"
    />
  )
}
