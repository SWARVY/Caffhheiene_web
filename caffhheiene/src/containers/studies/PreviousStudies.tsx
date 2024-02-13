import SubTitle from '@/components/SubTitle'
import PREVIOUS_STUDIES from '@/constants/previousStudies'
import { MAIN_TITLE } from '@/constants/title'
import StudyGroup from '@/containers/studies/StudyGroup'

export default function PreviousStudies() {
  return (
    <div className="grid gap-10">
      <SubTitle title={MAIN_TITLE.studies} />
      <ul className="grid gap-10">
        {PREVIOUS_STUDIES.map((data) => (
          <StudyGroup
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
