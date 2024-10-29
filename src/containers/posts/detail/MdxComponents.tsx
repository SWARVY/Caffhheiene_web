import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { type MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

import PreComponent from './PreComponent'

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link
      href={href as string}
      className="text-base text-gray-400 underline transition-all underline-offset-4 hover:text-black dark:text-gray-300 dark:hover:text-white">
      {children}
    </Link>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-black underline decoration-blue-700 decoration-wavy decoration-2 underline-offset-4 dark:text-white">
      {children}
    </strong>
  ),

  blockquote: ({ children }) => (
    <blockquote className="flex items-center p-3 overflow-hidden not-italic bg-gray-100 gap-x-3 sm:gap-x-6 sm:pl-6 dark:bg-background_component dark:text-white">
      <DocumentTextIcon className="text-gray-700 size-6 dark:text-gray-200" />
      <div className="flex-col w-full text-sm leading-7">{children}</div>
    </blockquote>
  ),

  p: ({ children }) => <p className="break-keep">{children}</p>,

  span: ({ className, children }) => (
    <span className={`${className} break-keep`}>{children}</span>
  ),

  pre: ({ className, children }) => (
    <PreComponent styleNames={className}>{children}</PreComponent>
  ),

  code: ({ className, children }) => (
    <code className={`${className} dark:text-white`}>{children}</code>
  ),

  h1: ({ id, children }) => (
    <h1
      id={id}
      className="hover:underline-offset-3 hover:underline dark:text-white">
      {children}
    </h1>
  ),

  h2: ({ id, children }) => (
    <div className="flex items-center space-x-2 text-xl border-b-2 group border-blue-950/60">
      <h2 id={id} className="mt-2 mb-2 dark:text-white">
        {children}
      </h2>
      <Link
        href={`#${id}`}
        className="invisible text-xl font-bold no-underline transition-all opacity-0 text-blue-950/60 hover:underline group-hover:visible group-hover:opacity-100">
        #
      </Link>
    </div>
  ),

  h3: ({ id, children }) => (
    <div className="flex items-center space-x-2 text-lg border-b-2 group border-blue-950/60">
      <h3 id={id} className="mt-2 mb-2 dark:text-white">
        {children}
      </h3>
      <Link
        href={`#${id}`}
        className="invisible text-lg font-bold no-underline transition-all opacity-0 text-blue-950/60 hover:underline group-hover:visible group-hover:opacity-100">
        #
      </Link>
    </div>
  ),

  h4: ({ id, children }) => (
    <h4 id={id} className="mt-4 text-lg break-keep dark:text-white">
      {children}
    </h4>
  ),

  img: ({ src, alt }) => (
    <div className="flex justify-center w-full">
      <Image width={800} height={600} src={src as string} alt={alt as string} />
    </div>
  ),
}

export default mdxComponents
