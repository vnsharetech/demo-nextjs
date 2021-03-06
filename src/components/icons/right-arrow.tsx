import React from 'react';

const RightArrow: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        width='24'
        height='16'
        viewBox='0 0 24 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
          d='M23.7071 7.29289C24.0976 7.68342 24.0976 8.31658 23.7071 8.70711L17.3431 15.0711C16.9526 15.4616 16.3195 15.4616 15.9289 15.0711C15.5384 14.6805 15.5384 14.0474 15.9289 13.6569L21.5858 8L15.9289 2.34315C15.5384 1.95262 15.5384 1.31946 15.9289 0.928932C16.3195 0.538408 16.9526 0.538408 17.3431 0.928932L23.7071 7.29289ZM0 7L23 7V9L0 9L0 7Z'
          fill='#00253E'
        />
      </svg>
    </>
  );
};

export default RightArrow;
