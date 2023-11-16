import SubTitle from '@/components/SubTitle'
import { PREVIOUS_PROJECTS } from '@/constants/previousProjects'
import { MAIN_TITLE, SUB_TITLE } from '@/constants/title'
import ProjectItem from '@/containers/projects/ProjectItem'

export default function PreviousProjects() {
  return (
    <div className="grid gap-10">
      <SubTitle title={MAIN_TITLE.projects} />
      <h3 className="rounded-md bg-white_hover p-3 shadow-md transition ease-in hover:bg-white_hover_weight dark:bg-neutral-600 dark:text-white dark:hover:bg-neutral-500">
        {SUB_TITLE.notice}
      </h3>
      {PREVIOUS_PROJECTS.map((data, idx) => (
        <ProjectItem
          key={idx}
          link={data.link}
          name={data.name}
          description={data.description}
          stack={data.stack}
        />
      ))}
    </div>
  )
}
