import { MAIN_TITLE, SUB_TITLE } from '@/constants/title';
import { PREVIOUS_PROJECTS } from '@/constants/user';
import Badge from '@/components/Badge';

export default function PreviousProjects() {
  return (
    <div className="grid gap-10">
      <div className="flex w-full justify-center md:justify-start md:gap-y-0 gap-x-4">
        <h1 className="flex text-6xl md:text-5xl drop-shadow-xl font-bold">
          {MAIN_TITLE.projects}
        </h1>
      </div>
      <h1 className="p-3 rounded-md border border-black">{SUB_TITLE.notice}</h1>
      {PREVIOUS_PROJECTS.map((data, idx) => (
        <div key={idx} className="grid gap-3">
          <a href={data.link} target="_blank" rel="noreferrer">
            <h1 className="text-2xl font-bold">{data.name}</h1>
          </a>
          <h2 className="">{data.description}</h2>
          <div className="border border-black rounded-md overflow-hidden">
            <div className="bg-slate-300">
              <h1 className="p-3 font-bold">{SUB_TITLE.techStacks}</h1>
            </div>
            <hr className="border-black" />
            <div className="grid grid-cols-2 md:grid-cols-3 p-3 gap-2">
              {data.stack.map((tech, idx) => (
                <Badge key={idx} svgImage={tech.svg} name={tech.name} color={tech.color} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
