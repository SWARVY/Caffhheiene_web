import {
  JavascriptSvg,
  NextJsSvg,
  ReactQuerySvg,
  ReactSvg,
  RecoilSvg,
  TailwindcssSvg,
  TypescriptSvg,
} from '../../public/svgs';

export const USER = Object.freeze({
  id: 'Caffhheiene',
  description: 'Frontend Developer',
  github: 'Visit my github portfolio!',
});

export const BADGES = [
  {
    svg: <JavascriptSvg />,
    name: 'JavaScript',
    color: '#F7DF1E',
  },
  {
    svg: <TypescriptSvg />,
    name: 'TypeScript',
    color: '#3178C6',
  },
  {
    svg: <TailwindcssSvg />,
    name: 'TailwindCSS',
    color: '#06B6D4',
  },
  {
    svg: <NextJsSvg />,
    name: 'Next',
    color: '#000000',
  },
  {
    svg: <ReactQuerySvg />,
    name: 'ReactQuery',
    color: '#FF4154',
  },
  {
    svg: <RecoilSvg />,
    name: 'Recoil',
    color: '#3578E5',
  },
  {
    svg: <ReactSvg />,
    name: 'React',
    color: '#61DAFB',
  },
];
