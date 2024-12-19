'use client';
import { signIn } from 'next-auth/react';
import React from 'react';
import { RiLoginCircleLine } from 'react-icons/ri';

export default function LoginButton() {
  return (
    <button
      className='hover:bg-black/5 p-2 rounded-lg'
      onClick={() => signIn('id-server', { redirectTo: '/'}, { prompt: 'login' })}
    >
      <RiLoginCircleLine
        size={34}
        className='text-green-600 rounded-full cursor-pointer'
      />
    </button>
  );
};
