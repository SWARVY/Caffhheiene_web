import { USER_SNS } from '@/constants/user'

export default function SNSList() {
  return (
    <div className="relative flex gap-1.5">
      {USER_SNS.map((sns) => (
        <a href={sns.link} target="_blank" rel="noreferrer">
          <div className="group rounded-full p-2 transition ease-in">
            <div className="fill-black transition-all duration-100 ease-in group-hover:fill-ochre dark:fill-white dark:group-hover:fill-ochre_light">
              {sns.svg}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
