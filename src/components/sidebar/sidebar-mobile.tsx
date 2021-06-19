import { Fragment, useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Dialog, Menu, Transition } from '@headlessui/react';
import classNames from 'utils/classnames';
import { NavButton } from 'components/sidebar';
import { Logo } from 'components/logo';
import FavIcons from 'components/favicons';
import AuthButton from 'components/user/auth-button';
import { Topbar } from 'components/topbar';
import { StandardTransition } from 'components/transitions';

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import { UserCard } from 'components/sidebar/user-card/user-card';
import { BlogIcon, DashboardIcon, FactorIcon, IdealIcon, TeamResultsIcon } from 'components/icons';

const navigation = [
  { name: 'Dashboard', href: '/', icon: DashboardIcon },
  { name: 'Factor Survey', href: '/factor-survey', icon: BlogIcon },
  { name: 'Blog', href: '/blog', icon: BlogIcon },
  { name: 'User', href: '/user', icon: FolderIcon },
  { name: 'Factor', href: '/factor', icon: FactorIcon },
  { name: 'Team Results', href: '/ideal', icon: TeamResultsIcon },
  { name: 'Brand Ideal', href: '/ideal', icon: IdealIcon },
  //   { name: 'Documents', href: '/docs', icon: InboxIcon },
  //   { name: 'Reports', href: '/reports', icon: ChartBarIcon },
];

export const SidebarMobile = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-40 flex md:hidden'
        open={sidebarOpen}
        onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'>
          <div className='relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-bt-daintree'>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <div className='absolute top-0 right-0 pt-2 -mr-12'>
                <button
                  type='button'
                  className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  onClick={() => setSidebarOpen(false)}>
                  <span className='sr-only'>Close sidebar</span>
                  <XIcon className='w-6 h-6 text-white' aria-hidden='true' />
                </button>
              </div>
            </Transition.Child>
            <div className='flex items-center flex-shrink-0 px-4'>
              <Logo reverse className='w-auto h-8' />
            </div>
            <div className='flex-1 h-0 mt-5 overflow-y-auto'>
              <nav className='px-2 space-y-1'>
                {navigation.map((item) => (
                  <NavButton
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    label={item.name}
                    icon={item.icon}
                  />
                ))}
              </nav>
            </div>
          </div>
        </Transition.Child>
        <div className='flex-shrink-0 w-14' aria-hidden='true'>
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};
