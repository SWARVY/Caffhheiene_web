import { USER_CAREER } from '@/constants/user'

export default function UserCareer() {
  return (
    <div className="w-full flex-col space-y-1 p-2">
      {USER_CAREER.map((data) => (
        <div className="grid grid-cols-2 gap-x-3">
          <p className="text-gray-500 dark:text-gray-400">{data.date}</p>
          <p className="dark:text-white">{data.name}</p>
        </div>
      ))}
    </div>
  )
}
