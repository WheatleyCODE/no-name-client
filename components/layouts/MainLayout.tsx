import { Logo } from './Logo';
import { Menu } from './Menu';
import { UserBlock } from './UserBlock';
import { menuItems } from 'consts';
import { HeadTag } from './HeadTag';
import { Footer } from './Footer';
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
              <i className="far fa-times" />
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
      <main className={s.main}>{children}</main>
      <Footer />
    </>
  );
};
