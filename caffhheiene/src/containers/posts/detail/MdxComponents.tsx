import Link from 'next/link'
import { type MDXComponents } from 'mdx/types'
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
    <strong className="rounded-md bg-neutral-600 pb-0.5 pl-1 pr-1 pt-0.5 text-white">
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
    <div className="group flex items-center space-x-2 border-b text-xl">
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
    <div className="group flex items-center space-x-2 border-b text-lg">
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
}

export default mdxComponents
