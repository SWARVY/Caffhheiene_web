import { TITLE } from '@/constants/title';
import Filter from '@/containers/posts/Filter';
import { getCategoryData } from '@/utils/getPostData';

export default function PostTags() {
  const tagData = getCategoryData();

  return (
    <div className="flex-col w-full space-y-3 items-center justify-center">
      <div className="flex w-full text-start">
        <h1 className="text-4xl md:text-5xl drop-shadow-xl font-bold">{TITLE.posts}</h1>
      </div>
      <div className="grid grid-cols-6 justify-items-center">
        {tagData.map((tag, idx) => (
          <Filter key={idx} name={tag.name} amount={tag.amount} />
        ))}
      </div>
    </div>
  );
}
