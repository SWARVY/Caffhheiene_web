interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="flex w-full items-center justify-start gap-2 font-BlogTitle drop-shadow-lg">
      <h1 className="mt-2 text-5xl font-bold drop-shadow-xl dark:text-white sm:text-6xl">
        {title}
      </h1>
    </div>
  )
}
