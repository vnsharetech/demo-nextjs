import { ChevronUpIcon } from '@heroicons/react/solid';
import React from 'react';
import classNames from 'utils/classnames';

export interface ExpandCollapseButtonProps {
  dark?: boolean;
  buttonText?: string;
}

export function ExpandCollapseButton({ dark, buttonText }: ExpandCollapseButtonProps) {
  return (
    <button
      type='button'
      className={classNames(
        dark
          ? 'bg-gray-300 text-gray-800 focus:ring-gray-300 focus:ring-offset-bt-daintree '
          : 'text-gray-200 bg-bt-daintree focus:ring-bt-daintree-400 hover:bg-bt-daintree-400',
        'inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2'
      )}>
      {/* <span className='w-0 group-hover:opacity-100 group-hover:w-200'>Collapse</span> */}
      {buttonText ?? <ChevronUpIcon className='w-5 h-5 ml-1 mr-1' aria-hidden='true' />}
    </button>
  );
}
