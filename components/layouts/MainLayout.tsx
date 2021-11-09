import { Logo } from './Logo';
import { Menu } from './Menu';
import { UserBlock } from './UserBlock';
import { menuItems } from 'consts';
import { HeadTag } from './HeadTag';
import { Footer } from './Footer';
import { Button } from '@components/UI/Buttons/Button';
import { Input } from '@components/UI/Inputs/Input';
import { InputType, useInput } from '@hooks';
import s from '@s/components/index.module.scss';

export interface MainLayoutProps {
  title: string;
  keywords: string[];
  description: string;
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children, keywords, description, title = 'Главная' } = props;
  const textInput = useInput('', 'text', InputType.TEXT);

  return (
    <>
      <HeadTag keywords={keywords} description={description} title={title} />
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
              <Button className={s.blue}>Кнопка</Button>
              <Input
                validError={textInput.validError}
                icon="far fa-envelope"
                isError={textInput.isError}
                defaultParams={textInput.default}
              />
            </div>
          </div>
        </div>
      </div>
      <main className={s.main}>{children}</main>
      <Footer />
    </>
  );
};
