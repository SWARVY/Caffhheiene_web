import { EnvelopeIcon } from '@heroicons/react/24/solid'

import {
  GithubSVG,
  InstagramSVG,
  NotionSVG,
  TistorySVG,
} from '../../public/svgs'

export const USER = Object.freeze({
  id: 'Caffhheiene',
  name: '신현호',
  description: 'Frontend Developer',
  introduce:
    '어제보다 더 나은 오늘을 위해 끊임없이 도전하는 스타트업 프론트엔드 개발자입니다.',
  profileImg: '/profile/Profile_notion_icon_v2.png',
  URL: 'https://caffhheiene.vercel.app',
})

export const USER_SNS = Object.freeze([
  {
    name: 'github',
    svg: <GithubSVG className="size-full" />,
    link: 'https://github.com/SWARVY',
  },
  {
    name: 'notion',
    svg: <NotionSVG className="size-full" />,
    link: 'https://crystalline-chickadee-79a.notion.site/70d52e6cfeab486fb28dbba84c1ca054?pvs=4',
  },
  {
    name: 'instagram',
    svg: <InstagramSVG className="size-full" />,
    link: 'https://www.instagram.com/caffhheine/',
  },
  {
    name: 'tistory',
    svg: <TistorySVG className="size-full" />,
    link: 'https://swarvy.tistory.com/',
  },
  {
    name: 'email',
    svg: (
      <EnvelopeIcon className="size-full fill-light_main/60 transition-colors hover:fill-light_main dark:fill-white dark:hover:fill-gray-400" />
    ),
    link: 'mailto:swarvy0826@naver.com',
  },
])
