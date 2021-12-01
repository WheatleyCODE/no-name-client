import { FC } from 'react';
import { FooterMenuItem } from './FooterMenuItem';
import s from '@s/components/index.module.scss';

interface FooterMenuListProps {
  item: {
    title: string;
    items: any[];
  };
}

export const FooterMenuList: FC<FooterMenuListProps> = ({ item }) => {
  const { items } = item;

  return (
    <div className={s.footerMenuList}>
      <h3 className={s.title}>{item.title}</h3>
      <ul>
        {items.map((itm, i) => (
          <FooterMenuItem key={i} item={itm} />
        ))}
      </ul>
    </div>
  );
};
