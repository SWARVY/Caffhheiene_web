'use client'

import SubTitle from '@/components/SubTitle'
import PREVIOUS_STUDIES from '@/constants/previousStudies'
import { MAIN_TITLE } from '@/constants/title'
import StudyGroup from '@/containers/studies/StudyGroup'
import useStaggerAnimation from '@/hooks/useStaggerAnimation'

export default function PreviousStudies() {
  const scope = useStaggerAnimation()

  return (
    <div className="grid gap-10">
      <SubTitle title={MAIN_TITLE.studies} />
      <ul ref={scope} className="grid gap-10">
        {PREVIOUS_STUDIES.map((data) => (
          <StudyGroup
            key={data.group}
            group={data.group}
            imgSrc={data.imgSrc}
            content={data.content}
            link={data.link}
          />
        ))}
      </ul>
    </div>
  )
}
