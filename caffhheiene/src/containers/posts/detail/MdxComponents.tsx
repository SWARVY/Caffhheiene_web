import Link from 'next/link'
import { type MDXComponents } from 'mdx/types'

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

  pre: ({ children }) => <pre className="p-0 leading-4">{children}</pre>,

  h1: ({ id, children }) => (
    <h1
      id={id}
      className="hover:underline-offset-3 hover:underline dark:text-white">
      {children}
    </h1>
  ),

  h2: ({ id, children }) => (
    <h2 id={id} className="dark:text-white">
      {children}
    </h2>
  ),

  h3: ({ id, children }) => (
    <h3 id={id} className="dark:text-white">
      {children}
    </h3>
  ),

  h4: ({ id, children }) => (
    <h3 id={id} className="dark:text-white">
      {children}
    </h3>
  ),
}

export default mdxComponents
