import React from 'react';

type Props = {
  classes?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

const CommingLight: React.FC<Props> = ({ classes, svgProps }) => {
  return (
    <div className={classes}>
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...svgProps}>
        <circle cx='20' cy='20' r='20' fill='#066A86' fill-opacity='0.37' />
        <circle cx='20' cy='20' r='10' fill='#00B2E3' />
      </svg>
    </div>
  );
};

export default CommingLight;
