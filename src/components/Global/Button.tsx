import React from 'react';
import cn from 'classnames';

type Props = {
  buttonText: string;
  classes?: string;
  onClick?: () => void;
  height?: string;
};

const Button: React.FC<Props> = ({ buttonText, classes, onClick, height }) => {
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
        {buttonText}
      </button>
    </>
  );
};

export default Button;
