import { FC, useEffect, useState } from 'react';
import { Categories, Cart, Search } from '@components';
import s from '@s/components/index.module.scss';

export const StickyMenu: FC = () => {
  const [className, setClassName] = useState('');

  const scrollHandler = (e: any) => {
    const top = e.target.documentElement.scrollTop;
    if (top > 60) {
      setClassName(s.shadow);
    } else {
      setClassName('');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className={`${s.sticky} ${className}`}>
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
