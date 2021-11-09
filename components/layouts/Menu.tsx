import { FC } from 'react';
import { MenuItem } from './MenuItem';
import s from '@s/components/index.module.scss';

export interface IMenuItem {
  name: string;
  path: string;
}

interface MenuProps {
  menuItems: IMenuItem[];
}

export const Menu: FC<MenuProps> = ({ menuItems }) => {
  return (
    <nav className={s.menuContainer}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
