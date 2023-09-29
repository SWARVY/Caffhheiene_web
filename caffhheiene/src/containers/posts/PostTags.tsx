import { MAIN_TITLE } from '@/constants/title';
import Filter from '@/containers/posts/Filter';
import { getCategoryData } from '@/utils/getPostData';

export default function PostTags() {
  const tagData = getCategoryData();

  return (
    <div className="flex-col w-full space-y-3 items-center justify-center">
      <div className="flex w-full justify-center md:justify-start">
        <h1 className="text-6xl md:text-5xl drop-shadow-xl font-bold">{MAIN_TITLE.posts}</h1>
      </div>
      <div className="flex flex-wrap w-full justify-center md:justify-start md:justify-items-center gap-3">
        {tagData.map((tag, idx) => (
          <Filter key={idx} name={tag.name} amount={tag.amount} />
        ))}
      </div>
    </div>
  );
}
