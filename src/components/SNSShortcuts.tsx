import { USER_SNS } from '@/constants/user'
import Link from 'next/link'

export default function SNSShortcuts() {
  return (
    <ul className="flex items-center gap-x-3 py-3">
      {USER_SNS.map((sns) => (
        <li key={`shortcut-${sns.name}`} className="group">
          <Link href={sns.link} target="_blank">
            <div className="fill-light_main/60 hover:fill-light_main size-5 transition-colors dark:fill-white dark:hover:fill-gray-400">
              {sns.svg}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
