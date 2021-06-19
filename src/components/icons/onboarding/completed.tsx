import React from 'react';

type Props = {
  classes?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

const Completed: React.FC<Props> = ({ classes, svgProps }) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...svgProps}>
      <circle cx='20' cy='20' r='20' fill='#E7F4F7' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 10C14.5 10 10 14.5 10 20C10 25.5 14.5 30 20 30C25.5 30 30 25.5 30 20C30 14.5 25.5 10 20 10ZM18 25L13 20L14.4 18.6L18 22.2L25.6 14.6L27 16L18 25Z'
        fill='#00B2E3'
      />
    </svg>
  );
};

export default Completed;
