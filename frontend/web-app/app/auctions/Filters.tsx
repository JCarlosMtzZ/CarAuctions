import { useParamsStore } from '@/hooks/useParamsStore';
import React from 'react';
import { AiOutlineClockCircle, AiOutlineSortAscending } from 'react-icons/ai';
import { BsFillStopCircleFill, BsStopwatchFill } from 'react-icons/bs';
import { GiFinishLine, GiFlame } from 'react-icons/gi';
import DropdownFilter from './DropdownFilter';
import ButtonGroupFilter from './ButtonGroupFilter';
import PageSizeFilter from './PageSizeFilter';

const orderButtons = [
  {
    label: 'Alphabetical',
    icon: AiOutlineSortAscending,
    value: 'make'
  },
  {
    label: 'End date',
    icon: AiOutlineClockCircle,
    value: 'endingSoon'
  },
  {
    label: 'Recently added',
    icon: BsFillStopCircleFill,
    value: 'new'
  }
];
const filterButtons = [
  {
    label: 'Live Auctions',
    icon: GiFlame,
    value: 'live'
  },
  {
    label: 'Ending < 6 hours',
    icon: GiFinishLine,
    value: 'endingSoon'
  },
  {
    label: 'Completed',
    icon: BsStopwatchFill,
    value: 'finished'
  }
];

export default function Filters() {
  
  const orderBy = useParamsStore(state => state.orderBy);
  const filterBy = useParamsStore(state => state.filterBy);

  return (
    <>
      <div className='flex flex-col lg:hidden mb-4 gap-4'>
        <div className='flex justify-between'>
          <DropdownFilter
            filterBy={filterBy}
            title='Filter by'
            buttons={filterButtons}
          />
          <DropdownFilter
            orderBy={orderBy}
            title='Order by'
            buttons={orderButtons}
          />
          <div className='hidden sm:flex'>
            <PageSizeFilter />
          </div>
        </div>
        <div className='flex sm:hidden'>
          <PageSizeFilter />
        </div>
      </div>
      <div className='hidden lg:flex justify-between items-center mb-4'>
        <ButtonGroupFilter
          title='Filter by'
          filterBy={filterBy}
          buttons={filterButtons}
        />
        <ButtonGroupFilter
          title='Order by'
          orderBy={orderBy}
          buttons={orderButtons}
        />
        <PageSizeFilter />
      </div>
    </>
    
  );
};
