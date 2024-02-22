import UserInfo from '@/containers/info/UserInfo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '소개',
  description: '신현호의 기술서재 / 소개',
}

export default function info() {
  return (
    <div className="grid w-full max-w-3xl">
      <UserInfo />
    </div>
  )
}
