import { USER } from '@/constants/user';
import Badges from '@/containers/main/Badges';
import React from 'react';

export default function UserDescription() {
  return (
    <div className="grid w-full">
      <div className="flex w-full text-start gap-y-10 md:gap-y-0">
        <h1 className="text-5xl drop-shadow-xl">{USER.id}</h1>
      </div>
      <div className="grid md:grid-cols-5 w-full">
        <div className="md:p-4 md:col-span-3 space-y-3">
          <h1 className="text-4xl">Introduce</h1>
          <p className="text-slate-500">{USER.description}</p>
        </div>
        <div className="grid md:p-4 md:col-span-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl">Currently Learning</h1>
            <Badges type="TECH" />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl">Contact</h1>
            <Badges type="SNS" />
          </div>
        </div>
      </div>
    </div>
  );
}
