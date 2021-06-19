import React from 'react';
import cn from 'classnames';

type Props = {
  buttonText: string;
  classes?: string;
  icon?: HTMLElement;
  onClick?: () => void;
};

const OrangeButton: React.FC<Props> = ({ buttonText, icon, classes, onClick }) => {
  return (
    <>
      <button
        className={cn(
          'bg-bt-orangecl outline-none focus:outline-none shadow-orangecl text-white font-sans text-sm flex items-center justify-center rounded-4px',
          classes
        )}
        onClick={onClick}>
        {icon ? <span className='mr-2 mb-1'>{icon}</span> : null}

        {buttonText}
      </button>
    </>
  );
};

export default OrangeButton;
