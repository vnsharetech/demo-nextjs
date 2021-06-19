import React from 'react';

type Props = {
  classes?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

const CheckIcon: React.FC<Props> = ({ classes, svgProps }) => {
  return (
    <div className={classes}>
      <svg
        width='25'
        height='25'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...svgProps}>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.4 8.6L8 12.2L15.6 4.6L17 6L8 15Z'
          fill='#00B2E3'
        />
      </svg>
    </div>
  );
};

export default CheckIcon;
