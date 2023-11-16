import { USER_SNS } from '@/constants/user'

export default function SNSList() {
  return (
    <div className="relative flex gap-1.5">
      {USER_SNS.map((sns, idx) => (
        <a
          key={idx}
          href={sns.link}
          target="_blank"
          rel="norefferer noreferrer">
          <div className="rounded-full p-2 transition ease-in hover:bg-white_hover hover:bg-opacity-70">
            <div className="fill-black dark:fill-white">{sns.svg}</div>
          </div>
        </a>
      ))}
    </div>
  )
}
