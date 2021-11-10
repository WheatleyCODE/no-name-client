import { FC } from 'react';
import { IconButton } from '@components/UI';
import s from '@s/components/index.module.scss';

export const MobileMenu: FC = () => {
  return (
    <div className={s.mobileMenu}>
      <IconButton className={s.big} icon="fal fa-bars" />
    </div>
  );
};
