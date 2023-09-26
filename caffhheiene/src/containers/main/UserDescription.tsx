import { USER } from '@/constants/user';
import Badges from '@/containers/main/Badges';
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

export default function UserDescription() {
  return (
    <>
      <div className="flex w-full text-start">
        <h1 className="text-4xl md:text-5xl font-MBC_1961_M drop-shadow-xl">{USER.id}</h1>
      </div>
      <div className="grid w-full justify-start">
        <div className="grid p-4">
          <p className="text-slate-500">{USER.description}</p>
        </div>
        <div className="grid p-4">
          <h1 className="text-4xl font-MBC_1961_M">Currently Learning</h1>
          <Badges />
        </div>
      </div>
    </>
  );
}
