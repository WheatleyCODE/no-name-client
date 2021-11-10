import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface StickyMenuProps {}

export const StickyMenu: FC<StickyMenuProps> = () => {
  return (
    <div className={s.sticky}>
      <div className={s.parent}>
        <div className={s.width}>
          <div className={s.stickyMenu}>
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
