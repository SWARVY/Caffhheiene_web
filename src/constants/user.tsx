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
    '프론트엔드 개발자를 꿈꾸고 있는 대학생입니다. 끊임없이 배우고 성장하는 개발자가 되기 위해 노력하고 있습니다.',
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
      <EnvelopeIcon className="fill-light_main/60 hover:fill-light_main size-full transition-colors dark:fill-white dark:hover:fill-gray-400" />
    ),
    link: 'mailto:swarvy0826@naver.com',
  },
])
