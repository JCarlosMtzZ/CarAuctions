'use client';
import { useParamsStore } from '@/hooks/useParamsStore';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineCar } from 'react-icons/ai';

export default function Logo() {

  const router = useRouter();
  const pathname = usePathname();

  function doReset() {
    if (pathname !== '/') router.push('/');
    reset();
  };

  const reset = useParamsStore(state => state.reset);

  return (
    <div
      onClick={doReset}
      className="hover:bg-black/5 rounded-lg p-2 cursor-pointer flex items-center gap-2 text-3xl font-semibold text-green-600"
    >
      <AiOutlineCar size={34} />
      <div className='hidden sm:block'>Carsties Auctions</div>
    </div>
  );
};
