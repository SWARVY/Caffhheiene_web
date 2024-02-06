'use client'

import { ReactNode, useRef, useState } from 'react'
import {
  CheckIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'

interface PreComponentProps {
  children: ReactNode
}

export default function PreComponent({ children }: PreComponentProps) {
  const preDiv = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const handleExit = () => {
    setCopied(false)
  }

  const handleCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(preDiv.current?.textContent as string)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div ref={preDiv} className="group flex-col" onMouseLeave={handleExit}>
      <div className="flex items-center justify-between rounded-t-lg bg-ochre pb-3 pl-4 pr-4 pt-3">
        <CodeBracketIcon className="h-5 w-5 text-white" />
        <div className="flex items-center justify-end gap-x-2">
          <div className="h-3 w-3 rounded-full bg-red-600" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-600" />
        </div>
      </div>
      <div className="relative">
        <div
          className={`absolute right-2 top-2 rounded-md ${!copied ? 'bg-ochre_light hover:bg-ochre' : 'bg-green-400 hover:bg-green-500'} p-2 opacity-0 transition-all duration-100 ease-in  group-hover:opacity-100`}>
          {!copied ? (
            <DocumentDuplicateIcon
              className="h-5 w-5 text-white"
              onClick={handleCopy}
            />
          ) : (
            <CheckIcon className="h-5 w-5 text-white" />
          )}
        </div>
        <pre className="rounded-b-lg p-4 leading-4">{children}</pre>
      </div>
    </div>
  )
}
