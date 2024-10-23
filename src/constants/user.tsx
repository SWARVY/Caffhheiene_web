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

export const USER_CAREER = Object.freeze([
  {
    date: '2019. 03. ~',
    name: '경기대학교 컴퓨터공학부',
  },
  {
    date: '2022. 10. ~',
    name: '경기대학교 InQ FE Developer & Tutor',
  },
  {
    date: '2023. 01. ~ 2023. 02.',
    name: '42SEOUL PISCINER',
  },
  {
    date: '2023. 03. ~ 2023. 10. 03.',
    name: '42SEOUL CADET',
  },
])

export const USER_SNS = Object.freeze([
  {
    name: 'github',
    svg: <GithubSVG className="size-full" />,
    isManaged: true,
    link: 'https://github.com/SWARVY',
  },
  {
    name: 'notion',
    svg: <NotionSVG className="size-full" />,
    isManaged: true,
    link: 'https://crystalline-chickadee-79a.notion.site/70d52e6cfeab486fb28dbba84c1ca054?pvs=4',
  },
  {
    name: 'instagram',
    svg: <InstagramSVG className="size-full" />,
    isManaged: true,
    link: 'https://www.instagram.com/caffhheine/',
  },
  {
    name: 'tistory',
    svg: <TistorySVG className="size-full" />,
    isManaged: false,
    link: 'https://swarvy.tistory.com/',
  },
])
