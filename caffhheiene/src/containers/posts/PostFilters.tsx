import Title from '@/components/Title';
import { MAIN_TITLE } from '@/constants/title';
import Filter from '@/containers/posts/Filter';
import { getAllCategory } from '@/utils/getPost';
import { MarkdownSVG } from '../../../public/svgs';

export default function PostFilters() {
  const filters = getAllCategory();

  return (
    <div className="w-full flex-col items-center justify-center space-y-3">
      <Title
        svg={<MarkdownSVG className="h-14 w-14" />}
        title={MAIN_TITLE.posts}
      />
      <div className="flex w-full flex-wrap justify-center gap-3 md:justify-start md:justify-items-center">
        {filters.map((filter, idx) => (
          <Filter key={idx} name={filter.name} amount={filter.amount} />
        ))}
      </div>
    </div>
  );
}
