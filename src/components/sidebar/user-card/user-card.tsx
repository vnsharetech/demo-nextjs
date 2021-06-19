import React, { HTMLAttributes } from 'react';

export interface UserCardProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'elevation' | 'outlined';
  classes?: string;
}

export const UserCard = ({ variant = 'elevation', children, classes, ...rest }: UserCardProps) => {
  return (
    <div className={[classes, 'rounded-md p-3', 'bg-gray-200'].join(' ')} {...rest}>
      <div className='flex flex-col items-center'>
        <img className='w-10 h-10 mt-1 rounded-full' src='/profile.png' alt='' />
        <div className='mt-2 text-2xl text-gray-800 font-header'>Sean Sirman</div>
        <div className='-mt-1 font-sans text-gray-600 text-md'>ADMIN</div>
        <div className='w-full p-1 pl-4 mt-2'>Settings</div>
        <a href='' className='w-full p-1 pl-4 mt-2 bg-gray-300 rounded-sm hover:bg-gray-400'>
          Help
        </a>
        <a href='' className='w-full p-1 pl-4 mt-2 bg-gray-300 rounded-sm hover:bg-gray-400'>
          Logout
        </a>
      </div>
      {children}
    </div>
  );
};
