import { USER } from '@/constants/user';
import Badges from '@/containers/main/Badges';
import React from 'react';

export default function UserDescription() {
  return (
    <>
      <div className="flex w-full text-start">
        <h1 className="text-4xl md:text-5xl font-MBC_1961_M drop-shadow-xl">{USER.id}</h1>
      </div>
      <div className="flex-col md:grid md:grid-cols-2 w-full">
        <div className="grid md:p-4">
          <p className="text-slate-500">{USER.description}</p>
        </div>
        <div className="grid md:p-4 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-MBC_1961_M">Currently Learning</h1>
            <Badges type="TECH" />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-MBC_1961_M">Contact ME</h1>
            <Badges type="SNS" />
          </div>
        </div>
      </div>
    </>
  );
}
