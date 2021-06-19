import React from 'react';
import cn from 'classnames';

type Props = {
  buttonText: string;
  classes?: string;
  icon?: HTMLElement;
  onClick?: () => void;
};

const DarkButton: React.FC<Props> = ({ buttonText, icon, classes, onClick }) => {
  return (
    <>
      <button
        className={cn(
          'bg-bt-defaultcl-50 outline-none focus:outline-none shadow-defaultcl text-white font-sans text-sm flex items-center justify-center rounded-4px',
          classes
        )}
        onClick={onClick}>
        {icon ? <span className='mr-2 mb-1'>{icon}</span> : null}

        {buttonText}
      </button>
    </>
  );
};

export default DarkButton;
