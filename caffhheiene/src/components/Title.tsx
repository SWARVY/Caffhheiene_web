interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="font-Title flex w-full items-center justify-start gap-2 drop-shadow-lg">
      <h1 className="mt-2 text-6xl font-bold drop-shadow-xl dark:text-white">
        {title}
      </h1>
    </div>
  )
}
