import { LogoSVG } from '../../../public/svgs'

export default function TitleLogo() {
  return (
    <div
      className="grid justify-items-center fill-ochre_light dark:fill-ochre"
      style={{
        background:
          'linear-gradient(to bottom, transparent 38px, #ddd 38px) 0 0 / 100vw 40px repeat-y, linear-gradient(to right, transparent 38px, #ddd 38px) 0 0 / 40px 100vh repeat-x',
        backgroundPosition: '50% 50%',
      }}>
      <LogoSVG className="w-4/5" />
    </div>
  )
}
