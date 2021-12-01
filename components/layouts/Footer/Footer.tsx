import { FC } from 'react';
import { footerMenuItems } from 'consts';
import { Promotion, FooterMenuList, CopyRight, Contacts } from '@components';
import s from '@s/components/index.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <Promotion />

      <div className={s.width + ' ' + s.padding}>
        <div className={s.menuLinks}>
          {footerMenuItems.map((item) => (
            <FooterMenuList key={item.title} item={item} />
          ))}
          <Contacts />
        </div>
        <CopyRight />
      </div>
    </footer>
  );
};
