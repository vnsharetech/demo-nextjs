import React, { useState } from 'react';
import CheckIcon from '../icons/check-icon';
import cn from 'classnames';

type Props = {
  title?: string;
  subtitle?: string;
  checked?: boolean;
  onCheck?: () => void;
};

const CheckInput: React.FC<Props> = ({ children, title, subtitle, checked, onCheck }) => {
  return (
    <>
      <div
        className='w-full bg-input-color flex items-center cursor-pointer justify-between p-5 overflow-hidden'
        onClick={onCheck}>
        <div className='flex items-center'>
          <div>
            <button
              className={cn(
                'bg-transparent outline-none focus:outline-none border-4 rounded-full cool-transition flex justify-center items-center',
                {
                  'border-bt-cerulean': checked === true,
                  'border-white': checked === false,
                }
              )}
              style={{ width: '35px', height: '35px' }}>
              <CheckIcon
                classes={cn('relative cool-transition', {
                  '-ml-40': checked === false,
                  'ml-0': checked === true,
                })}
              />
            </button>
          </div>
          <div className='ml-3'>
            <h1 className='font-sans font-medium text-xs text-titles mb-1'>{title}</h1>
            <p className='font-sans font-medium text-xs text-subtitles'>{subtitle}</p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default CheckInput;
