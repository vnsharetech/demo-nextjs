import React from 'react';

const ShareIcon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        width='15'
        height='13'
        viewBox='0 0 15 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.16667 0L15 6.06667L9.16667 12.1333V8.58C5 8.58 2.08333 9.96667 0 13C0.833333 8.66667 3.33333 4.33333 9.16667 3.46667V0Z'
          fill='#B3B9CC'
        />
      </svg>
    </>
  );
};

export default ShareIcon;
