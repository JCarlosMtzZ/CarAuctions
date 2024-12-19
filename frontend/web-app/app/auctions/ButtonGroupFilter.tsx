import { useParamsStore } from '@/hooks/useParamsStore';
import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  filterBy?: string,
  orderBy?: string
  title: string;
  buttons: { label: string, icon: IconType, value: string }[];
};

export default function ButtonGroupFilter({ title, filterBy, orderBy, buttons }: Props) {

  const setParams = useParamsStore(state => state.setParams);

  return (
    <div>
      <span className='uppercase text-sm text-gray-500 mr-2'>{title}</span>
      <ButtonGroup>
        {buttons.map(({ label, icon: Icon, value }) => (
          <Button
            className='flex items-center'
            key={value}
            onClick={() => setParams(filterBy ? { filterBy: value } : { orderBy : value })}
            color={`${filterBy ? filterBy === value ? 'green' : 'gray' : orderBy === value ? 'green' : 'gray'}`}
          >
            <Icon className='mr-3 h-4 w-4' />
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
