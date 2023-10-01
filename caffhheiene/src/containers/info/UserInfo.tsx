import Title from '@/components/Title';
import { MAIN_TITLE, SUB_TITLE } from '@/constants/title';
import { USER, USER_CAREER } from '@/constants/user';
import Badges from '@/containers/info/Badges';
import { UserSmileSVG } from '../../../public/svgs';

export default function UserInfo() {
  return (
    <div className="flex-col w-full space-y-10">
      <Title svg={<UserSmileSVG className="w-14 h-14" />} title={MAIN_TITLE.info} />
      <div className="grid w-full">
        <div className="grid gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold italic hover:underline hover:underline-offset-1">
              {SUB_TITLE.introduce}
            </h1>
            <div className="p-2">
              <p className="text-lg text-slate-500">{USER.description}</p>
              <div className="flex-col w-full md:w-3/4 space-y-1 p-2">
                {USER_CAREER.map((data, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-x-3">
                    <h1 className="text-gray-500">{data.date}</h1>
                    <h1>{data.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold italic hover:underline hover:underline-offset-1">
              {SUB_TITLE.currentlyLearning}
            </h1>
            <Badges type="TECH" />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold italic hover:underline hover:underline-offset-1">
              {SUB_TITLE.contact}
            </h1>
            <Badges type="SNS" />
          </div>
        </div>
      </div>
    </div>
  );
}
