import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SidebarLayout from 'layouts/sidebar-layout';
import Profile from 'components/user/profile';

const User = () => {
  return (
    <>
      <Head>
        <title>BrandTruth</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
        <Profile />
      </main>
    </>
  );
};

User.layout = SidebarLayout;

export default User;
