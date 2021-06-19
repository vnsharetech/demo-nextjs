import React from 'react';
import Link from 'next/link';
import classNames from 'utils/classnames';
import { withRouter, NextRouter } from 'next/router';
import { SVGIcon } from 'types/svgicon';
import { Path } from 'path-parser';

interface NavButtonProps {
  href: string;
  router: NextRouter;
  icon: SVGIcon;
  label: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const NavButtonBase = (props: NavButtonProps) => {
  var path = new Path(props.href);
  let active = path.test(props.router.pathname);

  return (
    <Link key={props.label} href={props.href}>
      <a
        onClick={props.onClick}
        className={classNames(
          active
            ? 'bg-gray-300 text-gray-900 border-bt-cerulean'
            : 'text-gray-500 hover:bg-gray-200 hover:border-gray-300',
          'group flex transition-all duration-250 items-center h-14 px-2 py-2 text-base font-medium border-l-4 border-transparent'
        )}>
        <props.icon
          className={classNames(active ? 'text-gray-900' : 'text-gray-400', 'w-7 h-7 mr-4')}
          aria-hidden='true'
        />
        {props.label}
      </a>
    </Link>
  );
};

export const NavButton = withRouter(NavButtonBase);
