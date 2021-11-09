import { LoginForm, MainLayout } from '@components';
import { NextPage } from 'next';
import s from '@s/pages/index.module.scss';

const Registration: NextPage = () => {
  return (
    <MainLayout
      description="Авторизация на сайте noname"
      title="Авторизация"
      keywords={['Регистрация', 'noname']}
    >
      <div className={s.auth}>
        <div className={s.form}>
          <LoginForm reg />
        </div>
      </div>
    </MainLayout>
  );
};

export default Registration;
