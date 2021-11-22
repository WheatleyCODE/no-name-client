import { FC } from 'react';
import { IMenuItem } from './Menu';
import { NavLink } from '@components';

interface MenuItemProps {
  item: IMenuItem;
}

export const MenuItem: FC<MenuItemProps> = ({ item }) => {
  return (
    <div>
      <NavLink href={item.path}>{item.name}</NavLink>
    </div>
  );
};
