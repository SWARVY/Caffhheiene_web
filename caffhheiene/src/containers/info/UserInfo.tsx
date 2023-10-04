import SubTitle from '@/components/SubTitle';
import Title from '@/components/Title';
import { MAIN_TITLE, SUB_TITLE } from '@/constants/title';
import { USER } from '@/constants/user';
import Badges from '@/containers/info/Badges';
import UserCareer from '@/containers/info/UserCareer';
import { UserSmileSVG } from '../../../public/svgs';

export default function UserInfo() {
  return (
    <div className="w-full flex-col space-y-10">
      <Title
        svg={<UserSmileSVG className="h-14 w-14" />}
        title={MAIN_TITLE.info}
      />
      <div className="grid w-full">
        <div className="grid gap-10">
          <div className="space-y-3">
            <SubTitle subTitle={SUB_TITLE.introduce} />
            <div className="p-2">
              <p className="text-lg text-slate-500">{USER.description}</p>
              <UserCareer />
            </div>
          </div>
          <div className="space-y-3">
            <SubTitle subTitle={SUB_TITLE.currentlyLearning} />
            <Badges type="TECH" />
          </div>
          <div className="space-y-3">
            <SubTitle subTitle={SUB_TITLE.contact} />
            <Badges type="SNS" />
          </div>
        </div>
      </div>
    </div>
  );
}
