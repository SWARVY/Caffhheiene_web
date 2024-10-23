import getBlurredData from '@/utils/getBlurredData'
import Image from 'next/image'

export default async function ImgWithPlaceholder({
  src,
  tailwindClassNames,
}: {
  src: string
  tailwindClassNames: string
}) {
  const { base64, img } = await getBlurredData(src)

  return (
    <Image
      className={tailwindClassNames}
      src={src}
      alt={src}
      width={img.width}
      height={img.height}
      placeholder="blur"
      blurDataURL={base64}
    />
  )
}
