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
import BrainDiamondIcon from '../icons/brain-diamond-icon';
import BrandIdealIcon from '../icons/brand-ideal-icon';

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
import {
  BlogIcon,
  DashboardIcon,
  EmotionEngineIcon,
  FactorIcon,
  IdealIcon,
  TeamResultsIcon,
  VendorsIcon,
} from 'components/icons';
import MailIcon from 'components/icons/mail-icon';
import BrandNewsIcon from '../icons/brand-news-icon';

const navigation = [
  { name: 'Dashboard', href: '/', icon: DashboardIcon },
  { name: 'Factor Survey', href: '/factor-survey', icon: BlogIcon },
  { name: 'Factor', href: '/blog', icon: BlogIcon },
  { name: 'My Brand Ideal', href: '/user', icon: BrandIdealIcon },
  { name: 'Team Results', href: '/user', icon: BrainDiamondIcon },
];
const navigation2 = [
  { name: 'Brand Ideal', href: '/ideal', icon: IdealIcon },
  { name: 'Vendors', href: '/docs', icon: VendorsIcon },
  { name: 'Mail', href: '/reports', icon: MailIcon },
  { name: 'Emotion Engine', href: '/reports', icon: EmotionEngineIcon },
  { name: 'Tru Brand News', href: '/reports', icon: BrandNewsIcon },
];

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className='hidden overflow-y-auto bg-white md:flex md:flex-shrink-0'>
        <div className='flex flex-col w-56'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow pb-4'>
            <UserCard classes='m-3' variant='outlined' />
            <div className='flex flex-col flex-1 mt-1'>
              <nav className='flex-1 space-y-1'>
                <h3
                  className='px-3 pb-2 mb-2 text-xs tracking-wider text-gray-500 uppercase border-b'
                  id='journey-headline'>
                  Journey
                </h3>
                {navigation.map((item) => (
                  <NavButton key={item.name} href={item.href} label={item.name} icon={item.icon} />
                ))}
                <h3
                  className='px-3 pb-2 mb-4 text-xs tracking-wider text-gray-500 uppercase border-b'
                  id='explore-headline'>
                  Explore
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
