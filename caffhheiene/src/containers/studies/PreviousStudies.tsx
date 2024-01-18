import SubTitle from '@/components/SubTitle'
import PREVIOUS_STUDIES from '@/constants/previousStudies'
import { MAIN_TITLE, SUB_TITLE } from '@/constants/title'
import StudyGroup from '@/containers/studies/StudyGroup'

export default function PreviousStudies() {
  return (
    <div className="grid gap-10">
      <SubTitle title={MAIN_TITLE.studies} />
      <h3 className="rounded-md bg-white_hover p-3 shadow-md transition ease-in hover:bg-white_hover_weight dark:bg-neutral-600 dark:text-white dark:hover:bg-neutral-500">
        {SUB_TITLE.notice}
      </h3>
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
