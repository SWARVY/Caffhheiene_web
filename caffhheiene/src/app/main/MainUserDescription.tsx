import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

export default function MainUserDescription() {
  return (
    <>
      <div className="flex w-full text-start">
        <h1 className="text-4xl md:text-5xl font-MBC_1961_M drop-shadow-xl">Caffhheiene</h1>
      </div>
      <div className="flex w-full justify-start mt-6 mb-6 gap-x-5">
        <div className="flex flex-col">
          <p className="text-slate-500 mb-3">Frontend Developer, aiming for a Web Full Stack Developer.</p>
          <p className="text-slate-500 mb-3">
            I am learning using React.js / Next.js / JavaScript / TypeScript / TailwindCSS
          </p>
          <div className="flex transition ease-in text-slate-400 mb-3 hover:text-slate-600">
            <p className="mr-1">Visit my github portfolio!</p>
            <ChevronDoubleRightIcon className="h-full w-4 items-center" />
          </div>
        </div>
      </div>
    </>
  );
}
