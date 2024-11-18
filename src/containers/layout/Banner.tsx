import Image from 'next/image'

export default function Banner() {
  return (
    <div className="flex w-full gap-y-4">
      <Image
        className="h-[10rem] w-full rounded-lg object-cover"
        src="/profile/Banner_dark.png"
        alt="Caffhheiene Blog"
        width={1024}
        height={500}
      />
    </div>
  )
}
