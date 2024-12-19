import Heading from '@/app/components/Heading';
import React from 'react';
import AuctionForm from '../AuctionForm';

export default function Create() {
  return (
    <div className='mx-auto md:max-w-[75%] shadow-lg p-8 sm:p-10 bg-white rounded-lg'>
      <Heading title='Sell your car' subtitle='Please enter the details of your car' />
      <AuctionForm />
    </div>
  );
};
