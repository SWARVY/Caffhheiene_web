import StudyItem from '@/containers/studies/StudyItem'

interface StudyGroupProps {
  group: string
  imgSrc: string
  content: Array<{
    title: string
    link: string
  }>
  link: string
}

export default function StudyGroup({
  group,
  imgSrc,
  content,
  link,
}: StudyGroupProps) {
  return (
    <li className="grid overflow-hidden rounded-lg shadow-md">
      <div className="flex items-center gap-3 bg-white_hover p-3 transition ease-in hover:bg-white_hover_weight dark:bg-neutral-600 dark:text-white dark:hover:bg-neutral-500">
        <img className="h-8 w-8 rounded-full" src={imgSrc} alt="profileImg" />
        <a href={link} target="_blank" rel="noreferrer">
          <h3 className="text-xl font-bold dark:text-white">{group}</h3>
        </a>
      </div>
      <ul className="space-y-3 p-3 dark:bg-neutral-700">
        {content.map((study, idx) => (
          <StudyItem key={idx} title={study.title} link={study.link} />
        ))}
      </ul>
    </li>
  )
}
