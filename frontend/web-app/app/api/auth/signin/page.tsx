import EmptyFilter from '@/app/components/EmptyFilter';
import React from 'react';

export default async function SignIn(props: { searchParams: Promise<{ callbackUrl: string }>}) {

  const { searchParams } = props;
  const { callbackUrl } = await searchParams;

  return (
    <EmptyFilter
      title='You need to be logged in'
      subtitle='Please click below to login'
      showLogin
      callbackUrl={callbackUrl}
    />
  );
};
