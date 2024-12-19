import { useParamsStore } from '@/hooks/useParamsStore';
import { Dropdown, DropdownItem } from 'flowbite-react';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  filterBy?: string,
  orderBy?: string
  title: string;
  buttons: { label: string, icon: IconType, value: string }[];
};

export default function DropdownFilter({ title, filterBy, orderBy, buttons }: Props) {

  const selectedValue = filterBy || orderBy;
  const setParams = useParamsStore(state => state.setParams);

  return (
    <div className='flex flex-col gap-2'>
      <Dropdown
        inline
        label={<span className='uppercase text-sm text-gray-500 mr-2'>{title}</span>}
      >
        {buttons.map(({ label, icon: Icon, value }) => (
          <DropdownItem
            key={value}
            onClick={() => setParams(filterBy ? { filterBy: value } : { orderBy : value })}
          >
            <Icon className='mr-3 h-4 w-4' />
            {label}
          </DropdownItem>
        ))}
      </Dropdown>
      <span className='flex items-center gap-2 p-2 border text-green-950 border-green-300 rounded-lg hover:bg-green-100'>
        {React.createElement(
          buttons.find(btn => btn.value === selectedValue)?.icon || 'div'
        )}
        {buttons.find(btn => btn.value === selectedValue)?.label}
      </span>
    </div>
  );
};
