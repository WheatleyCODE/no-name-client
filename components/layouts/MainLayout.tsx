import { Footer, HeadTag, UserBlock, Logo, MobileMenu, Phone } from '@components';
import { StickyMenu, Menu } from '@components';
import { menuItems, PHONE } from 'consts';
import s from '@s/components/index.module.scss';

export interface MainLayoutProps {
  title: string;
  keywords: string[];
  description: string;
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children, keywords, description, title = 'Главная' } = props;

  return (
    <>
      <HeadTag keywords={keywords} description={description} title={title} />
      <div className={`${s.parent} ${s.mobile}`}>
        <div className={s.width}>
          <div className={s.header}>
            <MobileMenu />
            <div className={s.logo}>
              <Logo />
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
