interface TagProps {
  tag: string
}

export default function Tag({ tag }: TagProps) {
  return (
    <div className="flex rounded-lg bg-light_main pb-0.5 pl-2 pr-2 pt-0.5 text-sm text-white dark:bg-dark_main">
      {tag}
    </div>
  )
}
