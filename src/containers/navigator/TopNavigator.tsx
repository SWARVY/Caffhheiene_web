'use client'

import DarkmodeButton from '@/containers/navigator/DarkmodeButton'
import Navigator from '@/containers/navigator/Navigator'

import { LogoSVG } from '../../../public/svgs'
import ProgressBar from './ProgressBar'

export default function TopNavigator() {
  return (
    <Navigator>
      <ProgressBar />
      <div className="flex w-full justify-between px-4 xs:px-20">
        <Navigator.Brand
          icon={
            <LogoSVG className="size-full transition-colors hover:fill-gray-300" />
          }
          link="/posts/all/1"
        />
        <div className="flex items-center justify-center gap-x-5">
          <DarkmodeButton />
        </div>
      </div>
    </Navigator>
  )
}
