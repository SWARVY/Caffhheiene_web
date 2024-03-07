import fs from 'node:fs/promises'
import path from 'node:path'
import { getPlaiceholder } from 'plaiceholder'

const getBlurredData = async (imgSrc: string) => {
  const buffer = await fs.readFile(path.join('./public', imgSrc))
  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 })

  return {
    ...plaiceholder,
    img: { imgSrc, height, width },
  }
}

export default getBlurredData
