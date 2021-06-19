import { ExpandCollapseButton } from '../components/action-card/expand-collapse-button';
import React, { AbstractView, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SidebarLayoutAlt from 'layouts/sidebar-layout-alt';
import { Action } from 'rxjs/internal/scheduler/Action';
import { SVGIcon } from 'types/svgicon';
import { FactorIcon } from 'components/icons';
import { ChevronUpIcon } from '@heroicons/react/outline';
import classNames from 'utils/classnames';

interface ActionCardProps {
  icon: SVGIcon;
  title: string;
  dark?: boolean;
  collapsed?: boolean;
  children: ReactNode;
  pulse?: boolean;
}

interface ActionButtonProps {
  dark?: boolean;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ActionButton(props: ActionButtonProps) {
  return (
    <button
      type='button'
      onClick={props.onClick}
      className={classNames(
        props.dark ? 'text-white' : 'text-white',
        'inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm bg-bt-red group hover:bg-bt-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      )}>
      <span>{props.text}</span>
    </button>
  );
}

const ActionCard = (props: ActionCardProps) => {
  return (
    <div
      className={classNames(
        props.dark ? 'bg-bt-daintree' : 'bg-white',
        props.pulse ? 'pulse-test' : '',
        'overflow-hidden bg-white rounded-sm shadow'
      )}>
      <div
        className={classNames(
          props.dark ? 'border-gray-700 ' : 'border-gray-200',
          'flex items-center justify-between px-4 py-5 border-b sm:px-6'
        )}>
        <div
          className={classNames(props.dark ? 'text-gray-100' : 'text-black', 'flex items-center')}>
          <props.icon className='w-8 h-8 ml-2' />
          <span className='pl-6 text-lg'>{props.title}</span>
        </div>
        <div className='flex gap-2 transition-all duration-300'>
          <ActionButton dark={props.dark} text='Start the Factor Survey' onClick={() => {}} />
          <ExpandCollapseButton dark={props.dark} />
        </div>
      </div>

      <div
        className={classNames(
          props.dark ? 'bg-bt-daintree text-white' : 'bg-gray-50',
          'px-4 py-5 sm:p-6'
        )}>
        {props.children}
      </div>
    </div>
  );
};
const PageHeader = ({ title }) => {
  return (
    <div className='pb-6 mx-auto max-w-7xl'>
      <h1 className='text-2xl text-gray-900 font-header'>{title}</h1>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Head>
        <title>BrandTruth</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageHeader title='Your Dashboard' />
      <div className='flex flex-col'>
        <div className='pb-4 text-2xl'>Up Next</div>
        <ActionCard dark pulse icon={FactorIcon} title='Factor Survey'>
          <div className='font-header'>Take the Factor Survey</div>
        </ActionCard>
      </div>
      <div className='pt-6 pb-4 text-2xl'>History</div>
      <div className='flex flex-col gap-6'>
        <ActionCard collapsed icon={FactorIcon} title='Factor Survey'>
          <div>another</div>
        </ActionCard>
        <ActionCard collapsed icon={FactorIcon} title='Factor Survey'>
          <div>One</div>
        </ActionCard>
      </div>
    </>
  );
};

Home.layout = SidebarLayoutAlt;

export default Home;
