import React from 'react';
import FavIcons from 'components/favicons';
import Logo from 'components/logo';
import AuthButton from 'components/user/auth-button';

const SiteLayout = ({ children }) => {
  return (
    <>
      <FavIcons />
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <Logo height={200} className='pb-4' />
        <AuthButton />
        {children}
      </div>
    </>
  );
};

export default SiteLayout;
