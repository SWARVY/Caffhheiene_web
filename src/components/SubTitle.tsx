interface TitleProps {
  title: string
}

export default function SubTitle({ title }: TitleProps) {
  return (
    <div className="w-full pb-2 border-b-2 border-blue-950/60 text-start dark:border-blue-50">
      <h2 className="mt-2 text-4xl font-Consolas dark:text-white">{title}</h2>
    </div>
  )
}
