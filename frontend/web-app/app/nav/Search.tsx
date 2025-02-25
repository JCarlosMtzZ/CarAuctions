'use client';
import { useParamsStore } from '@/hooks/useParamsStore';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search() {

  const router = useRouter();
  const pathname = usePathname();

  const setParams = useParamsStore(state => state.setParams);
  const searchValue = useParamsStore(state => state.searchValue);
  const setSearchValue = useParamsStore(state => state.setSearchValue);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChange(event: any) {
    setSearchValue(event.target.value);
  };

  function search() {
    if (pathname !== '/') router.push('/');
    setParams({ searchTerm: searchValue });
  };

  return (
    <div className='flex w-[220px] md:w-[50%] items-center border-2 rounded-full py-2 shadow-sm'>
      <input
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') search();
        }}
        value={searchValue}
        onChange={onChange}
        type="text"
        placeholder='Search for cars by make, model or color'
        className='
          input-custom text-sm text-gray-600
        '
      />
      <button
        onClick={search}
        className='w-[60px] flex items-center justify-center'
      >
        <FaSearch
          size={34}
          className='bg-green-600 text-white rounded-full p-2 cursor-pointer mx-2' />
      </button>
    </div>
  );
};
