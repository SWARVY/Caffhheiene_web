import { USER_SNS } from '@/constants/user'

export default function SNSList() {
  return (
    <div className="relative flex gap-1.5">
      {USER_SNS.map((sns) => (
        <a href={sns.link} target="_blank" rel="noreferrer">
          <div className="group rounded-full p-2 transition ease-in">
            <div className="group-hover:fill-ochre dark:group-hover:fill-ochre_light fill-black transition-all duration-100 ease-in dark:fill-white">
              {sns.svg}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
