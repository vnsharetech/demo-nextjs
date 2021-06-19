import React from 'react';

const FlagIcon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        width='17'
        height='20'
        viewBox='0 0 17 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.6533 2.75083L10.2 0.552734H0V19.2365H2.26667V11.5432H8.61333L9.06667 13.7413H17V2.75083H10.6533Z'
          fill='white'
        />
      </svg>
    </>
  );
};

export default FlagIcon;
