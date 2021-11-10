import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface StickyMenuProps {}

export const StickyMenu: FC<StickyMenuProps> = () => {
  return (
    <div className={s.sticky}>
      <div className={s.parent}>
        <div className={s.width}>sdsds</div>
      </div>
    </div>
  );
};
