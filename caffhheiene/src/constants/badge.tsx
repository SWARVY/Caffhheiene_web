import {
  AxiosSVG,
  CSS3SVG,
  FramerSVG,
  GithubSVG,
  GitSVG,
  Html5SVG,
  InstagramSVG,
  JavaScriptSVG,
  NaverSVG,
  NextJsSVG,
  ReactQuerySVG,
  ReactSVG,
  RecoilSVG,
  ReduxSVG,
  TailwindcssSVG,
  TypeScriptSVG,
} from '../../public/svgs';

export const BADGES = Object.freeze({
  css3: {
    svg: <CSS3SVG width="20px" height="20px" />,
    color: '#1572B6',
    name: 'CSS3',
  },
  github: {
    svg: <GithubSVG width="20px" height="20px" />,
    color: '#000000',
    name: 'Github',
    link: 'https://github.com/SWARVY',
  },
  html5: {
    svg: <Html5SVG width="20px" height="20px" />,
    color: '#E34F26',
    name: 'HTML5',
  },
  instagram: {
    svg: <InstagramSVG width="20px" height="20px" />,
    color: '#E4405F',
    name: 'Instagram',
    link: 'https://www.instagram.com/caffhheine/',
  },
  javascript: {
    svg: <JavaScriptSVG width="20px" height="20px" />,
    color: '#F7DF1E',
    name: 'JavaScript',
  },
  naver: {
    svg: <NaverSVG width="20px" height="20px" />,
    color: '#03C75A',
    name: 'Naver',
    link: 'mailto:swarvy0826@naver.com',
  },
  nextjs: {
    svg: <NextJsSVG width="20px" height="20px" />,
    color: '#000000',
    name: 'Next',
  },
  react: {
    svg: <ReactSVG width="20px" height="20px" />,
    color: '#61DAFB',
    name: 'React',
  },
  reactQuery: {
    svg: <ReactQuerySVG width="20px" height="20px" />,
    color: '#FF4154',
    name: 'ReactQuery',
  },
  recoil: {
    svg: <RecoilSVG width="20px" height="20px" />,
    color: '#3578E5',
    name: 'Recoil',
  },
  redux: {
    svg: <ReduxSVG width="20px" height="20px" />,
    color: '#764ABC',
    name: 'Redux',
  },
  tailwindcss: {
    svg: <TailwindcssSVG width="20px" height="20px" />,
    color: '#06B6D4',
    name: 'TailwindCSS',
  },
  typescript: {
    svg: <TypeScriptSVG width="20px" height="20px" />,
    color: '#3178C6',
    name: 'TypeScript',
  },
  framer: {
    svg: <FramerSVG width="20px" height="20px" />,
    color: '#0055FF',
    name: 'Framer',
  },
  git: {
    svg: <GitSVG width="20px" height="20px" />,
    color: '#F05032',
    name: 'Git',
  },
  axios: {
    svg: <AxiosSVG width="20px" height="20px" />,
    color: '#5A29E4',
    name: 'Axios',
  },
});

export const TECH_BADGES = [
  BADGES.git,
  BADGES.react,
  BADGES.nextjs,
  BADGES.javascript,
  BADGES.typescript,
  BADGES.recoil,
  BADGES.html5,
  BADGES.css3,
  BADGES.axios,
  BADGES.reactQuery,
  BADGES.tailwindcss,
  BADGES.framer,
];
export const SNS_BADGES = [BADGES.github, BADGES.instagram, BADGES.naver];
