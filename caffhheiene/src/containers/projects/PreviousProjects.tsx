import SubTitle from '@/components/SubTitle'
import PREVIOUS_PROJECTS from '@/constants/previousProjects'
import { MAIN_TITLE } from '@/constants/title'
import ProjectItem from '@/containers/projects/ProjectItem'

export default function PreviousProjects() {
  return (
    <div className="grid gap-10">
      <SubTitle title={MAIN_TITLE.projects} />
      <ul className="grid gap-10">
        {PREVIOUS_PROJECTS.map((data) => (
          <ProjectItem
            link={data.link}
            name={data.name}
            description={data.description}
            stack={data.stack}
          />
        ))}
      </ul>
    </div>
  )
}
