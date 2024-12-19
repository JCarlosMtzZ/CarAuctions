import { useParamsStore } from '@/hooks/useParamsStore';
import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react';

const pageSizeButtons = [4, 8, 12];

export default function PageSizeFilter() {

  const pageSize = useParamsStore(state => state.pageSize);
  const setParams = useParamsStore(state => state.setParams);

  return (
    <div className='items-center flex flex-row sm:flex-col sm:gap-2 lg:flex-row lg:gap-0'>
      <span className='uppercase text-sm text-gray-500 mr-2'>Page size</span>
      <ButtonGroup>
        {pageSizeButtons.map((value, i) => (
          <Button
            key={i}
            onClick={() => setParams({ pageSize: value })}
            color={`${pageSize === value ? 'green' : 'gray'}`}
            className='focus:ring-0'
          >
            {value}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
