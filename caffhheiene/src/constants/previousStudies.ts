import { USER } from '@/constants/user'

const PREVIOUS_STUDIES_INDIVIDUAL = [
  {
    title: '[Arcade 42] 코딩 테스트 스터디',
    link: 'https://github.com/h-beeen/Arcade42',
  },
  {
    title: '[Gaechu.org] 코딩 테스트 스터디',
    link: 'https://github.com/Gaechu-org/Algorithms',
  },
]

const PREVIOUS_STUDIES_GAMANGJUM = [
  {
    title: '[Blog] Study Log Archive 스터디',
    link: 'https://github.com/Gamangjum-lihou/study-log-archive',
  },
  {
    title: '[TypeScript] Effective Typescript 스터디',
    link: 'https://github.com/Gamangjum-lihou/effective-typescript-study',
  },
  {
    title: '[JavaScript] 프로그래머스 스터디',
    link: 'https://github.com/Gamangjum-lihou/coding-test-study',
  },
]

const PREVIOUS_STUDIES_CHAEUM = [
  {
    title: '[JavaScript] 우아한 테크코스 프리코스 피드백 스터디',
    link: 'https://github.com/orgs/chae-um/repositories',
  },
]

export const PREVIOUS_STUDIES = [
  {
    group: 'Caffhheiene',
    imgSrc: USER.profileImg,
    content: PREVIOUS_STUDIES_INDIVIDUAL,
    link: 'https://github.com/SWARVY',
  },
  {
    group: '가맹점 1호',
    imgSrc: 'https://avatars.githubusercontent.com/u/118907771?s=200&v=4',
    content: PREVIOUS_STUDIES_GAMANGJUM,
    link: 'https://github.com/Gamangjum-lihou',
  },
  {
    group: '채움',
    imgSrc: 'https://avatars.githubusercontent.com/u/148032100?s=200&v=4',
    content: PREVIOUS_STUDIES_CHAEUM,
    link: 'https://github.com/chae-um',
  },
]
