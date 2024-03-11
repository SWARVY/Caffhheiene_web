import ImgWithPlaceholder from '@/components/ImgWithPlaceholder'
import { USER } from '@/constants/user'
import { SparklesIcon } from '@heroicons/react/20/solid'
import Badges from './Badges'
import TitleLogo from './TitleLogo'

export default function Introduce() {
  return (
    <section className="grid w-full gap-y-4">
      <TitleLogo />
      <div className="grid justify-items-center gap-x-10 gap-y-10 pt-10 lg:grid-cols-3">
        <figure className="grid w-72 justify-center gap-y-4 lg:w-full">
          <ImgWithPlaceholder
            src={USER.profileImg}
            tailwindClassNames="h-52 w-52 rounded-full"
          />
          <figcaption className="grid justify-items-center gap-y-2 text-black dark:text-white">
            <div className="flex items-center gap-x-2 text-center lg:w-full lg:text-start">
              <h2 className="text-xl font-bold">{USER.name}</h2>
              <p className="text-gray-400 dark:text-gray-300">
                {USER.description}
              </p>
            </div>
            <p className="break-keep text-center lg:w-full lg:text-start">
              {USER.introduce}
            </p>
          </figcaption>
        </figure>
        <article className="w-full flex-col rounded-xl bg-white font-BlogTitle text-black shadow-lg dark:bg-background_component dark:text-white lg:col-span-2">
          <div className="flex items-center justify-between rounded-t-xl bg-ochre pl-3">
            <SparklesIcon className="h-5 w-5 fill-white" aria-hidden="true" />
            <div className="flex items-center justify-end gap-x-2 p-3">
              <div
                className="h-3 w-3 rounded-full bg-red-600"
                aria-hidden="true"
              />
              <div
                className="h-3 w-3 rounded-full bg-yellow-500"
                aria-hidden="true"
              />
              <div
                className="h-3 w-3 rounded-full bg-green-600"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="grid items-center gap-y-2 p-1 pb-3 pt-3 lg:p-4">
            <section>
              <h3 className="pl-2 lg:pl-0">📚 학습중인 기술들</h3>
              <Badges type="TECH" />
            </section>
            <section>
              <h3 className="pl-2 lg:pl-0">🔖 저에 대한 자세한 정보는...</h3>
              <Badges type="SNS" />
            </section>
          </div>
        </article>
      </div>
    </section>
  )
}
