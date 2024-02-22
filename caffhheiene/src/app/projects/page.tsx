import PreviousProjects from '@/containers/projects/PreviousProjects'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: '공방',
  description: '신현호의 기술서재 / 공방',
}

export default function projects() {
  return (
    <div className="grid w-full max-w-3xl">
      <PreviousProjects />
    </div>
  )
}
