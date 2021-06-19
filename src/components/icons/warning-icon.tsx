import React from 'react';

const WarningIcon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        width='22'
        height='19'
        viewBox='0 0 22 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 12H10V8H12V12ZM12 16H10V14H12V16ZM0 19H22L11 0L0 19Z' fill='white' />
      </svg>
    </>
  );
};

export default WarningIcon;
