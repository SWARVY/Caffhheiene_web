import {
  CSS3SVG,
  GithubSVG,
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
});

export const TECH_BADGES = Object.values(BADGES);
export const SNS_BADGES = [BADGES.github, BADGES.instagram, BADGES.naver];
