import * as runtime from 'react/jsx-runtime'
import type { MDXComponents } from 'mdx/types'

import '../style/Intellij-prism.css'

const useMDXComponent = (content: string) => {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const fn = new Function(content)
  return fn({ ...runtime }).default
}

interface MDXProps {
  content: string
  components?: MDXComponents
}

export default function MDXContent({ content, components }: MDXProps) {
  const Component = useMDXComponent(content)

  return (
    <div
      id="content"
      className="prose prose-neutral max-w-full overflow-hidden dark:text-white">
      {content && <Component components={components} />}
    </div>
  )
}
