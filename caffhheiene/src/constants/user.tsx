import {
  GithubSVG,
  InstagramSVG,
  JavaScriptSVG,
  NaverSVG,
  NextJsSVG,
  ReactQuerySVG,
  ReactSVG,
  RecoilSVG,
  TailwindcssSVG,
  TypeScriptSVG,
} from '../../public/svgs';

export const USER = Object.freeze({
  id: 'Caffhheiene',
  description: 'Frontend Developer',
  github: 'Visit my github portfolio!',
});

export const SNS_BADGES = [
  {
    svg: <GithubSVG width="20px" height="20px" />,
    name: 'Github',
    color: '#000000',
  },
  {
    svg: <InstagramSVG width="20px" height="20px" />,
    name: 'Instagram',
    color: '#E4405F',
  },
  {
    svg: <NaverSVG width="20px" height="20px" />,
    name: 'Naver',
    color: '#03C75A',
  },
];

export const TECH_BADGES = [
  {
    svg: <JavaScriptSVG width="20px" height="20px" />,
    name: 'JavaScript',
    color: '#F7DF1E',
  },
  {
    svg: <TypeScriptSVG width="20px" height="20px" />,
    name: 'TypeScript',
    color: '#3178C6',
  },
  {
    svg: <TailwindcssSVG width="20px" height="20px" />,
    name: 'TailwindCSS',
    color: '#06B6D4',
  },
  {
    svg: <NextJsSVG width="20px" height="20px" />,
    name: 'Next',
    color: '#000000',
  },
  {
    svg: <ReactQuerySVG width="20px" height="20px" />,
    name: 'ReactQuery',
    color: '#FF4154',
  },
  {
    svg: <RecoilSVG width="20px" height="20px" />,
    name: 'Recoil',
    color: '#3578E5',
  },
  {
    svg: <ReactSVG width="20px" height="20px" />,
    name: 'React',
    color: '#61DAFB',
  },
];
