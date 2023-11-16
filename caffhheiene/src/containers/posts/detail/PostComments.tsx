'use client'

import Giscus from '@giscus/react'
import { useRecoilValue } from 'recoil'
import darkModeState from '@/atom/darkMode'

export default function PostComments() {
  const darkMode = useRecoilValue(darkModeState)

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
      theme={darkMode ? 'noborder_dark' : 'light_high_contrast'}
      lang="ko"
      loading="lazy"
    />
  )
}
