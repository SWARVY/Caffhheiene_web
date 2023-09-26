import { CalendarIcon } from '@heroicons/react/20/solid';

interface CardData {
  date: string;
  title: string;
}

interface CardComponentProps {
  data: CardData;
}

export default function Card({ data }: CardComponentProps) {
  return (
    <div className="grid grid-cols-1 rounded-lg bg-white_hover">
      <img className="rounded-t-lg" src="http://via.placeholder.com/640x480" alt="sample" />
      <div className="flex flex-col p-3">
        <div className="flex p-2">
          <CalendarIcon className="w-3 h-3 items-center mr-2" />
          <span className="text-xs">{data.date}</span>
        </div>
        <h1 className="p-2 text-xl">{data.title}</h1>
      </div>
    </div>
  );
}
