import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Dialog, Menu, Transition } from '@headlessui/react';
import classNames from 'utils/classnames';
import { Logo } from 'components/logo';
import FavIcons from 'components/favicons';
import AuthButton from 'components/user/auth-button';
import { Topbar } from 'components/topbar';

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
import { Sidebar, SidebarMobile } from 'components/sidebar';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Factor', href: '/factor', icon: UsersIcon },
  { name: 'My Brand Ideal', href: '/my_brand_ideal', icon: FolderIcon },
  { name: 'Team Results', href: '/team_results', icon: CalendarIcon },
  { name: 'Documents', href: '/docs', icon: InboxIcon },
  { name: 'Reports', href: '/reports', icon: ChartBarIcon },
];

const Body = ({ children }) => {
  return (
    <main
      className='relative flex-1 overflow-y-auto focus:outline-none ml-9 mr-9 bg-bt-gray-50'
      style={{ background: '#D8E0ED' }}>
      <div className='py-6'>
        <div className='px-8 mx-auto max-w-7xl sm:px-6 md:px-8'>
          <div className='py-4'>{children}</div>
        </div>
      </div>
    </main>
  );
};
const SidebarLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-full overflow-hidden '>
      <FavIcons />
      <div className='flex flex-col flex-1 w-0 overflow-hidden'>
        <Topbar setSidebarOpen={setSidebarOpen} />
        <div className='flex h-full'>
          <SidebarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
          <Body>{children}</Body>
        </div>
      </div>
    </div>
  );
};
export default SidebarLayout;
