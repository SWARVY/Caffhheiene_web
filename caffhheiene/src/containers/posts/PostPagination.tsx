import { POST_SETTING } from '@/constants/postSetting'
import { type Dispatch, type SetStateAction } from 'react'

interface PostPaginationProps {
  postLen: number
  currPage: number
  setPage: Dispatch<SetStateAction<number>>
}

export default function PostPagination({
  postLen,
  currPage,
  setPage,
}: PostPaginationProps) {
  const calculated = {
    div: postLen / POST_SETTING.contentsPerPage,
    mod: postLen % POST_SETTING.contentsPerPage,
  }
  const pageLen = calculated.mod > 0 ? calculated.div + 1 : calculated.div

  return (
    <ul className="flex justify-center gap-x-3">
      {Array.from({ length: pageLen }, (_, idx) => idx).map((_, idx) => (
        <li
          key={idx}
          className={`${
            idx + 1 === currPage ? 'bg-white_hover' : ''
          } flex h-8 w-8 items-center justify-center rounded-md p-1 text-xl hover:bg-white_hover`}>
          <button
            className="h-full w-full"
            onClick={() => {
              setPage(idx + 1)
            }}>
            {idx + 1}
          </button>
        </li>
      ))}
    </ul>
  )
}
