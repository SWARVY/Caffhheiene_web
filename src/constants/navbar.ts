export const TOP_NAVBAR = Object.freeze({
  tags: [
    { tag: '소개', link: '/', isPath: (path: string) => /^\/$/.test(path) },
    {
      tag: '포스팅',
      link: '/posts/all/1',
      isPath: (path: string) => /^\/posts\/.*$/.test(path),
    },
  ],
})

export const BOTTOM_NAVBAR = Object.freeze({
  copyright: '© 2023. Caffhheiene all rights reserved.',
})
