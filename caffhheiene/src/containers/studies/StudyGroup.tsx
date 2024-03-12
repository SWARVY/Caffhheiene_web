import StudyItem from '@/containers/studies/StudyItem'
import Image from 'next/image'

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
    <li className="grid overflow-hidden rounded-lg opacity-0 shadow-md">
      <figure className="flex items-center gap-3 bg-ochre pb-2 pl-3 pr-3 pt-2 text-white">
        <Image
          width={200}
          height={200}
          className="h-7 w-7 rounded-full"
          src={imgSrc}
          alt="Profile Image"
        />
        <figcaption>
          <a href={link} target="_blank" rel="noreferrer">
            <h3 className="text-xl font-bold dark:text-white">{group}</h3>
          </a>
        </figcaption>
      </figure>
      <ul className="space-y-3 p-3 dark:bg-background_component">
        {content.map((study) => (
          <StudyItem key={study.title} title={study.title} link={study.link} />
        ))}
      </ul>
    </li>
  )
}
