interface TitleProps {
  title: string
}

export default function SubTitle({ title }: TitleProps) {
  return (
    <div className="grid w-full items-center justify-start gap-2 border-b-2 border-ochre_light pb-4 pl-2 font-BlogTitle drop-shadow-lg dark:border-ochre md:pl-0">
      <h2 className="mt-2 text-4xl font-bold drop-shadow-xl dark:text-white">
        {title}
      </h2>
    </div>
  )
}
