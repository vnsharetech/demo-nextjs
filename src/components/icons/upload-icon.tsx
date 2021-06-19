import React from 'react';

const UploadIcon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        width='14'
        height='17'
        viewBox='0 0 14 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path d='M4 13V7H0L7 0L14 7H10V13H4ZM0 17V15H14V17H0Z' fill='#D7DBE6' />
      </svg>
    </>
  );
};

export default UploadIcon;
