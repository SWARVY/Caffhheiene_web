import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { type MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

import PreComponent from './PreComponent'

const MDX: MDXComponents = {
  a: ({ href, children }) => (
    <Link
      href={href as string}
      className="text-base text-gray-400 underline underline-offset-4 transition-all hover:text-black dark:text-gray-300 dark:hover:text-white">
      {children}
    </Link>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold underline decoration-red-700 decoration-wavy decoration-2 underline-offset-4 dark:text-white">
      {children}
    </strong>
  ),

  blockquote: ({ children }) => (
    <blockquote className="flex items-center gap-x-3 overflow-hidden rounded-lg bg-gray-100 p-3 not-italic sm:gap-x-6 sm:pl-6 dark:bg-dark_component dark:text-white">
      <DocumentTextIcon className="size-6 text-gray-700 dark:text-gray-200" />
      <div className="w-full flex-col text-sm leading-7">{children}</div>
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
    <div className="group flex items-center space-x-2 border-b-2 border-light_main text-xl dark:border-white">
      <h2 id={id} className="mb-2 mt-2 dark:text-white">
        {children}
      </h2>
      <Link
        href={`#${id}`}
        className="invisible text-xl font-bold text-light_progress_inner no-underline opacity-0 transition-all hover:underline group-hover:visible group-hover:opacity-100 dark:text-dark_progress_inner">
        #
      </Link>
    </div>
  ),

  h3: ({ id, children }) => (
    <div className="group flex items-center space-x-2 border-b-2 border-light_main text-lg dark:border-white">
      <h3 id={id} className="mb-2 mt-2 dark:text-white">
        {children}
      </h3>
      <Link
        href={`#${id}`}
        className="invisible text-lg font-bold text-light_progress_inner no-underline opacity-0 transition-all hover:underline group-hover:visible group-hover:opacity-100 dark:text-dark_progress_inner">
        #
      </Link>
    </div>
  ),

  h4: ({ id, children }) => (
    <h4 id={id} className="mt-4 break-keep text-lg dark:text-white">
      {children}
    </h4>
  ),

  img: ({ src, alt }) => (
    <Image
      className="rounded-xl"
      width={800}
      height={600}
      src={src as string}
      alt={alt as string}
    />
  ),
}

export default MDX
