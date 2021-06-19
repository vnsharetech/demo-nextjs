import React from 'react';

type Props = {
  classes?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

const Comming: React.FC<Props> = ({ classes, svgProps }) => {
  return (
    <div className={classes}>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...svgProps}>
        <circle cx='10' cy='10' r='10' fill='#066A86' />
      </svg>
    </div>
  );
};

export default Comming;
