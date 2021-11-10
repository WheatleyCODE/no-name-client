import { FC } from 'react';
import { Categories, Cart, Search } from '@components';
import s from '@s/components/index.module.scss';

export const StickyMenu: FC = () => {
  return (
    <div className={s.sticky}>
      <div className={s.parent}>
        <div className={s.width}>
          <div className={s.stickyMenu}>
            <div>
              <Categories />
            </div>
            <div>
              <Search />
            </div>
            <div>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
