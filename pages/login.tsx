import { LoginForm, MainLayout } from '@components';
import { NextPage } from 'next';
import { useAuth } from '@hooks';
import s from '@s/pages/index.module.scss';

const Login: NextPage = () => {
  useAuth();
  return (
    <MainLayout
      description="Авторизация на сайте noname"
      title="Авторизация"
      keywords={['Логин', 'noname']}
    >
      <div className={s.auth}>
        <div className={s.form}>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
