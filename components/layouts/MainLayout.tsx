import { Footer, HeadTag, UserBlock, Logo, MobileMenu } from '@components';
import { StickyMenu, Menu } from '@components';
import s from '@s/components/index.module.scss';
import { menuItems } from 'consts';

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
