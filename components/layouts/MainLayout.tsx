import { Logo } from './Logo';
import { UserBlock } from './UserBlock';
import { menuItems } from 'consts';
import { HeadTag } from './HeadTag';
import { Footer } from './Footer';
import { IconButton, StickyMenu, Menu } from '@components';
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
      <div className={s.parent}>
        <div className={s.width}>
          <div className={s.header}>
            <div className={s.logo}>
              <Logo />
              <div className={s.mobileMenu}>
                <IconButton className={s.big} icon="far fa-bars" />
              </div>
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
