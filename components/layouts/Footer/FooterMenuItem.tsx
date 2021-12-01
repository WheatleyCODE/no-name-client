import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface FooterMenuItemProps {
  item: any;
}

export const FooterMenuItem: FC<FooterMenuItemProps> = ({ item }) => {
  return <li className={s.footerMenuItem}>{item}</li>;
};
