interface StudyItemProps {
  title: string
  link: string
}

export default function StudyItem({ title, link }: StudyItemProps) {
  return (
    <li className="dark:text-white">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-ellipsis p-0.5 transition ease-in hover:bg-gray-400 hover:text-white">
        {title}
      </a>
    </li>
  )
}
