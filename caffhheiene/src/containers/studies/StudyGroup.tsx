import StudyItem from '@/containers/studies/StudyItem';

interface StudyGroupProps {
  group: string;
  imgSrc: string;
  content: Array<{
    title: string;
    link: string;
  }>;
  link: string;
}

export default function StudyGroup({
  group,
  imgSrc,
  content,
  link,
}: StudyGroupProps) {
  return (
    <li className="grid gap-4 rounded-lg p-5 shadow-md">
      <div className="flex items-center gap-3">
        <img className="h-8 w-8 rounded-full" src={imgSrc} alt="profileImg" />
        <a href={link} target="_blank" rel="noreferrer">
          <h1 className="text-2xl font-bold">{group}</h1>
        </a>
      </div>
      <ul className="space-y-3">
        {content.map((study, idx) => (
          <StudyItem key={idx} title={study.title} link={study.link} />
        ))}
      </ul>
    </li>
  );
}
