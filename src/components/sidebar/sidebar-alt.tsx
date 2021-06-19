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
import { UserCard } from 'components/sidebar';
import { BlogIcon, DashboardIcon, FactorIcon, IdealIcon, TeamResultsIcon } from 'components/icons';

const navigation = [
  { name: 'Dashboard', href: '/', icon: DashboardIcon },
  { name: 'Blog', href: '/blog', icon: BlogIcon },
  { name: 'User', href: '/user', icon: FolderIcon },
];
const navigation2 = [
  { name: 'Factor', href: '/factor', icon: FactorIcon },
  { name: 'Team Results', href: '/ideal', icon: TeamResultsIcon },
  { name: 'Brand Ideal', href: '/ideal', icon: IdealIcon },
  { name: 'Documents', href: '/docs', icon: InboxIcon },
  { name: 'Reports', href: '/reports', icon: ChartBarIcon },
];

export const SidebarAlt = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className='hidden overflow-y-auto bg-bt-daintree md:flex md:flex-shrink-0'>
        <div className='flex flex-col w-64'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow pb-4'>
            <Logo reverse className='w-auto mt-5 mb-3 ml-3 h-7' />
            <UserCard classes='m-3' variant='outlined' />
            <div className='flex flex-col flex-1 mt-1'>
              <nav className='flex-1 pl-1 space-y-1'>
                <h3
                  className='px-3 pb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase border-b-2'
                  id='projects-headline'>
                  Projects
                </h3>
                {navigation.map((item) => (
                  <NavButton key={item.name} href={item.href} label={item.name} icon={item.icon} />
                ))}
                <h3
                  className='px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'
                  id='projects-headline'>
                  Reports
                </h3>
                {navigation2.map((item) => (
                  <NavButton key={item.name} href={item.href} label={item.name} icon={item.icon} />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
