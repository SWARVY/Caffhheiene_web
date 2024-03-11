import PreviousStudies from '@/containers/studies/PreviousStudies'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: '배움',
  description: '신현호의 기술서재 / 배움',
}

export default function studies() {
  return (
    <section className="grid w-full max-w-3xl p-5 xl:p-0">
      <PreviousStudies />
    </section>
  )
}
