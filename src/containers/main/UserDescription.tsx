import { CircleArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'

export default function UserDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p>안녕하세요, 프론트엔드 개발자 신현호입니다.</p>
        <p>
          React, Next 기반의 개발을 선호하며, 어제보다 너 나아진 오늘을
          지향합니다.
        </p>
      </div>
      <div>
        <p>
          해당 블로그는 23년 6월부터 직접 개발한 기술 블로그이며, 자세한 사항은
          하단의 링크를 통해 확인하실 수 있습니다.
        </p>
        <div className="flex gap-x-2">
          <Link
            href="https://github.com/SWARVY/Caffhheiene_web"
            className="flex items-center gap-x-1 underline underline-offset-2">
            깃허브 링크
            <CircleArrowOutUpRight className="size-3" />
          </Link>
          <Link
            href="http://localhost:3000/posts/series-%EB%B8%94%EB%A1%9C%EA%B7%B8_%EC%A0%9C%EC%9E%91%EA%B8%B0/1"
            className="flex items-center gap-x-1 underline underline-offset-2">
            블로그 개발기
            <CircleArrowOutUpRight className="size-3" />
          </Link>
        </div>
      </div>
      <div>
        <p>
          저와 이야기를 나누시고 싶다면 언제든 하단의 SNS를 통해 연락해주세요.
          커피챗은 언제나 환영합니다 :)
        </p>
      </div>
    </div>
  )
}
