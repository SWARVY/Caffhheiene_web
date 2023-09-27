import { PREVIOUS_PROJECTS } from '@/constants/user';
import Badge from '@/containers/resume/Badge';

export default function PreviousProjects() {
  return (
    <div className="grid gap-10">
      <h1>* 제목 클릭 시 새 창에서 깃허브 레포지토리가 열립니다</h1>
      {PREVIOUS_PROJECTS.map((data, idx) => (
        <div key={idx} className="grid gap-3">
          <a href={data.link} target="_blank" rel="noreferrer">
            <h1 className="text-3xl">{data.name}</h1>
          </a>
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
