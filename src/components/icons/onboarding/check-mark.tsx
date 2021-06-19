import React from 'react';

type Props = {
  classes?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

const CheckMark: React.FC<Props> = ({ classes, svgProps }) => {
  return (
    <svg
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...svgProps}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.5 0C5 0 0.5 4.5 0.5 10C0.5 15.5 5 20 10.5 20C16 20 20.5 15.5 20.5 10C20.5 4.5 16 0 10.5 0ZM8.5 15L3.5 10L4.9 8.6L8.5 12.2L16.1 4.6L17.5 6L8.5 15Z'
        fill='white'
      />
    </svg>
  );
};

export default CheckMark;
