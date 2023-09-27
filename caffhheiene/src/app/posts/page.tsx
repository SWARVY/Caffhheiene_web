import { FILTERS } from '@/constants/tags';
import { TITLE } from '@/constants/title';

export default function posts() {
  return (
    <div className="flex-col w-full space-y-3 items-center justify-center">
      <div className="flex w-full text-start">
        <h1 className="text-4xl md:text-5xl drop-shadow-xl">{TITLE.posts}</h1>
      </div>
      <div className="flex w-full justify-start  gap-x-5">
        {FILTERS.map((filter, idx) => (
          <div
            key={idx}
            className="flex transition ease-in rounded-lg bg-white_hover hover:bg-white_hover_weight pr-2 pl-2 pt-1 pb-1"
          >
            <h3 className="mr-1">{filter.name}</h3>
            <p className="text-xs">(0)</p>
          </div>
        ))}
      </div>
    </div>
  );
}
