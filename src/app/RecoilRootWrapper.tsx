'use client'

import { RecoilRoot } from 'recoil'
import { type ReactNode } from 'react'

function RecoilRootWrapper({ children }: { children: ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default RecoilRootWrapper
