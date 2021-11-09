import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';
import s from '@s/components/index.module.scss';

interface NavLinkProps {
  href: string;
}

export const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const className = router.asPath === href ? s.active : null;

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a className={`${s.navLink} ${className}`} href={href} onClick={onClickHandler}>
      {children}
    </a>
  );
};
