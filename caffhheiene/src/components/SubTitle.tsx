interface TitleProps {
  title: string
}

export default function SubTitle({ title }: TitleProps) {
  return (
    <div className="font-Title grid w-full items-center justify-start gap-2 border-b border-gray-500 pb-4 pl-2 drop-shadow-lg md:pl-0">
      <h2 className="mt-2 text-4xl font-bold drop-shadow-xl dark:text-white">
        {title}
      </h2>
    </div>
  )
}
