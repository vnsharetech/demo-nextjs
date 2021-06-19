import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Dialog, Menu, Transition } from '@headlessui/react';
import classNames from 'utils/classnames';
import { Logo } from 'components/logo';
import FavIcons from 'components/favicons';
import AuthButton from 'components/user/auth-button';
import { TopbarAlt } from 'components/topbar';

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
import { SidebarAlt, SidebarMobile } from 'components/sidebar';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Blog', href: '/blog', icon: UsersIcon },
  { name: 'User', href: '/user', icon: FolderIcon },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'Documents', href: '/docs', icon: InboxIcon },
  { name: 'Reports', href: '/reports', icon: ChartBarIcon },
];

const Body = ({ children }) => {
  return (
    <main className='relative flex-1 overflow-y-auto focus:outline-none'>
      <div className='py-6'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 md:px-8'>
          <div className='py-4'>{children}</div>
        </div>
      </div>
    </main>
  );
};
const SidebarLayoutAlt = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-full overflow-hidden bg-bt-gray'>
      <FavIcons />
      <SidebarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <SidebarAlt setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div className='flex flex-col flex-1 w-0 overflow-hidden'>
        <TopbarAlt setSidebarOpen={setSidebarOpen} />
        <div className='flex h-screen'>
          <Body>{children}</Body>
        </div>
      </div>
    </div>
  );
};
export default SidebarLayoutAlt;
