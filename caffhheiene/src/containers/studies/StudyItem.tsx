interface StudyItemProps {
  title: string
  link: string
}

export default function StudyItem({ title, link }: StudyItemProps) {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="p-0.5 transition ease-in hover:bg-gray-400 hover:text-white">
        {title}
      </a>
    </li>
  )
}
