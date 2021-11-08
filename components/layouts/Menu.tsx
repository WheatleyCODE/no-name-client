import { FC } from 'react';
import s from '@s/components/index.module.scss';

export interface MenuItem {
  name: string;
  path: string;
}

interface MenuProps {
  menuItems: MenuItem[];
}

export const Menu: FC<MenuProps> = ({ menuItems }) => {
  return (
    <nav className={s.menuContainer}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};
