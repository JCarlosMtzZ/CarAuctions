'use client';
import { deleteAuction } from '@/app/actions/auctionActions';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin5Line } from 'react-icons/ri';

type Props = {
  id: string;
};

export default function DeleteButton({ id }: Props) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function doDelete() {
    setLoading(true);
    deleteAuction(id)
      .then(res => {
        if (res.error) throw res.error;
        router.push('/');
      })
      .catch(error => {
        toast.error(error.status + ' ' + error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Button
      size='xs'
      className='rounded-lg border-none'
      color='failure'
      isProcessing={loading}
      onClick={doDelete}
    >
      <RiDeleteBin5Line size={26} />
    </Button>
  );
};
