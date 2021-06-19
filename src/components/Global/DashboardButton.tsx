import React from 'react';
import cn from 'classnames';
import BIIcon from '../icons/bi-icon';

type Props = {
  buttonText: string;
  classes?: string;
  onClick?: () => void;
  height?: string;
};

const DashboardButton: React.FC<Props> = ({ buttonText, classes, onClick, height }) => {
  height = height ?? 'h-55';
  return (
    <>
      <button
        className={cn(
          'bg-bt-cerulean outline-none focus:outline-none shadow-cerulean text-white font-sans text-sm flex items-center justify-center rounded-4px',
          classes,
          height
        )}
        onClick={onClick}>
        <BIIcon /> <span className='ml-1'>{buttonText}</span>
      </button>
    </>
  );
};

export default DashboardButton;
