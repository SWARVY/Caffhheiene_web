import Title from '@/components/Title'
import { PREVIOUS_PROJECTS } from '@/constants/previousProjects'
import { MAIN_TITLE, SUB_TITLE } from '@/constants/title'
import ProjectItem from '@/containers/projects/ProjectItem'
import { GamepadSVG } from '../../../public/svgs'

export default function PreviousProjects() {
  return (
    <div className="font-NanumBarunpen_Rg grid gap-10">
      <Title
        svg={<GamepadSVG className="h-14 w-14" />}
        title={MAIN_TITLE.projects}
      />
      <h1 className="rounded-md bg-white_hover p-3 shadow-md transition ease-in hover:bg-white_hover_weight">
        {SUB_TITLE.notice}
      </h1>
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
