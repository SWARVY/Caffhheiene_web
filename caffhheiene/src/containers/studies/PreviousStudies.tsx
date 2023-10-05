import Title from '@/components/Title';
import { PREVIOUS_STUDIES } from '@/constants/previousStudies';
import { MAIN_TITLE, SUB_TITLE } from '@/constants/title';
import StudyGroup from '@/containers/studies/StudyGroup';
import { BookReadSVG } from '../../../public/svgs';

export default function PreviousStudies() {
  return (
    <div className="grid gap-10">
      <Title
        svg={<BookReadSVG className="h-14 w-14" />}
        title={MAIN_TITLE.studies}
      />
      <h1 className="rounded-md bg-white_hover p-3 shadow-md transition ease-in hover:bg-white_hover_weight">
        {SUB_TITLE.notice}
      </h1>
      <ul className="grid gap-10">
        {PREVIOUS_STUDIES.map((data, idx) => (
          <StudyGroup
            key={idx}
            group={data.group}
            imgSrc={data.imgSrc}
            content={data.content}
            link={data.link}
          />
        ))}
      </ul>
    </div>
  );
}
