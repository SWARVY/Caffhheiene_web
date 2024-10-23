interface TagProps {
  tag: string
}

export default function Tag({ tag }: TagProps) {
  return (
    <div className="flex bg-blue-950/60 pb-0.5 pl-2 pr-2 pt-0.5 text-white dark:bg-blue-600/60">
      {tag}
    </div>
  )
}
