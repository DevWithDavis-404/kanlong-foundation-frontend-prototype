"use client";

import Image from "next/image";

export function AppLogo() {
  return (
    <div className='flex items-center gap-4'>
      <div className='aspect-square size-8'>
        <Image
          src='/assets/logo-icon.png'
          alt='Logo'
          width={80}
          height={80}
          // fill
          className='size-8 rounded-md'
        />
      </div>
      <div className='grid'>
        <span className='font-bold text-yellow-400'>Kanlong</span>
        <span className='font-medium text-green-600'>Foundation</span>
      </div>
    </div>
  );
}
