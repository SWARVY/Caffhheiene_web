import Link from 'next/link'
import { type MDXComponents } from 'mdx/types'
import ImgWithPlacehlder from '@/components/ImgWithPlaceholder'
import PreComponent from './PreComponent'

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link
      href={href as string}
      className="text-base text-gray-400 underline underline-offset-4 transition duration-150 ease-in hover:text-black dark:text-gray-300 dark:hover:text-white">
      {children}
    </Link>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-black underline decoration-ochre_light decoration-wavy decoration-2 underline-offset-4 dark:text-white dark:decoration-ochre">
      {children}
    </strong>
  ),

  blockquote: ({ children }) => (
    <blockquote className="dark:text-white">{children}</blockquote>
  ),

  pre: ({ children }) => <PreComponent>{children}</PreComponent>,

  h1: ({ id, children }) => (
    <h1
      id={id}
      className="hover:underline-offset-3 hover:underline dark:text-white">
      {children}
    </h1>
  ),

  h2: ({ id, children }) => (
    <div className="group flex items-center space-x-2 border-b-2 border-ochre_light text-xl dark:border-ochre">
      <h2 id={id} className="mb-2 mt-2 dark:text-white">
        {children}
      </h2>
      <Link
        href={`#${id}`}
        className="invisible text-xl font-bold text-ochre no-underline opacity-0 transition duration-150 ease-in hover:underline group-hover:visible group-hover:opacity-100">
        #
      </Link>
    </div>
  ),

  h3: ({ id, children }) => (
    <div className="group flex items-center space-x-2 border-b-2 border-ochre_light text-lg dark:border-ochre">
      <h3 id={id} className="mb-2 mt-2 dark:text-white">
        {children}
      </h3>
      <Link
        href={`#${id}`}
        className="invisible text-lg font-bold text-ochre no-underline opacity-0 transition duration-150 ease-in hover:underline group-hover:visible group-hover:opacity-100">
        #
      </Link>
    </div>
  ),

  h4: ({ id, children }) => (
    <h3 id={id} className="dark:text-white">
      {children}
    </h3>
  ),

  img: ({ src }) => (
    <div className="flex justify-center">
      <ImgWithPlacehlder src={src as string} tailwindClassNames="rounded-xl" />
    </div>
  ),
}

export default mdxComponents
