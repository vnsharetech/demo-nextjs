import React from 'react';

type Props = {
  classes?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

const AddCircleBtn: React.FC<Props> = ({ classes, svgProps }) => {
  return (
    <svg
      width='27'
      height='27'
      viewBox='0 0 27 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...svgProps}>
      <path
        d='M20.25 14.85H14.85V20.25H12.15V14.85H6.75V12.15H12.15V6.75H14.85V12.15H20.25V14.85ZM13.5 0C11.7272 0 9.97167 0.349188 8.33377 1.02763C6.69588 1.70606 5.20765 2.70047 3.95406 3.95406C1.42232 6.4858 0 9.91958 0 13.5C0 17.0804 1.42232 20.5142 3.95406 23.0459C5.20765 24.2995 6.69588 25.2939 8.33377 25.9724C9.97167 26.6508 11.7272 27 13.5 27C17.0804 27 20.5142 25.5777 23.0459 23.0459C25.5777 20.5142 27 17.0804 27 13.5C27 11.7272 26.6508 9.97167 25.9724 8.33377C25.2939 6.69588 24.2995 5.20765 23.0459 3.95406C21.7924 2.70047 20.3041 1.70606 18.6662 1.02763C17.0283 0.349188 15.2728 0 13.5 0Z'
        fill='#00B2E3'
      />
    </svg>
  );
};

export default AddCircleBtn;