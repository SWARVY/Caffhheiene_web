import Title from '@/components/Title';
import { MAIN_TITLE } from '@/constants/title';
import Filter from '@/containers/posts/Filter';
import { getCategoryData } from '@/utils/getPostData';
import { MarkdownSVG } from '../../../public/svgs';

export default function PostTags() {
  const tagData = getCategoryData();

  return (
    <div className="flex-col w-full space-y-3 items-center justify-center">
      <Title svg={<MarkdownSVG className="w-14 h-14" />} title={MAIN_TITLE.posts} />
      <div className="flex flex-wrap w-full justify-center md:justify-start md:justify-items-center gap-3">
        {tagData.map((tag, idx) => (
          <Filter key={idx} name={tag.name} amount={tag.amount} />
        ))}
      </div>
    </div>
  );
}
