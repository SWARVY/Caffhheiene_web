interface TagProps {
  tag: string
}

export default function Tag({ tag }: TagProps) {
  return (
    <div className="bg-light_main dark:bg-dark_main flex rounded-lg pb-0.5 pl-2 pr-2 pt-0.5 text-sm text-white">
      {tag}
    </div>
  )
}
