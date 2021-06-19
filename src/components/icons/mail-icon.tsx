import React from 'react';

const MailIcon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        width='37'
        height='27'
        viewBox='0 0 37 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path d='M0 14H3' stroke='#80929F' strokeWidth='1.2' strokeMiterlimit='10' />
        <path d='M37 14H34' stroke='#80929F' strokeWidth='1.2' strokeMiterlimit='10' />
        <path d='M6 26L7 24' stroke='#80929F' strokeWidth='1.2' strokeMiterlimit='10' />
        <path d='M31 26L30 24' stroke='#80929F' strokeWidth='1.2' strokeMiterlimit='10' />
        <path d='M5 1L7 3' stroke='#80929F' strokeWidth='1.2' strokeMiterlimit='10' />
        <path d='M32 1L30 3' stroke='#80929F' strokeWidth='1.2' strokeMiterlimit='10' />
        <path d='M2 20L4 19' stroke='#80929F' strokeWidth='1.2' strokeMiterlimit='10' />
        <path d='M35 20L33 19' stroke='#80929F' strokeWidth='1.2' strokeMiterlimit='10' />
        <path d='M4 9L1 7' stroke='#80929F' strokeWidth='1.2' strokeMiterlimit='10' />
        <path d='M33 9L36 7' stroke='#80929F' strokeWidth='1.2' strokeMiterlimit='10' />
        <path
          d='M11 6H27C27.5304 6 28.0391 6.21071 28.4142 6.58579C28.7893 6.96086 29 7.46957 29 8V20C29 20.5304 28.7893 21.0391 28.4142 21.4142C28.0391 21.7893 27.5304 22 27 22H11C9.89 22 9 21.1 9 20V8C9 6.89 9.89 6 11 6ZM19 13L27 8H11L19 13ZM11 20H27V10.37L19 15.36L11 10.37V20Z'
          fill='#80929F'
        />
      </svg>
    </>
  );
};

export default MailIcon;
