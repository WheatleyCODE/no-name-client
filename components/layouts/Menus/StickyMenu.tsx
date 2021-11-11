import { FC, useEffect, useState } from 'react';
import { Categories, Cart, Search, ColorPanel, Logo } from '@components';
import s from '@s/components/index.module.scss';
import { CSSTransition } from 'react-transition-group';

export const StickyMenu: FC = () => {
  const [className, setClassName] = useState('');
  const [showLogo, setShowLogo] = useState(false);

  const scrollHandler = (e: any) => {
    const top = e.target.documentElement.scrollTop;
    if (top > 60) {
      setClassName(s.shadow);
      setShowLogo(true);
    } else {
      setClassName('');
      setShowLogo(false);
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
            <div className={s.categoriesBlock}>
              <CSSTransition
                in={showLogo}
                timeout={200}
                classNames={'logo'}
                mountOnEnter
                unmountOnExit
              >
                <div className={s.logo}>
                  <Logo noText />
                </div>
              </CSSTransition>
              <Categories noText={showLogo} />
            </div>
            <div className={s.searchBlock}>
              <Search />
            </div>
            <div className={s.cartBlock}>
              <ColorPanel color="BF1A4TTfd" />
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
