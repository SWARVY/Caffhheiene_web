import Link from 'next/link'

interface SlideImageProps {
  src: string
  title: string
  subtitle: string
  link: string
}

export default function SlideImage({
  src,
  title,
  subtitle,
  link,
}: SlideImageProps) {
  return (
    <div className="md:[25rem] relative h-[32rem] w-full">
      <img
        className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:brightness-75"
        src={src}
        alt="slideImage"
        loading="lazy"
      />
      <Link href={link}>
        <div className="absolute bottom-24 right-0 z-20 p-10 text-right text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 md:bottom-0">
          <h3 className="truncate text-2xl font-bold md:text-4xl">{title}</h3>
          <p className="truncate text-lg text-gray-200 md:text-xl">
            {subtitle}
          </p>
        </div>
      </Link>
    </div>
  )
}
