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
      <div className="flex flex-col p-4">
        <div className="flex p-2">
          <CalendarIcon className="w-3 h-full items-center mr-2" />
          <p className="text-xs">{data.date}</p>
        </div>
        <h1 className="p-2 text-xl font-LINE_Bd">{data.title}</h1>
      </div>
    </div>
  );
}
