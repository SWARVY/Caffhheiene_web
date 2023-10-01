import Title from '@/components/Title';
import { PREVIOUS_PROJECTS } from '@/constants/previousProjects';
import { MAIN_TITLE, SUB_TITLE } from '@/constants/title';
import ProjectItem from '@/containers/projects/ProjectItem';
import { GamepadSVG } from '../../../public/svgs';

export default function PreviousProjects() {
  return (
    <div className="grid gap-10">
      <Title svg={<GamepadSVG className="w-14 h-14" />} title={MAIN_TITLE.projects} />
      <h1 className="p-3 rounded-md shadow-md transition ease-in bg-white_hover hover:bg-white_hover_weight">
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
  );
}
