import React, { Dispatch, Fragment, SetStateAction } from 'react';
import classNames from 'utils/classnames';
import { Logo } from 'components/logo';

import { Dialog, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

import { BellIcon, MenuAlt2Icon } from '@heroicons/react/outline';
import { UserAvatar } from './user-avatar';

const userNavigation = [
  { name: 'Your Profile', href: '/me' },
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '/logout' },
];

interface TopbarProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const TopbarAlt = ({ setSidebarOpen }: TopbarProps) => {
  return (
    <div className='relative z-10 flex flex-shrink-0 h-16 bg-gray-100 shadow'>
      <button
        type='button'
        className='px-4 text-gray-500 border-none border-bt-cerulean focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
        onClick={() => setSidebarOpen(true)}>
        <span className='sr-only'>Open sidebar</span>
        <MenuAlt2Icon className='w-6 h-6' aria-hidden='true' />
      </button>
      <div className='flex items-center justify-between flex-1 px-4'>
        <div className='hidden md:block'></div>
        <div className='block md:hidden'></div>
        {/* <div className='flex flex-1'>
            <form className='flex w-full md:ml-0' action='#' method='GET'>
              <label htmlFor='search_field' className='sr-only'>
                Search
              </label>
              <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                  <SearchIcon className='w-5 h-5' aria-hidden='true' />
                </div>
                <input
                  id='search_field'
                  className='block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                  placeholder='Search'
                  type='search'
                  name='search'
                />
              </div>
            </form>
          </div> */}
        <div className='flex items-center ml-4 md:ml-6'>
          <button className='p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            <span className='sr-only'>View notifications</span>
            <BellIcon className='w-6 h-6' aria-hidden='true' />
          </button>

          {/* Profile dropdown */}
          <Menu as='div' className='relative ml-3'>
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className='flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    <span className='sr-only'>Open user menu</span>
                    <UserAvatar imageUrl='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' />
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'>
                  <Menu.Items
                    static
                    className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link href={item.href}>
                            <a
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}>
                              {item.name}
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};
