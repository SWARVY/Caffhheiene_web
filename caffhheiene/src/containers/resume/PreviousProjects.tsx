import { PREVIOUS_PROJECTS } from '@/constants/user';
import Badge from '@/containers/resume/Badge';

export default function PreviousProjects() {
  return (
    <div className="grid gap-10">
      {PREVIOUS_PROJECTS.map((data, idx) => (
        <div key={idx} className="grid gap-3">
          <h1 className="text-3xl">{data.name}</h1>
          <h2 className="">{data.description}</h2>
          <div className="border border-black rounded-md overflow-hidden">
            <div className="bg-slate-300">
              <h1 className="p-3">사용 기술스택</h1>
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
