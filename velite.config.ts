import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import { defineCollection, defineConfig, s } from 'velite'

const blogPost = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    date: s.string(),
    description: s.string().max(999),
    thumbnail: s.string(),
    category: s.array(s.string().max(50)),
    series: s.string().max(99).optional(),
    content: s.mdx(),
  }),
})

export default defineConfig({
  collections: {
    blogPost,
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaLabel: 'anchor',
          },
        },
      ],
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener noreffer'] }],
      [rehypePrism as any, { ignoreMissing: true }],
    ],
    remarkPlugins: [remarkBreaks],
  },
})
