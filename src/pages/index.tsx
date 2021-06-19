import { ExpandCollapseButton } from './../components/action-card/expand-collapse-button';
import React, { AbstractView, ReactNode, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SidebarLayout from 'layouts/sidebar-layout';
import { Action } from 'rxjs/internal/scheduler/Action';
import { SVGIcon } from 'types/svgicon';
import { FactorIcon, IdealIcon } from 'components/icons';
import { ChevronUpIcon } from '@heroicons/react/outline';
import classNames from 'utils/classnames';
import cn from 'classnames';
import BrainLightIcon from '../components/icons/brain-light-icon';
import FlagIcon from '../components/icons/flag';
import HelpIcon from '../components/icons/help';
import DarkButton from 'components/Global/DarkButton';
import LabelWhite from '../components/icons/label-white';
import WarningIcon from '../components/icons/warning-icon';
import BTIcon from '../components/icons/bt-icon';
import Button from 'components/Global/Button';
import OrangeButton from 'components/Global/OrangeButton';
import CheckIcon from 'components/icons/check-icon';
import CrossIcon from '../components/icons/cross-icon';
import ShareIcon from '../components/icons/share-icon';
import BrandTallyIcon from '../components/icons/brand-tally-icon';
import ArmIcon from 'components/icons/arm-icon';

interface ActionCardProps {
  icon: SVGIcon;
  title: string;
  dark?: boolean;
  collapsed?: boolean;
  children: ReactNode;
  pulse?: boolean;
  notStarted?: boolean;
}

interface ActionButtonProps {
  dark?: boolean;
  text: string;
  classes?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface ContentCardProps {
  title: string;
  description: string;
  image: string;
  classes?: any;
  tooltip?: boolean;
}

function ActionButton(props: ActionButtonProps) {
  return (
    <button
      type='button'
      onClick={props.onClick}
      className={classNames(
        props.dark ? 'text-white' : 'text-white',
        'inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm bg-bt-red group hover:bg-bt-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        props.classes
      )}>
      <span>{props.text}</span>
    </button>
  );
}

const NotStartedCard = () => {
  return (
    <div className='overflow-hidden bg-gray-700 rounded-sm shadow'>
      <div className='flex items-center justify-between px-4 py-5 sm:px-6'>
        <div className='flex items-center'>
          <div className='w-full'>
            <div className='flex flex-stretch'>
              <div className='mr-3'>
                <FlagIcon />
              </div>
              <div className=''>You haven’t started this yet.</div>
            </div>
            <div className=''>My product doesn't see things through.</div>
          </div>
        </div>
        <div className='flex gap-2 transition-all duration-300'>
          <ActionButton
            classes='hidden md:inline'
            dark={true}
            text='Continue to take the Factor Survey'
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

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
          <span className='pl-6 text-lg mr-3'>{props.title}</span>
          {props.notStarted ? (
            <>
              {' '}
              <WarningIcon /> <span className='font-bold ml-2'>Not Started</span>
            </>
          ) : null}
        </div>
        <div className='flex gap-2 transition-all duration-300'>
          <ActionButton
            classes='hidden md:inline'
            dark={props.dark}
            text='Start the Survey'
            onClick={() => {}}
          />
          <ActionButton
            classes='md:hidden'
            dark={props.dark}
            text='Start Survey'
            onClick={() => {}}
          />
          <ExpandCollapseButton dark={props.dark} buttonText='Expand' />
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

const LounchCard = (classes?: any) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(true);

  const action = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div
      className={cn('w-full mb-10', {
        classes,
      })}>
      <div className='w-full p-8 flex flex-wrap mx-auto bg-white'>
        <div className='w-1/2'>
          <div className='flex flex-stretch'>
            <BrainLightIcon className='mr-3' />
            <div className='mt-2 flex flex-stretch'>
              <span className='mr-3'>Align</span> <CheckIcon />{' '}
              <span className='font-bold text-bt-cerulean ml-3'>Completed</span>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='flex flex-stretch float-right'>
            {!isCompleted ? (
              <Button buttonText='Invite Others' height='h-11 mr-3' classes='px-8' />
            ) : null}
            <DarkButton
              buttonText={isCompleted ? 'Show More' : 'Close'}
              onClick={action}
              classes='px-8 h-11'
            />
          </div>
        </div>

        <div className='w-full mt-6'>
          <p className='text-lg font-tiemposHeadline text-bt-daintree mb-3'>
            Invite Others to take the Driver Survey
          </p>
          <p className='text-sm font-sans text-bt-daintree'>
            Goals are all about your projectsion of your brand. There multiple goals that your can
            create by answering the questions. Fel freel to edit these goals as they come
          </p>
        </div>
        {!isCompleted ? (
          <>
            <div className='w-full bg-bt-defaultcl-200 flex items-stretch h-14 rounded-md mt-6'>
              <div className='w-1/2 flex items-stretch mt-1 ml-1'>
                <div className='mt-1'>
                  <img
                    src='https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b'
                    alt=''
                    className='w-10 h-10 rounded-full'
                  />
                </div>
                <div className='ml-3'>
                  <p className='font-sans font-light text-bt-daintree flex items-stretch'>
                    TaylerFreund
                    <button onClick={() => {}}>
                      <span style={{ fontSize: '8px' }} className='ml-2 mt-1 flex items-stretch'>
                        <CrossIcon /> <span className='ml-1'>Delete</span>
                      </span>
                    </button>
                  </p>
                  <span className='font-sans font-light text-bt-daintree text-sm'>
                    tayler@digitalcomputerarts.com
                  </span>
                </div>
              </div>
              <div className='w-1/2 mt-1 mr-1'>
                <div className='flex flex-stretch float-right'>
                  <ShareIcon class='mt-4 mr-3' />{' '}
                  <span className='mr-3 mt-3 font-sans font-light text-bt-daintree text-sm'>
                    Jan 23, 2021
                  </span>{' '}
                  <DarkButton buttonText='Resend Invitation' classes='px-8 h-11' />
                </div>
              </div>
            </div>

            <div className='w-full bg-bt-orangecl-50 flex items-stretch h-14 rounded-md mt-2'>
              <div className='w-1/2 flex items-stretch mt-1 ml-1'>
                <div className='mt-1'>
                  <img
                    src='https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b'
                    alt=''
                    className='w-10 h-10 rounded-full'
                  />
                </div>
                <div className='ml-3'>
                  <p className='font-sans font-light text-bt-daintree flex items-stretch'>
                    TaylerFreund
                    <button onClick={() => {}}>
                      <span style={{ fontSize: '8px' }} className='ml-2 mt-1 flex items-stretch'>
                        <CrossIcon /> <span className='ml-1'>Delete</span>
                      </span>
                    </button>
                  </p>
                  <span className='font-sans font-light text-bt-daintree text-sm'>
                    tayler@digitalcomputerarts.com
                  </span>
                </div>
              </div>
              <div className='w-1/2 mt-1 mr-1'>
                <div className='flex flex-stretch float-right'>
                  <ShareIcon class='mt-4 mr-3' />{' '}
                  <span className='mr-3 mt-3 font-sans font-light text-bt-daintree text-sm'>
                    Jan 23, 2021
                  </span>{' '}
                  <OrangeButton buttonText='Resend Invitation' classes='px-8 h-11' />
                </div>
              </div>
            </div>

            <div className='w-full bg-bt-defaultcl-200 flex items-stretch h-14 rounded-md mt-2'>
              <div className='w-1/2 flex items-stretch mt-1 ml-1'>
                <div className='mt-1'>
                  <img
                    src='https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b'
                    alt=''
                    className='w-10 h-10 rounded-full'
                  />
                </div>
                <div className='ml-3'>
                  <p className='font-sans font-light text-bt-daintree flex items-stretch'>
                    TaylerFreund
                    <button onClick={() => {}}>
                      <span style={{ fontSize: '8px' }} className='ml-2 mt-1 flex items-stretch'>
                        <CrossIcon /> <span className='ml-1'>Delete</span>
                      </span>
                    </button>
                  </p>
                  <span className='font-sans font-light text-bt-daintree text-sm'>
                    tayler@digitalcomputerarts.com
                  </span>
                </div>
              </div>
              <div className='w-1/2 mt-1 mr-1'>
                <div className='flex flex-stretch float-right'>
                  <Button buttonText='Resend Invitation' classes='px-8' height='h-11' />
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className='relative mx-auto bg-onboard-card-bg'>
        <img src='/img-3.png' className='w-full object-cover' alt='' />
      </div>
    </div>
  );
};

const VideoCard = (classes?: any) => {
  return (
    <div
      className={cn('w-full mb-10', {
        classes,
      })}>
      <div className='w-full p-8 flex flex-wrap mx-auto bg-white'>
        <div className='w-1/2 my-2'>
          <p className='text-lg font-tiemposHeadline text-bt-daintree'>
            <LabelWhite />
          </p>
        </div>
        <div className='w-1/2'>
          <p className='font-sans text-bt-daintree mb-3'>Welcome to Dashboard</p>
          <p className='text-sm font-sans text-bt-daintree'>
            Learn about the dashboard and continue this process s othat you can complete the tasks
            to reveal facts and metrics on your brand.
          </p>
        </div>
      </div>
      <div className='relative mx-auto bg-onboard-card-bg'>
        <img src='/video-img-full.png' alt='' className='w-full object-cover' />
        <div className='flex items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer md:w-auto justify-center w-full'>
          <img src='/player-icon.svg' alt='' />
          <p className='lg:text-2xl text-white ml-3 font-tiemposHeadline'>
            Learn about the Dashboard
          </p>
          <img
            src='/dashboard-tooltip-1.png'
            alt=''
            className='absolute top-0 -right-full lg:block hidden -mr-2 mt-1'
          />
        </div>
      </div>
    </div>
  );
};

const ContentCard = (props: ContentCardProps) => {
  let classes = props.classes;
  return (
    <div
      className={cn('w-full mb-10', {
        classes,
      })}>
      <div className='relative mx-auto bg-onboard-card-bg'>
        <img className='w-full object-cover' src={props.image} alt='' />
        {props.tooltip ? (
          <div className='flex items-center absolute left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-auto w-full'>
            <div className='lg:text-2xl text-white ml-3 font-tiemposHeadline'>
              fdfdfakhdakdhasdh
            </div>
            <img
              src='/dashboard-tooltip-2.svg'
              alt=''
              className='absolute top-0 min-w-full lg:block -mr-2 mt-1'
            />
          </div>
        ) : null}
      </div>
      <div className='w-full p-8 flex flex-wrap mx-auto bg-white'>
        <div className='w-full flex flex-stretch mb-6'>
          <BTIcon /> <span className='mt-2 ml-3'>Tru Brand News</span>
        </div>
        <div className='w-full'>
          <p className='font-tiemposHeadline text-lg text-bt-daintree mb-3'>{props.title}</p>
          <p className='text-sm font-sans text-bt-daintree'>{props.description}</p>
        </div>
        <div className='w-full'>
          <DarkButton classes='px-8 h-11 mt-6' buttonText='Read Article' />
        </div>
      </div>
    </div>
  );
};

const PageHeader = ({ title }) => {
  const [switchOption, setSwitchOption] = useState<Boolean>(true);

  const changeSwitch = () => {
    setSwitchOption(!switchOption);
  };

  return (
    <div className='pb-6'>
      <h1 className='text-xl text-gray-900 font-header'>{title}</h1>
      <div className='flex'>
        <div className='w-1/3'>
          <div className='mb-12'>
            <label htmlFor='toggleB' className='flex items-center cursor-pointer'>
              <div className={`ml-3 mr-3 text-gray-${switchOption ? '700' : '400'} font-medium`}>
                Your Feed
              </div>
              <div className='relative'>
                <input type='checkbox' id='toggleB' className='sr-only' onChange={changeSwitch} />
                <div className='block bg-white w-14 h-8 rounded-full'></div>
                <div className='dot absolute left-1 top-1 bg-bt-defaultcl-50 w-6 h-6 rounded-full transition'></div>
              </div>
              <div className={`ml-3 text-gray-${switchOption ? '400' : '700'} font-medium`}>
                Reports
              </div>
            </label>
          </div>
        </div>

        <div className='w-2/3'>
          <div className='flex flex-stretch float-right'>
            <div className='w-48 bg-bt-cerulean-1000'>
              <div className='p-3 justify-center text-center'>
                <div className='text-5xl font-tiemposHeadline'>15%</div>
                <div>Completed</div>
                <div className='ml-3 mt-2'>
                  <DarkButton buttonText='Start Factor' classes='px-6 h-11' />
                </div>
              </div>
            </div>

            <div className='bg-bt-defaultcl-50 ml-4 w-96 z-0'>
              <div className='pl-5 pt-5 flex flex-stretch'>
                <div>
                  <div className='flex flex-stretch'>
                    <ArmIcon /> <span className='text-white ml-2 mb-1'>BrandTally Score</span>
                  </div>
                  <div>
                    <BrandTallyIcon />
                  </div>
                </div>
                {/* <div className='max-h-38 mt-0 w-48 bg-bt-orangecl rounded-md ml-2 z-10 '>
                  <div className='text-white'>Start Factor</div>
                  <p className='p-2 text-white font-sans text-sm '>
                    This score is blank right now. Not to worry, once you start the factor survey
                    this will populate
                  </p>
                  <div className='justify-center mb-3 items-center'>
                    <DarkButton buttonText='Start Factor' classes='px-6 h-11' />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  let step = 1;
  let width = '';
  switch (step) {
    case 1:
      width = '14.28%';
      break;
    case 2:
      width = '28.28%';
      break;
    case 3:
      width = '42.28%';
      break;
    case 4:
      width = '56.28%';
      break;
    case 5:
      width = '70.28%';
      break;
    case 6:
      width = '84.28%';
      break;
    case 7:
      width = '98.28%';
      break;

    default:
      break;
  }
  return (
    <>
      <Head>
        <title>BrandTruth</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageHeader title='Your Dashboard' />
      {/* ====================== */}
      <div className='w-full mb-10 bg-white h-40'>
        <button
          className='h-11 flex items-center w-full mx-auto outline-none uppercase focus:outline-none font-thin text-white bg-bt-defaultcl-50 px-6 font-sans uppercase text-sm'
          style={{ letterSpacing: '.2em' }}>
          Your Brand Process
        </button>

        <div className='m-10'>
          <div className='relative w-full h-2 mb-4 rounded-md bg-grayLight'>
            <div
              className='bg-bt-cerulean h-full rounded-md cool-transition'
              style={{ width: width }}></div>
          </div>
          <div className='flex justify-between w-full'>
            <p className='font-sans text-xs text-bt-cerulean cool-transition md:text-base'>
              Launch
            </p>
            <p
              className={cn('font-sans cool-transition md:text-base text-xs', {
                'text-bt-daintree opacity-40': step < 2,
                'text-bt-cerulean': step >= 2,
              })}>
              Factor Survey
            </p>
            <p
              className={cn('font-sans cool-transition md:text-base text-xs', {
                'text-bt-daintree opacity-40': step < 3,
                'text-bt-cerulean': step >= 3,
              })}>
              Invite Others
            </p>

            <p
              className={cn('font-sans cool-transition md:text-base text-xs', {
                'text-bt-daintree opacity-40': step < 4,
                'text-bt-cerulean': step >= 4,
              })}>
              Start the Driver
            </p>

            <p
              className={cn('font-sans cool-transition md:text-base text-xs', {
                'text-bt-daintree opacity-40': step < 5,
                'text-bt-cerulean': step >= 5,
              })}>
              Schedule a Calibration
            </p>

            <p
              className={cn('font-sans cool-transition md:text-base text-xs', {
                'text-bt-daintree opacity-40': step < 6,
                'text-bt-cerulean': step >= 6,
              })}>
              Facts
            </p>

            <p
              className={cn('font-sans cool-transition md:text-base text-xs', {
                'text-bt-daintree opacity-40': step < 7,
                'text-bt-cerulean': step >= 7,
              })}>
              Market
            </p>
          </div>
        </div>
      </div>
      {/* ====================== */}
      <div className='flex  items-stretch justify-between mb-8'>
        <div className='pb-3 text-gray-800 uppercase text-md'>Your Feed</div>
        <div className='float-right'>
          <DarkButton
            buttonText='How do we talior this Feed'
            classes='h-11 px-8'
            icon={<HelpIcon />}
          />
        </div>
      </div>
      <div className='flex flex-col pb-20'>
        <ActionCard dark pulse icon={FactorIcon} title='Factor Survey' notStarted={true}>
          <div className='font-header mb-6'>Complete the Factor Survey</div>
          <NotStartedCard />
        </ActionCard>
      </div>
      <VideoCard classes='mb-8' />
      <ContentCard
        tooltip={true}
        classes='mb-8'
        image='/img-1.png'
        title='SCADstory: how Savannah College of Art & Design celebrated its history in 4D'
        description='Goals are all about your projectsion of your brand. There multiple goals that your can
            create by answering the questions. Fel freel to edit these goals as they come'
      />
      <LounchCard />
      <ContentCard
        classes='mb-8'
        image='/img-2.png'
        title='How Apple succeeds in Brand and Their Luxury Appeal.'
        description='Goals are all about your projectsion of your brand. There multiple goals that your can create by answering the questions. Fel freel to edit these goals as they come'
      />
    </>
  );
};

Home.layout = SidebarLayout;

export default Home;
