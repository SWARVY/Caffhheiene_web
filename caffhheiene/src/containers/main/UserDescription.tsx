import { USER } from '@/constants/user';
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

export default function UserDescription() {
  return (
    <>
      <div className="flex w-full text-start">
        <h1 className="text-4xl md:text-5xl font-MBC_1961_M drop-shadow-xl">{USER.id}</h1>
      </div>
      <div className="flex w-full justify-start mt-6 mb-6 gap-x-5">
        <div className="flex flex-col">
          {USER.description.split('$').map((string) => (
            <p className="text-slate-500 mb-3">{string}</p>
          ))}
          <div className="flex transition ease-in text-slate-400 mb-3 hover:text-slate-600">
            <p className="mr-1">{USER.github}</p>
            <ChevronDoubleRightIcon className="h-full w-4 items-center" />
          </div>
        </div>
      </div>
    </>
  );
}
