import { Footer, HeadTag, UserBlock, Logo, MobileMenu, Phone } from '@components';
import { StickyMenu, Menu } from '@components';
import { MAX_CLIENT_WIDTH_MOBILE, menuItems, PHONE } from 'consts';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from '@s/components/index.module.scss';

export interface MainLayoutProps {
  title: string;
  keywords: string[];
  description: string;
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children, keywords, description, title = 'Главная' } = props;
  const [showLogo, setShowLogo] = useState(false);

  const scrollHandler = (e: any) => {
    const top = e.target.documentElement.scrollTop;
    if (document.documentElement.scrollWidth <= MAX_CLIENT_WIDTH_MOBILE) {
      return;
    }

    if (top > 60) {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      <HeadTag keywords={keywords} description={description} title={title} />
      <div className={`${s.parent} ${s.mobile}`}>
        <div className={s.width}>
          <div className={s.header}>
            <MobileMenu />
            <div className={s.logo}>
              <CSSTransition in={showLogo} timeout={150} classNames={'logorev'}>
                <Logo noText />
              </CSSTransition>
              <h3>JET COLOR</h3>
            </div>
            <div className={s.menu}>
              <Menu menuItems={menuItems} />
            </div>
            <div className={s.user}>
              <Phone adaptive phone={PHONE} />
              <UserBlock />
            </div>
          </div>
        </div>
      </div>
      <StickyMenu />
      <main className={s.main}>{children}</main>
      <Footer />
    </>
  );
};
