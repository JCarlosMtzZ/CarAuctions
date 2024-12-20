'use client';
import { useParamsStore } from '@/hooks/useParamsStore';
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';

type Props = {
  user: User;
};

export default function UserActions({ user }: Props) {

  const router = useRouter();
  const pathname = usePathname();
  const setParams = useParamsStore(state => state.setParams);

  function setWinner() {
    setParams({ winner: user.username, seller: undefined });

    if (pathname !== '/') router.push('/');
  };

  function setSeller() {
    setParams({ seller: user.username, winner: undefined });

    if (pathname !== '/') router.push('/');
  };

  return (
    <div className='hover:bg-black/5 rounded-lg p-2 text-green-600'>
      <Dropdown inline label={<FaRegUser size={26} className='-mr-1' />} >
        <DropdownHeader>
          <span className='font-semibold'>{user.name}</span>
        </DropdownHeader>
        <DropdownItem icon={HiUser} onClick={setSeller}>
          My Auctions
        </DropdownItem>
        <DropdownItem icon={AiFillTrophy} onClick={setWinner}>
          Auctions won
        </DropdownItem>
        <DropdownItem icon={AiFillCar}>
          <Link href='/auctions/create'>
            Sell my car
          </Link>
        </DropdownItem>
        {/*<DropdownItem icon={HiCog}>
          <Link href='/session'>
            Session (dev only!)
          </Link>
        </DropdownItem>*/}
        <DropdownDivider />
        <DropdownItem icon={AiOutlineLogout} onClick={() => signOut({ redirectTo: '/' })}>
          Sign out
        </DropdownItem>
      </Dropdown>
    </div>
  );
};
