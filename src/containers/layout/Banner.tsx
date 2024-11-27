import Image from 'next/image'

export default function Banner() {
  return (
    <div className="relative h-[10rem] w-full overflow-hidden rounded-lg">
      <Image
        className="object-cover"
        src="/profile/Banner_dark.png"
        alt="Caffhheiene Blog"
        loading="eager"
        fill
      />
    </div>
  )
}
