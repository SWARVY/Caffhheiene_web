'use client'

import { RecoilRoot } from 'recoil'
import { type ReactNode } from 'react'

const RecoilRootWrapper = ({ children }: { children: ReactNode }) => (
  <RecoilRoot>{children}</RecoilRoot>
)

export default RecoilRootWrapper
