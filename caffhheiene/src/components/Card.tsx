import { CalendarIcon } from '@heroicons/react/20/solid';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

interface CardData {
  date: string;
  title: string;
}

interface CardComponentProps {
  data: CardData;
}

export default function Card({ data }: CardComponentProps) {
  return (
    <div className="grid grid-cols-1 rounded-md border-2 bg-white_hover overflow-hidden">
      <img className="border-b" src="http://via.placeholder.com/640x480" alt="sample" />
      <div className="flex flex-col p-3 bg-white">
        <div className="grid grid-cols-1 p-2 items-center">
          <div className="flex h-full justify-items-end">
            <CalendarIcon className="w-3 h-3 items-center mr-2" />
            <span className="text-xs">{data.date}</span>
          </div>
        </div>
        <h1 className="p-2 text-xl">{data.title}</h1>
        <hr />
        <div className="grid grid-cols-1 mt-2 p-2 items-center">
          <div className="flex h-full justify-items-end">
            <ChatBubbleOvalLeftIcon className="w-3 h-3 items-center mr-2" />
            <span className="text-xs">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
