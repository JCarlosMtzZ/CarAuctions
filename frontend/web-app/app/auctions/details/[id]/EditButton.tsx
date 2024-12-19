'use client';
import Link from 'next/link';
import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai';

type Props = {
  id: string;
};

export default function EditButton({ id }: Props) {
  return (
    <Link
      href={`/auctions/update/${id}`}
      className='p-2 hover:bg-black/5 rounded-lg'
    >
      <AiOutlineEdit size={30} />
    </Link>
  );
};
