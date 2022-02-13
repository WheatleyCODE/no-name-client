import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';
import s from '@s/components/index.module.scss';

interface NavLinkProps {
  href: string;
  onClickHandler?: () => void;
}

export const NavLink: FC<NavLinkProps> = ({ href, children, onClickHandler }) => {
  const router = useRouter();
  const className = router.asPath.split('?')[0] === href ? s.active : null;

  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    if (onClickHandler) {
      onClickHandler();
    }

    router.push(href);
  };

  return (
    <a className={`${s.navLink} ${className}`} href={href} onClick={clickHandler}>
      {children}
    </a>
  );
};
