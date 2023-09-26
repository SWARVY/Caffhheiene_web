import { FILTERS } from '@/constants/tags';
import { TITLE } from '@/constants/title';

export default function posts() {
  return (
    <div className="flex flex-col mt-4 z-10 w-full items-center justify-center lg:flex">
      <div className="flex w-full text-start">
        <h1 className="text-4xl md:text-5xl font-MBC_1961_M drop-shadow-xl">{TITLE.posts}</h1>
      </div>
      <div className="flex w-full justify-start mt-6 gap-x-5">
        {FILTERS.map((filter) => (
          <div className="flex transition ease-in rounded-lg bg-white_hover hover:bg-white_hover_weight pr-2 pl-2 pt-1 pb-1 font-LINE_Rg">
            <h3 className="mr-1">{filter.name}</h3>
            <p className="text-xs">(0)</p>
          </div>
        ))}
      </div>
    </div>
  );
}
