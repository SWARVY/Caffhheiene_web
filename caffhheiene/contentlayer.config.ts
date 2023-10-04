import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import { type Pluggable } from 'unified'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'list',
      of: {
        type: 'string',
      },
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'public/blog',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      rehypeHighlight as Pluggable<any>,
      [
        rehypeAutolinkHeadings,
        { properties: { className: ['anchor'], ariaLabel: 'anchor' } },
      ],
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener noreffer'] }],
    ],
  },
})
