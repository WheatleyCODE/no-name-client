import { FC } from 'react';
import { Link } from '@components';
import { PathRoutes } from 'consts';
import s from '@s/components/index.module.scss';

interface FooterMenuItemProps {
  item: any;
}

export const FooterMenuItem: FC<FooterMenuItemProps> = ({ item }) => {
  return (
    <li className={s.footerMenuItem}>
      <Link className={s.linkWhite} href={PathRoutes.HOME}>
        {item}
      </Link>
    </li>
  );
};
