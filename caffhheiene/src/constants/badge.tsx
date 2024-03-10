import {
  AxiosSVG,
  CSS3SVG,
  DiscordSVG,
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
} from '../../public/svgs'

export const BADGES = Object.freeze({
  css3: {
    svg: <CSS3SVG className="h-4 w-4" />,
    color: '#1572B6',
    name: 'CSS3',
  },
  github: {
    svg: <GithubSVG className="h-4 w-4" />,
    color: '#000000',
    name: 'Github',
    link: 'https://github.com/SWARVY',
  },
  html5: {
    svg: <Html5SVG className="h-4 w-4" />,
    color: '#E34F26',
    name: 'HTML5',
  },
  instagram: {
    svg: <InstagramSVG className="h-4 w-4" />,
    color: '#E4405F',
    name: 'Instagram',
    link: 'https://www.instagram.com/caffhheine/',
  },
  javascript: {
    svg: <JavaScriptSVG className="h-4 w-4" />,
    color: '#F7DF1E',
    name: 'JavaScript',
  },
  naver: {
    svg: <NaverSVG className="h-4 w-4" />,
    color: '#03C75A',
    name: 'Naver',
    link: 'mailto:swarvy0826@naver.com',
  },
  nextjs: {
    svg: <NextJsSVG className="h-4 w-4" />,
    color: '#000000',
    name: 'Next',
  },
  react: {
    svg: <ReactSVG className="h-4 w-4" />,
    color: '#61DAFB',
    name: 'React',
  },
  reactQuery: {
    svg: <ReactQuerySVG className="h-4 w-4" />,
    color: '#FF4154',
    name: 'ReactQuery',
  },
  recoil: {
    svg: <RecoilSVG className="h-4 w-4" />,
    color: '#3578E5',
    name: 'Recoil',
  },
  redux: {
    svg: <ReduxSVG className="h-4 w-4" />,
    color: '#764ABC',
    name: 'Redux',
  },
  tailwindcss: {
    svg: <TailwindcssSVG className="h-4 w-4" />,
    color: '#06B6D4',
    name: 'TailwindCSS',
  },
  typescript: {
    svg: <TypeScriptSVG className="h-4 w-4" />,
    color: '#3178C6',
    name: 'TypeScript',
  },
  framer: {
    svg: <FramerSVG className="h-4 w-4" />,
    color: '#0055FF',
    name: 'Framer',
  },
  git: {
    svg: <GitSVG className="h-4 w-4" />,
    color: '#F05032',
    name: 'Git',
  },
  axios: {
    svg: <AxiosSVG className="h-4 w-4" />,
    color: '#5A29E4',
    name: 'Axios',
  },
  discord: {
    svg: <DiscordSVG className="h-4 w-4" />,
    color: '#5865F2',
    name: 'Discord',
  },
})

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
]
export const SNS_BADGES = [BADGES.github, BADGES.instagram, BADGES.naver]
