interface TitleProps {
  title: string
}

export default function SubTitle({ title }: TitleProps) {
  return (
    <div className="w-full border-b-2 border-blue-950/60 pb-2 text-start dark:border-blue-50">
      <h2 className="font-Consolas mt-2 text-4xl dark:text-white">{title}</h2>
    </div>
  )
}
