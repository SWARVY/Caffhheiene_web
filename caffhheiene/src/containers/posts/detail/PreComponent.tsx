'use client'

import { ReactNode, useCallback, useRef, useState } from 'react'
import {
  CheckIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'

interface PreComponentProps {
  styleNames: string | undefined
  children: ReactNode
}

export default function PreComponent({
  styleNames,
  children,
}: PreComponentProps) {
  const preDiv = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const handleExit = useCallback(() => {
    setCopied(false)
  }, [setCopied])

  const handleCopy = useCallback(() => {
    setCopied(true)
    navigator.clipboard.writeText(preDiv.current?.textContent as string)
    setTimeout(() => setCopied(false), 2000)
  }, [setCopied])

  return (
    <div ref={preDiv} className="group mt-7 flex-col" onMouseLeave={handleExit}>
      <div className="flex items-center justify-between rounded-t-lg bg-ochre pb-3 pl-4 pr-4 pt-3">
        <div className="flex items-center gap-x-4">
          <CodeBracketIcon className="h-5 w-5 text-white" />
          <p className="m-0 mt-1 font-BlogDeco text-white">
            {styleNames?.replace(/language-/g, '')}
          </p>
        </div>
        <div className="flex items-center justify-end gap-x-2">
          <div className="h-3 w-3 rounded-full bg-red-600" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-600" />
        </div>
      </div>
      <div className="relative">
        <button
          type="button"
          aria-label={!copied ? 'Copy code' : 'Code copied'}
          className={`absolute right-2 top-2 rounded-md ${!copied ? 'bg-ochre_light hover:bg-ochre' : 'bg-green-400 hover:bg-green-500'} p-2 opacity-0 transition-all duration-100 ease-in  group-hover:opacity-100`}
          onClick={handleCopy}>
          {!copied ? (
            <DocumentDuplicateIcon className="h-5 w-5 text-white" />
          ) : (
            <CheckIcon className="h-5 w-5 text-white" />
          )}
        </button>
        <pre className="rounded-b-lg p-4 leading-4">{children}</pre>
      </div>
    </div>
  )
}
