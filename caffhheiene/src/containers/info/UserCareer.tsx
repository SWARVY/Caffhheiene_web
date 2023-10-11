import { USER_CAREER } from '@/constants/user'

export default function UserCareer() {
  return (
    <div className="w-full flex-col space-y-1 p-2">
      {USER_CAREER.map((data, idx) => (
        <div key={idx} className="grid grid-cols-2 gap-x-3">
          <h1 className="text-gray-500">{data.date}</h1>
          <h1>{data.name}</h1>
        </div>
      ))}
    </div>
  )
}
