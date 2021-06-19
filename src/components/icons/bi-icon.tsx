import React from 'react';

const BIIcon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        width='13'
        height='25'
        viewBox='0 0 13 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
          d='M7.9701 4.5L7.35472 10.9H10.4316L4.89318 20.5L5.50856 14.1H2.43164L7.9701 4.5Z'
          stroke='white'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
      </svg>
    </>
  );
};

export default BIIcon;
