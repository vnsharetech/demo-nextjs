import React from 'react';

const CrossIcon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        width='10'
        height='10'
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
          opacity='0.5'
          d='M5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5 0C2.235 0 0 2.235 0 5C0 7.765 2.235 10 5 10C7.765 10 10 7.765 10 5C10 2.235 7.765 0 5 0ZM6.295 3L5 4.295L3.705 3L3 3.705L4.295 5L3 6.295L3.705 7L5 5.705L6.295 7L7 6.295L5.705 5L7 3.705L6.295 3Z'
          fill='#00253E'
        />
      </svg>
    </>
  );
};

export default CrossIcon;
