import { TITLE } from '@/constants/title';
import { USER } from '@/constants/user';
import Badges from '@/containers/resume/Badges';

export default function UserDescription() {
  return (
    <div className="flex-col w-full space-y-10">
      <div className="flex w-full text-start md:gap-y-0">
        <h1 className="text-5xl drop-shadow-xl">{USER.id}</h1>
      </div>
      <div className="grid w-full">
        <div className="grid gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl">{TITLE.introduce}</h1>
            <p className="text-lg text-slate-500">{USER.description}</p>
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl">{TITLE.currentlyLearning}</h1>
            <Badges type="TECH" />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl">{TITLE.contact}</h1>
            <Badges type="SNS" />
          </div>
        </div>
      </div>
    </div>
  );
}
