interface TagProps {
  tag: string
}

export default function Tag({ tag }: TagProps) {
  return (
    <div className="flex rounded-md bg-ochre pb-0.5 pl-2 pr-2 pt-0.5 font-bold text-white">
      {tag}
    </div>
  )
}
