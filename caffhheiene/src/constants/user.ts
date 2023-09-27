import { BADGES } from '@/constants/badge';

export const USER = Object.freeze({
  id: 'Caffhheiene',
  description: 'Frontend Developer',
  github: 'Visit my github portfolio!',
});

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
    date: '2023. 03. ~ 2023. 10. 03.',
    name: '42SEOUL CADET',
  },
]);

export const PREVIOUS_PROJECTS = [
  {
    link: 'https://github.com/SWARVY/KUBS',
    name: 'KUBS (경기대학교 종합 예약 시스템)',
    description: '학교 시설물들에 대한 대여 시스템을 웹에서 제공하는 서비스를 개발하였습니다',
    stack: [BADGES.react, BADGES.redux, BADGES.javascript],
  },
  {
    link: 'https://github.com/SWARVY/Ezipnaezip_web',
    name: '이집내집 (AI 인테리어 디자인 사이트)',
    description: '웹에서 DALL.E를 사용한 AI 인테리어 디자인 / 커뮤니티 서비스를 개발하였습니다',
    stack: [BADGES.react, BADGES.recoil, BADGES.reactQuery, BADGES.javascript, BADGES.tailwindcss],
  },
  {
    link: 'https://github.com/TeamCommerce',
    name: '팀커머스 (이커머셜 웹 사이트)',
    description: '이 커머스 웹 플랫폼(피팅노트)을 클론 코딩하였습니다',
    stack: [BADGES.react, BADGES.recoil, BADGES.reactQuery, BADGES.typescript, BADGES.tailwindcss],
  },
  {
    link: 'https://github.com/SWARVY/Caffhheiene_web',
    name: 'Caffhheiene (개인 기술블로그)',
    description: '지금 보고계시는 이 블로그를 직접 만들었습니다',
    stack: [BADGES.nextjs, BADGES.recoil, BADGES.reactQuery, BADGES.typescript, BADGES.tailwindcss],
  },
];
