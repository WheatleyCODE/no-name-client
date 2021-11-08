import Head from 'next/head';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { UserBlock } from './UserBlock';
import { menuItems } from 'consts';
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
      <Head>
        <title>{title} | noname</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(' ')} />
      </Head>
      <div className={s.parent}>
        <div className={s.width}>
          <div className={s.header}>
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
      <main className={s.main}>{children}</main>
      <footer className={s.footer}>
        <h2>Footer</h2>
      </footer>
    </>
  );
};
