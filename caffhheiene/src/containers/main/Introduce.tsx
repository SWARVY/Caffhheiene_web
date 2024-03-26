import TitleLogo from './TitleLogo'
import ProfileImg from './ProfileImg'
import ProfileBox from './ProfileBox'

export default function Introduce() {
  return (
    <section className="grid w-full gap-y-4">
      <TitleLogo />
      <div className="grid justify-items-center gap-x-10 gap-y-10 pt-10 lg:grid-cols-3">
        <ProfileImg />
        <ProfileBox />
      </div>
    </section>
  )
}
