import Heading from '@/app/components/Heading';
import React from 'react';
import AuctionForm from '../../AuctionForm';
import { getDetailedViewData } from '@/app/actions/auctionActions';

export default async  function Update(props: { params: Promise<{ id: string }> }) {

  const { params } = props;
  const { id } = await params;
  const data = await getDetailedViewData(id);

  return (
    <div className='mx-auto md:max-w-[75%] shadow-lg p-8 sm:p-10 bg-white rounded-lg'>
      <Heading title='Update your auction' subtitle='Please update the details of your car' />
      <AuctionForm auction={data} />
    </div>
  );
};
