'use client'

import Navigator from '@/containers/navigator/Navigator'
import { TOP_NAVBAR } from '@/constants/navbar'
import DarkmodeButton from '@/containers/navigator/DarkmodeButton'
import { LogoSVG } from '../../../public/svgs'
import ProgressBar from './ProgressBar'

export default function TopNavigator() {
  return (
    <Navigator>
      <div className="flex w-full flex-col">
        <Navigator.Brand icon={<LogoSVG className="size-full" />} />
        <Navigator.Wrapper>
          <Navigator.Shortcuts />
          <Navigator.Collapse>
            {TOP_NAVBAR.tags.map(({ tag, link }) => (
              <Navigator.Button key={`${tag}-${link}`} tag={tag} link={link} />
            ))}
          </Navigator.Collapse>
          <Navigator.Section>
            <DarkmodeButton />
          </Navigator.Section>
        </Navigator.Wrapper>
        <ProgressBar />
      </div>
    </Navigator>
  )
}
