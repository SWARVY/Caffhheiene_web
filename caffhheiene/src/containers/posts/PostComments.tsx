'use client'

import Giscus from '@giscus/react'

export default function PostComments() {
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
      theme="light_high_contrast"
      lang="en"
      loading="lazy"
    />
  )
}
